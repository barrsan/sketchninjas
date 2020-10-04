import { useContext } from 'react';
import { SmoothScrollViewportContext } from '@/context/SmoothScrollViewportContext';

const useViewport = () => {
  const { scrollYPos, setScrollYPos, viewport, setViewport } = useContext(
    SmoothScrollViewportContext,
  );

  return {
    smoothScrollViewport: viewport,
    setSmoothScrollViewport: setViewport,
    scrollYPos,
    setScrollYPos,
  };
};

export { useViewport };
