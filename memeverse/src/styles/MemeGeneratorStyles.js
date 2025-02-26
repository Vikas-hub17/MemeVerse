import styled, { keyframes } from 'styled-components';

// Animation for meme generation
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

export const MemeGenContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
`;

export const MemeGenTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #4F46E5;
  margin-bottom: 20px;
`;

export const MemeForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

export const MemeInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #D1D5DB;

  &:focus {
    outline: none;
    border-color: #4F46E5;
  }
`;

export const MemeTemplateList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const MemeTemplateItem = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: ${({ selected }) => (selected ? '2px solid #4F46E5' : '1px solid #D1D5DB')};
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  p {
    text-align: center;
    margin-top: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const GeneratedMemeImage = styled.img`
  margin-top: 30px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.5s ease-in-out;
`;
