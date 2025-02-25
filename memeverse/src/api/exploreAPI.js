import axios from 'axios';

// Fetch memes with filters and sorting
export const fetchFilteredMemes = async (category, sortBy) => {
  try {
    const response = await axios.get('http://localhost:5000/api/memes/explore', {
      params: { category, sortBy },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch memes with filters:', error);
    throw error;
  }
};
