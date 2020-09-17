import { useEffect } from 'react';

const useStopCssAnimationsOnResize = () => {
  let resizeTimer;

  const handleWindowResize = () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
};

export { useStopCssAnimationsOnResize };
