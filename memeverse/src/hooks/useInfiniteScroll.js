import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef();

  const lastElementRef = (node) => {
    if (isFetching) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsFetching(true);
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      setIsFetching(false);
    });
  }, [isFetching, callback]);

  return [lastElementRef, isFetching];
};

export default useInfiniteScroll;
