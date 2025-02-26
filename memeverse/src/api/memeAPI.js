import axios from 'axios';

// Fetch popular memes from Imgflip API
export const fetchPopularMemes = async () => {
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes');
    if (response.data.success) {
      return response.data.data.memes;
    } else {
      throw new Error('Failed to fetch memes from Imgflip');
    }
  } catch (error) {
    console.error('API Error: Fetch Popular Memes', error);
    return { error: 'Failed to fetch memes. Please try again later.' };
  }
};

// Generate a meme using Imgflip API
export const generateMeme = async (template_id, text0, text1) => {
  try {
    const params = new URLSearchParams();
    params.append('template_id', template_id);
    params.append('username', process.env.REACT_APP_IMGFLIP_USERNAME);
    params.append('password', process.env.REACT_APP_IMGFLIP_PASSWORD);
    params.append('text0', text0);
    params.append('text1', text1);

    const response = await axios.post('https://api.imgflip.com/caption_image', params);
    if (response.data.success) {
      return response.data.data.url;
    } else {
      throw new Error('Meme generation failed');
    }
  } catch (error) {
    console.error('API Error: Generate Meme', error);
    return { error: 'Failed to generate meme. Please try again later.' };
  }
};
