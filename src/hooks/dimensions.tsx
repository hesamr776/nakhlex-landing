import { useState, useEffect, useMemo } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export const usePlayerWidth = () => {
  const { width = 0 } = useWindowSize();

  return useMemo(
    () => (width > 1246 ? 1136 : width > 960 ? width - 110 : width - 45),
    [width],
  );
};
