import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: #4F46E5;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6366F1;
  }
`;
