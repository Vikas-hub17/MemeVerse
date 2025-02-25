import styled from 'styled-components';

export const CommentContainer = styled.div`
  margin-top: 20px;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const CommentButton = styled.button`
  padding: 10px 16px;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #6366F1;
  }
`;

export const CommentList = styled.ul`
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const CommentItem = styled.li`
  padding: 10px;
  background: #f3f4f6;
  border-radius: 6px;
  margin-bottom: 8px;
`;
