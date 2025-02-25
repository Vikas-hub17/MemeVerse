import { useEffect, useState } from 'react';
import { fetchMemes } from '../api/memeAPI';
import { motion } from 'framer-motion';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
  const [trendingMemes, setTrendingMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingMemes = async () => {
      try {
        const memes = await fetchMemes();
        setTrendingMemes(memes.slice(0, 12)); // Display top 12 memes
      } catch (error) {
        console.error('Failed to fetch memes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMemes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-primary">🔥 Trending Memes</h1>
        <DarkModeToggle />
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading memes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMemes.map((meme, index) => (
            <motion.div
              key={meme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeInOut' }}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-card hover:scale-105 transition-transform duration-300"
            >
              <img
                src={meme.url}
                alt={meme.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="mt-3 text-lg font-semibold">{meme.name}</h2>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
