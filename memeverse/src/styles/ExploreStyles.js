import styled from 'styled-components';

export const ExploreContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const ExploreTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #4F46E5;
`;

export const MemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
