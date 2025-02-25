import { useState } from 'react';
import {
  CommentContainer,
  CommentInput,
  CommentButton,
  CommentList,
  CommentItem
} from '../styles/CommentStyles';

const CommentSection = ({ meme, setMeme }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = { text: comment, id: Date.now() };
      setMeme({ ...meme, comments: [...meme.comments, newComment] });
      setComment('');
    }
  };

  return (
    <CommentContainer>
      <h3>Comments</h3>
      <CommentInput
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <CommentButton onClick={handleCommentSubmit}>Submit</CommentButton>
      <CommentList>
        {meme.comments.map((c) => (
          <CommentItem key={c.id}>{c.text}</CommentItem>
        ))}
      </CommentList>
    </CommentContainer>
  );
};

export default CommentSection;
