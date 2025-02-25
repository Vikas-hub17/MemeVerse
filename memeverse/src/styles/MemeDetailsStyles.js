import styled from 'styled-components';

export const DetailsContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const MemeImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const MemeCaption = styled.h2`
  margin-top: 16px;
  font-size: 1.5rem;
  text-align: center;
`;

export const MemeStats = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #4B5563;
`;
