import { createContext } from 'react';

interface IContext {
  viewport: HTMLElement;
  setViewport: (v: HTMLElement) => void;
  scrollBar: any;
  setScrollBar: (v: any) => void;
  scrollYPos: number;
  setScrollYPos: (v: number) => void;
}

export default (() => {
  const SmoothScrollViewportContext = createContext<IContext>(undefined);
  return SmoothScrollViewportContext;
})();
