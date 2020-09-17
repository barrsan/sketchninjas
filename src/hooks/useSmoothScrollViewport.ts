import { useContext } from 'react';
import { SmoothScrollViewportContext } from '@/context/SmoothScrollViewportContext';

const useViewport = () => {
  const vpCtx = useContext(SmoothScrollViewportContext);

  return {
    smoothScrollViewport: vpCtx.viewport,
    setSmoothScrollViewport: vpCtx.setViewport,
    scrollYPos: vpCtx.scrollYPos,
    setScrollYPos: vpCtx.setScrollYPos,
  };
};

export { useViewport };
