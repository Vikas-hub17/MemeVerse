import { useState } from 'react';
import { uploadMemeToImgBB } from '../api/uploadMeme';
import AnimatedButton from '../components/AnimatedButton';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a meme to upload.');
    setUploading(true);
    try {
      const url = await uploadMemeToImgBB(file);
      setUploadedUrl(url);
      alert('Meme uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">📤 Upload Meme</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full p-2 border rounded mb-4" />
      <input
        type="text"
        placeholder="Add a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="block w-full p-2 border rounded mb-4"
      />
      <AnimatedButton text={uploading ? 'Uploading...' : 'Upload Meme'} onClick={handleUpload} />
      {uploadedUrl && (
        <div className="mt-4">
          <p>Upload Successful!</p>
          <img src={uploadedUrl} alt="Uploaded Meme" className="mt-2 rounded shadow" />
        </div>
      )}
    </div>
  );
};

export default Upload;
