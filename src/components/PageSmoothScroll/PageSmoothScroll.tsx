import { FC, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { useCursorFollower } from '@/hooks/useCursorFollower';

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
  const { setSmoothScrollViewport, setScrollYPos } = useViewport();
  const { setCursorSize, setCursorType } = useCursorFollower();

  const viewportRef = useRef<HTMLDivElement>();

  const updateScrollPosition = (scrollbar) => {
    setScrollYPos(scrollbar.offset.y);
    setCursorType('default');
    setCursorSize(10);
  };

  useEffect(() => {
    let bodyScrollBar = null;
    const isSSR = typeof window === 'undefined';

    if (!isSSR) {
      bodyScrollBar = Scrollbar.init(viewportRef.current);

      ScrollTrigger.scrollerProxy(viewportRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });

      setSmoothScrollViewport(viewportRef.current);

      bodyScrollBar.addListener(updateScrollPosition);
      bodyScrollBar.addListener(ScrollTrigger.update);
    }
    return () => {
      if (!isSSR) {
        Scrollbar.destroy(viewportRef.current);
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
