import { useState } from 'react';
import { uploadMemeToImgBB } from '../api/uploadMeme';
import Button from '../components/Button';
import { UploadContainer, UploadTitle, UploadInput, UploadPreview } from '../styles/UploadStyles';

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
    <UploadContainer>
      <UploadTitle>📤 Upload Meme</UploadTitle>
      <UploadInput type="file" accept="image/*" onChange={handleFileChange} />
      <UploadInput
        type="text"
        placeholder="Add a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <Button onClick={handleUpload}>{uploading ? 'Uploading...' : 'Upload Meme'}</Button>

      {uploadedUrl && (
        <UploadPreview>
          <p>Upload Successful!</p>
          <img src={uploadedUrl} alt="Uploaded Meme" />
        </UploadPreview>
      )}
    </UploadContainer>
  );
};

export default Upload;
