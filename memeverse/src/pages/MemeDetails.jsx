import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from '../components/CommentSection';
import { motion } from 'framer-motion';

const MemeDetails = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/memes/${id}`);
        setMeme(response.data);
      } catch (error) {
        console.error('Failed to fetch meme details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeme();
  }, [id]);

  if (loading) return <p className="text-center">Loading meme...</p>;
  if (!meme) return <p className="text-center">Meme not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-5">
      <motion.h1
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        🎭 Meme Details
      </motion.h1>
      <motion.img
        src={meme.imageUrl}
        alt="Meme"
        className="w-full h-auto rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{meme.caption || 'Untitled Meme'}</h2>
        <p className="text-gray-500">Likes: {meme.likes}</p>
      </div>
      <CommentSection meme={meme} setMeme={setMeme} />
    </div>
  );
};

export default MemeDetails;
