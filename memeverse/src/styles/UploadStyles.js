import styled from 'styled-components';

export const UploadContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const UploadTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const UploadInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const UploadPreview = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px;
    margin-top: 10px;
    border-radius: 8px;
  }
`;
