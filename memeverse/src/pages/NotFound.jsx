import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-black dark:text-white p-5">
      <motion.h1
        className="text-5xl font-bold mb-4 text-primary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        😵 404 - Page Not Found
      </motion.h1>

      <motion.img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Meme"
        className="w-80 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />

      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
      >
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
