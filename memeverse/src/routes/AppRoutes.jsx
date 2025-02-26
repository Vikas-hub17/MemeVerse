import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import MemeDetails from '../pages/MemeDetails';
import Leaderboard from '../pages/Leaderboard';
import Login from '../pages/Login';
import MemeGenerator from '../pages/MemeGenerator';
import NotFound from '../pages/NotFound';
import { useAuth } from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} />
      <Route path="/upload" element={<PrivateRoute><Upload /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/meme/:id" element={<PrivateRoute><MemeDetails /></PrivateRoute>} />
      <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
      <Route path="/generate" element={<PrivateRoute><MemeGenerator /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
