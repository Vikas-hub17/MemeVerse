import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

export const LeaderboardTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const LeaderboardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: white;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MemeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
`;

export const MemeDetails = styled.div`
  h2 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  p {
    color: #4B5563;
  }
`;
