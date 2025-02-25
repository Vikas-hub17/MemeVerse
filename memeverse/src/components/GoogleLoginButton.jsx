import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleSuccess = async (response) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: response.tokenId,
      });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleFailure = (error) => {
    console.error('Google Login failed:', error);
  };

  return (
    <GoogleLogin
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
