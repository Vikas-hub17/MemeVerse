import { useState } from 'react';
import { addComment, deleteComment } from '../api/commentAPI';
import { useAuth } from '../context/AuthContext';

const CommentSection = ({ meme, setMeme }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState('');

  // Add comment
  const handleAddComment = async () => {
    if (!comment.trim()) return;

    try {
      const updatedMeme = await addComment(meme._id, user._id, comment);
      setMeme(updatedMeme);
      setComment('');
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  };

  // Delete comment
  const handleDeleteComment = async (index) => {
    try {
      const updatedMeme = await deleteComment(meme._id, index);
      setMeme(updatedMeme);
    } catch (err) {
      console.error('Failed to delete comment:', err);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Comments</h3>
      <div className="space-y-2">
        {meme.comments.map((c, index) => (
          <div key={index} className="flex justify-between bg-gray-100 p-2 rounded">
            <p>{c.text}</p>
            {user && user._id === c.userId && (
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 p-2 rounded border"
        />
        <button
          onClick={handleAddComment}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
