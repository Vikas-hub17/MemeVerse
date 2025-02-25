import { useState, useEffect, useCallback } from 'react';
import { fetchMemes } from '../api/memeAPI';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import FilterSortBar from '../components/FilterSortBar';
import { motion } from 'framer-motion';
import { fetchFilteredMemes } from '../api/exploreAPI';

const Explore = () => {
  const [memes, setMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadMoreMemes = useCallback(async (stopFetching) => {
    setLoading(true);
    try {
      const newMemes = await fetchMemes(page, 10);
      if (newMemes.length === 0) {
        stopFetching(); // No more memes to load
      } else {
        setMemes((prev) => [...prev, ...newMemes]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      setError('Failed to load memes.');
    } finally {
      setLoading(false);
    }
  }, [page]);

  const [lastMemeRef, isFetching] = useInfiniteScroll(loadMoreMemes);

  useEffect(() => {
    loadMoreMemes(() => {});
  }, []); // Initial meme load

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Explore Memes</h1>
      {memes.map((meme, index) => (
        <div
          key={meme.id}
          ref={index === memes.length - 1 ? lastMemeRef : null}
          className="mb-6 p-4 bg-white dark:bg-gray-800 rounded shadow"
        >
          <img src={meme.url} alt={meme.name} loading="lazy" className="w-full rounded" />
          <h2 className="text-xl mt-2">{meme.name}</h2>
        </div>
      ))}
      {loading && <p className="text-center">Loading more memes...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Explore;
