import { useEffect, useState } from 'react';
import { fetchMemes } from '../api/memeAPI';
import MemeCardComponent from '../components/MemeCard';
import { HomeContainer, HomeTitle, MemeGrid } from '../styles/HomeStyles';

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
    <HomeContainer>
      <HomeTitle>🔥 Trending Memes</HomeTitle>
      {loading ? (
        <p>Loading memes...</p>
      ) : (
        <MemeGrid>
          {trendingMemes.map((meme) => (
            <MemeCardComponent key={meme.id} image={meme.url} title={meme.name} />
          ))}
        </MemeGrid>
      )}
    </HomeContainer>
  );
};

export default Home;
