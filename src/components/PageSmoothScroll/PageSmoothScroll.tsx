import { FC, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useViewport } from '@/hooks/useSmoothScrollViewport';

interface IProps {
  children: ReactNode;
}

const Viewport = styled.div``;

const PageSmoothScroll: FC<IProps> = ({ children }: IProps) => {
  const { setSmoothScrollViewport, setScrollYPos } = useViewport();
  const viewportRef = useRef<HTMLDivElement>();

  useEffect(() => {
    let locoScroll = null;

    if (viewportRef && viewportRef.current) {
      // @ts-ignore
      import('locomotive-scroll').then((locomotiveModule) => {
        // eslint-disable-next-line
        locoScroll = new locomotiveModule.default({
          el: viewportRef.current,
          smooth: true,
        });

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.scrollerProxy(viewportRef.current, {
          scrollTop(value: any) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: viewportRef.current.style.transform ? 'transform' : 'fixed',
        });

        locoScroll.on('scroll', ({ scroll }) => {
          setScrollYPos(scroll.y);
          ScrollTrigger.update();
        });
        ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
        ScrollTrigger.refresh(true);

        setSmoothScrollViewport(viewportRef.current);
      });
    }

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, [viewportRef]);

  return <Viewport ref={viewportRef}>{children}</Viewport>;
};

export default PageSmoothScroll;
