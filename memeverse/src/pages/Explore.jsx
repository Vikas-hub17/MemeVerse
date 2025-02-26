import { useEffect, useState } from 'react';
import { fetchPopularMemes } from '../api/memeAPI';
import MemeCardComponent from '../components/MemeCard';
import FilterSortBar from '../components/FilterSortBar';
import { ExploreContainer, ExploreTitle, MemeGrid } from '../styles/ExploreStyles';

const Explore = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMemes = async () => {
      const memeData = await fetchPopularMemes();
      setMemes(memeData);
      setLoading(false);
    };

    loadPopularMemes();
  }, []);

  return (
    <ExploreContainer>
      <ExploreTitle>🔥 Popular Memes</ExploreTitle>
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
