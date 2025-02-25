import axios from 'axios';

// Add a comment
export const addComment = async (memeId, userId, text) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/comments/${memeId}`, {
      userId,
      text,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add comment:', error);
    throw error;
  }
};

// Delete a comment
export const deleteComment = async (memeId, commentIndex) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/comments/${memeId}/${commentIndex}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete comment:', error);
    throw error;
  }
};
