import { FC, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollBar from 'smooth-scrollbar';
import { useViewport } from '@/hooks/useSmoothScrollViewport';

interface IProps {
  children: ReactNode;
}

const Scrollable = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const ScrollableInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const PageSmoothScroll: FC<IProps> = ({ children }: IProps) => {
  const {
    setSmoothScrollViewport,
    setScrollYPos,
    setScrollBar,
  } = useViewport();

  const viewportRef = useRef<HTMLDivElement>();

  const updateScrollPosition = (scrollBar) => {
    setScrollYPos(scrollBar.offset.y);
  };

  useEffect(() => {
    let bodyScrollBar = null;
    const isSSR = typeof window === 'undefined';

    if (!isSSR) {
      bodyScrollBar = ScrollBar.init(viewportRef.current);

      ScrollTrigger.scrollerProxy(viewportRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });

      setSmoothScrollViewport(viewportRef.current);
      setScrollBar(bodyScrollBar);

      bodyScrollBar.addListener(updateScrollPosition);
      bodyScrollBar.addListener(ScrollTrigger.update);
    }
    return () => {
      if (!isSSR) {
        ScrollBar.destroy(viewportRef.current);
        bodyScrollBar!.removeListener(updateScrollPosition);
        bodyScrollBar!.removeListener(ScrollTrigger.update);
      }

      setScrollYPos(0);
      setSmoothScrollViewport(null);
    };
  }, [viewportRef]);

  return (
    <Scrollable ref={viewportRef}>
      <ScrollableInner>{children}</ScrollableInner>
    </Scrollable>
  );
};

export default PageSmoothScroll;
