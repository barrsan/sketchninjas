import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const usePageLoading = () => {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();

  const timeout = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setPageLoading(true);
    };

    const handleRouteChangeComplete = () => {
      timeout.current = setTimeout(() => {
        setPageLoading(false);
      }, 200);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      clearTimeout(timeout.current);
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return {
    pageLoading,
  };
};

export { usePageLoading };
