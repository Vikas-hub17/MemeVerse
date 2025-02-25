import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  // State for switching between Login and Signup modes
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignup) {
        // Signup request for new users
        const response = await axios.post('http://localhost:5000/api/auth/signup', {
          name,
          email,
          password,
        });
        handleLogin(response.data.token, response.data.user);
      } else {
        // Login request for existing users
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });
        handleLogin(response.data.token, response.data.user);
      }
      navigate('/'); // Redirect to home after successful login/signup
    } catch (err) {
      console.error('Authentication failed:', err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        {isSignup ? '📝 Sign Up' : '🔒 Login'}
      </h1>

      {/* Display errors */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full p-3 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300"
        >
          {isSignup ? 'Create Account' : 'Login'}
        </button>
      </form>

      {/* Toggle between Login and Signup */}
      <p className="mt-4 text-center">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-primary hover:underline focus:outline-none"
        >
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Login;
