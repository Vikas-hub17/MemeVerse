import { useEffect, useState } from 'react';
import { fetchMemes } from '../api/memeAPI';
import MemeCardComponent from '../components/MemeCard';
import FilterSortBar from '../components/FilterSortBar';
import { ExploreContainer, ExploreTitle, MemeGrid } from '../styles/ExploreStyles';

const Explore = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMemes = async () => {
      try {
        const memeData = await fetchMemes();
        setMemes(memeData.slice(0, 20));
      } catch (error) {
        console.error('Failed to fetch memes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMemes();
  }, []);

  return (
    <ExploreContainer>
      <ExploreTitle>🧭 Explore Memes</ExploreTitle>
      <FilterSortBar />
      {loading ? (
        <p>Loading memes...</p>
      ) : (
        <MemeGrid>
          {memes.map((meme) => (
            <MemeCardComponent key={meme.id} image={meme.url} title={meme.name} />
          ))}
        </MemeGrid>
      )}
    </ExploreContainer>
  );
};

export default Explore;
