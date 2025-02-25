import axios from 'axios';

// Get user profile
export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userId, profileData) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/profile/${userId}`, profileData);
    return response.data;
  } catch (error) {
    console.error('Failed to update profile:', error);
    throw error;
  }
};

// Get user-uploaded memes
export const fetchUserMemes = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/profile/${userId}/memes`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch uploaded memes:', error);
    throw error;
  }
};
