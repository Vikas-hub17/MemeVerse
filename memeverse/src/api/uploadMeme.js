import axios from 'axios';

export const uploadMemeToImgBB = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    );
    return response.data.data.url; // Return uploaded meme URL
  } catch (error) {
    console.error('Failed to upload meme to ImgBB:', error);
    throw error;
  }
};
