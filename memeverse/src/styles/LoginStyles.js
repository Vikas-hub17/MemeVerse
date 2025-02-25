import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 24px;
  color: #4F46E5;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #4F46E5;
  }
`;

export const ToggleLink = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #4F46E5;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: #dc2626;
  text-align: center;
  margin-bottom: 10px;
`;
