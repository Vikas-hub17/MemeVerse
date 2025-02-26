import axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_APP_IMGBB_API_KEY;

export const uploadMemeToImgBB = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData);
    if (response.data.success) {
      return response.data.data.url;
    } else {
      throw new Error('Upload failed at ImgBB');
    }
  } catch (error) {
    console.error('API Error: Meme Upload', error);
    return { error: 'Failed to upload meme. Please try again later.' };
  }
};
