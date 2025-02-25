import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    color: #4B5563;
  }
`;

export const ProfileButton = styled.button`
  padding: 8px 16px;
  background-color: #4F46E5;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #6366F1;
  }
`;

export const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const MemeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
