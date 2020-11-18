import { FC, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollBar from 'smooth-scrollbar';
import useMobileDetect from 'use-mobile-detect-hook';
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
  const viewportInnerRef = useRef<HTMLDivElement>();

  const detectMobile = useMobileDetect();

  const isMobile = detectMobile.isMobile();

  const updateScrollPosition = (scrollBar: any) => {
    setScrollYPos(scrollBar.offset.y);
  };

  useEffect(() => {
    let bodyScrollBar = null;
    const isSSR = typeof window === 'undefined';

    if (!isSSR) {
      if (isMobile) {
        document
          .querySelector('body')
          .setAttribute('style', 'overflow-x: auto; overflow-y: auto;');
        document
          .getElementById('__next')
          .setAttribute('style', 'height: auto;');
        viewportRef.current.setAttribute('style', 'height: 100%');
        viewportInnerRef.current.setAttribute(
          'style',
          'height: auto; overflow: auto',
        );
        setSmoothScrollViewport(window);
      } else {
        bodyScrollBar = ScrollBar.init(viewportRef.current, {
          continuousScrolling: false,
        });

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
    }
    return () => {
      if (!isSSR && !isMobile) {
        ScrollBar.destroy(viewportRef.current);
        bodyScrollBar!.removeListener(updateScrollPosition);
        bodyScrollBar!.removeListener(ScrollTrigger.update);
        setScrollYPos(0);
        setSmoothScrollViewport(null);
      }
    };
  }, [viewportRef, isMobile]);

  return (
    <Scrollable ref={viewportRef}>
      <ScrollableInner ref={viewportInnerRef}>{children}</ScrollableInner>
    </Scrollable>
  );
};

export default PageSmoothScroll;
