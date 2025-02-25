import axios from 'axios';

// Fetch popular memes from Imgflip API
export const fetchMemes = async () => {
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes');
    return response.data.data.memes;
  } catch (error) {
    console.error('Failed to fetch memes from Imgflip:', error);
    throw error;
  }
};

// Generate meme using Meme Generator API
export const generateMeme = async (templateId, topText, bottomText, username, password) => {
  try {
    const response = await axios.post('https://api.imgflip.com/caption_image', null, {
      params: {
        template_id: templateId,
        text0: topText,
        text1: bottomText,
        username,
        password,
      },
    });
    return response.data.data.url;
  } catch (error) {
    console.error('Failed to generate meme:', error);
    throw error;
  }
};
