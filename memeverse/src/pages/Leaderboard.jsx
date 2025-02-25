import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [topMemes, setTopMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMemes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/memes/leaderboard');
        setTopMemes(response.data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMemes();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-center">🏆 Meme Leaderboard</h1>
      {loading ? (
        <p className="text-center">Loading leaderboard...</p>
      ) : (
        <div className="space-y-4">
          {topMemes.map((meme, index) => (
            <motion.div
              key={meme._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-card"
            >
              <span className="text-xl font-bold">{index + 1}.</span>
              <img
                src={meme.imageUrl}
                alt="Meme"
                className="w-20 h-20 object-cover rounded-lg shadow"
              />
              <div>
                <h2 className="text-lg font-semibold">{meme.caption || 'Untitled Meme'}</h2>
                <p className="text-gray-500">Likes: {meme.likes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
