import { FC, useState } from 'react';
import SmoothScrollViewportContext from './SmoothScrollViewportContext';

interface IProps {
  children: JSX.Element;
}

const SmoothScrollViewportContextProvider: FC<IProps> = ({
  children,
}: IProps) => {
  const [viewport, setViewport] = useState<HTMLElement>(null);
  const [scrollBar, setScrollBar] = useState<any>(null);
  const [scrollYPos, setScrollYPos] = useState<number>(0);

  const value = {
    viewport,
    setViewport,
    scrollBar,
    setScrollBar,
    scrollYPos,
    setScrollYPos,
  };

  return (
    <SmoothScrollViewportContext.Provider value={value}>
      {children}
    </SmoothScrollViewportContext.Provider>
  );
};

export default SmoothScrollViewportContextProvider;
