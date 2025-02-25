import styled, { keyframes } from 'styled-components';

const hoverScale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4F46E5;
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #6366F1;
    animation: ${hoverScale} 0.3s forwards;
  }
`;
