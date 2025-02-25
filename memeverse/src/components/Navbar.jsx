import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-primary text-2xl font-bold">MemeVerse</Link>
      <div className="flex gap-4 items-center">
        <Link to="/explore" className="hover:text-primary text-gray-700 dark:text-white">Explore</Link>
        <Link to="/upload" className="hover:text-primary text-gray-700 dark:text-white">Upload</Link>
        <Link to="/leaderboard" className="hover:text-primary text-gray-700 dark:text-white">Leaderboard</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
