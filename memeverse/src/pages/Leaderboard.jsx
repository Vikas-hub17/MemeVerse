import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LeaderboardContainer,
  LeaderboardTitle,
  LeaderboardItem,
  MemeImage,
  MemeDetails
} from '../styles/LeaderboardStyles';

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
    <LeaderboardContainer>
      <LeaderboardTitle>🏆 Top Memes</LeaderboardTitle>
      {loading ? (
        <p>Loading...</p>
      ) : (
        topMemes.map((meme, index) => (
          <LeaderboardItem key={meme._id}>
            <MemeImage src={meme.imageUrl} alt="Meme" />
            <MemeDetails>
              <h2>#{index + 1} - {meme.caption || 'Untitled Meme'}</h2>
              <p>Likes: {meme.likes}</p>
            </MemeDetails>
          </LeaderboardItem>
        ))
      )}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
