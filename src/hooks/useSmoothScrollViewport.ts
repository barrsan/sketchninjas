import { useContext } from 'react';
import { SmoothScrollViewportContext } from '@/context/SmoothScrollViewportContext';

const useViewport = () => {
  const {
    scrollYPos,
    setScrollYPos,
    viewport,
    setViewport,
    scrollBar,
    setScrollBar,
  } = useContext(SmoothScrollViewportContext);

  return {
    smoothScrollViewport: viewport,
    setSmoothScrollViewport: setViewport,
    scrollBar,
    setScrollBar,
    scrollYPos,
    setScrollYPos,
  };
};

export { useViewport };
