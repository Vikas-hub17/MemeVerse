import { useEffect, useState } from 'react';
import { fetchUserProfile, fetchUserMemes, updateUserProfile } from '../api/profileAPI';
import { useAuth } from '../context/AuthContext';
import { uploadMemeToImgBB } from '../api/uploadMeme';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [memes, setMemes] = useState([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', bio: '', profilePicture: '' });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchUserProfile(user._id);
        setProfile(profileData);
        setFormData({ name: profileData.name, bio: profileData.bio, profilePicture: profileData.profilePicture });
        const userMemes = await fetchUserMemes(user._id);
        setMemes(userMemes);
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };

    if (user) loadProfile();
  }, [user]);

  const handleSave = async () => {
    try {
      const updatedProfile = await updateUserProfile(user._id, formData);
      setProfile(updatedProfile);
      setEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadMemeToImgBB(file);
      setFormData({ ...formData, profilePicture: imageUrl });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">👤 Your Profile</h1>
      <div className="flex items-center gap-4">
        <img src={formData.profilePicture || 'https://via.placeholder.com/150'} alt="Profile" className="w-24 h-24 rounded-full" />
        <div>
          {editing ? (
            <>
              <input type="file" onChange={handleImageUpload} />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block mt-2 p-2 rounded border"
              />
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="block mt-2 p-2 rounded border"
              />
              <button onClick={handleSave} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{profile?.name}</h2>
              <p>{profile?.bio}</p>
              <button onClick={() => setEditing(true)} className="mt-2 px-4 py-2 bg-gray-700 text-white rounded">Edit Profile</button>
            </>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-6">Your Uploaded Memes</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {memes.map((meme) => (
          <img key={meme._id} src={meme.imageUrl} alt="Uploaded Meme" className="rounded shadow" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
