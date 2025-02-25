import { useEffect, useState } from 'react';
import { fetchUserProfile, fetchUserMemes, updateUserProfile } from '../api/profileAPI';
import { useAuth } from '../context/AuthContext';
import { uploadMemeToImgBB } from '../api/uploadMeme';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileButton,
  MemeGrid,
  MemeImage
} from '../styles/ProfileStyles';

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
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage src={formData.profilePicture || 'https://via.placeholder.com/150'} alt="Profile" />
        <ProfileInfo>
          {editing ? (
            <>
              <input type="file" onChange={handleImageUpload} />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
              <ProfileButton onClick={handleSave}>Save</ProfileButton>
            </>
          ) : (
            <>
              <h2>{profile?.name}</h2>
              <p>{profile?.bio}</p>
              <ProfileButton onClick={() => setEditing(true)}>Edit Profile</ProfileButton>
            </>
          )}
        </ProfileInfo>
      </ProfileHeader>

      <h2>Your Memes</h2>
      <MemeGrid>
        {memes.map((meme) => (
          <MemeImage key={meme._id} src={meme.imageUrl} alt="Uploaded Meme" />
        ))}
      </MemeGrid>
    </ProfileContainer>
  );
};

export default Profile;
