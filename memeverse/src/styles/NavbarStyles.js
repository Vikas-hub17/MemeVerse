import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavbarLink = styled.a`
  color: #1F2937;
  text-decoration: none;
  margin-right: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #4F46E5;
  }
`;
