import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from '../components/CommentSection';
import {
  DetailsContainer,
  MemeImage,
  MemeCaption,
  MemeStats
} from '../styles/MemeDetailsStyles';

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

  if (loading) return <p>Loading meme...</p>;
  if (!meme) return <p>Meme not found</p>;

  return (
    <DetailsContainer>
      <MemeImage src={meme.imageUrl} alt="Meme" />
      <MemeCaption>{meme.caption}</MemeCaption>
      <MemeStats>Likes: {meme.likes}</MemeStats>
      <CommentSection meme={meme} setMeme={setMeme} />
    </DetailsContainer>
  );
};

export default MemeDetails;
