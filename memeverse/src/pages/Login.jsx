import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import {
  LoginContainer,
  FormTitle,
  StyledForm,
  StyledInput,
  ToggleLink,
  ErrorMessage
} from '../styles/LoginStyles';
import Button from '../components/Button';

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignup) {
        // Signup flow
        const response = await axios.post('http://localhost:5000/api/auth/signup', {
          name,
          email,
          password
        });
        handleLogin(response.data.token, response.data.user);
      } else {
        // Login flow
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });
        handleLogin(response.data.token, response.data.user);
      }
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <LoginContainer>
      <FormTitle>{isSignup ? 'Create an Account' : 'Login'}</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <StyledForm onSubmit={handleSubmit}>
        {isSignup && (
          <StyledInput
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <StyledInput
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button>{isSignup ? 'Sign Up' : 'Login'}</Button>
      </StyledForm>

      <ToggleLink onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </ToggleLink>
    </LoginContainer>
  );
};

export default Login;
