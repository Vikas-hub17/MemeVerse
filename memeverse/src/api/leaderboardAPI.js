import axios from 'axios';

export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/memes/leaderboard');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    throw error;
  }
};
