import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: 50px;
  max-width: 600px;
  margin: 100px auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #4F46E5;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: #6B7280;
`;
