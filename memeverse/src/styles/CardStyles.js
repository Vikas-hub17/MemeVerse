import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const MemeCard = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  animation: ${fadeIn} 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MemeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
