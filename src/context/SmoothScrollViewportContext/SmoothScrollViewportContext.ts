import { createContext } from 'react';

export default (() => {
  const SmoothScrollViewportContext = createContext(undefined);
  return SmoothScrollViewportContext;
})();
