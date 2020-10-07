import { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { useViewport } from '@/hooks/useSmoothScrollViewport';

interface IProps {
  imageSrc: string;
}

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 60px;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  ${down('md')} {
    height: 50vh;
    min-height: 400px;
  }
`;

const CoverWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  perspective: 100px;
  ${down('md')} {
    transform: scale(1.3);
  }
`;

const Cover = styled(motion.div)<IProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageSrc }: IProps) => imageSrc});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const imageVariants = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const BlogPostCover: FC<IProps> = ({ imageSrc }: IProps) => {
  const { smoothScrollViewport } = useViewport();

  const triggerRef = useRef<HTMLDivElement>();
  const timeout = useRef(null);

  const controls = useAnimation();
  const scrollY = useMotionValue('0%');

  const topBorder = -30;
  const bottomBorder = 30;
  const difference = Math.abs(topBorder - bottomBorder);

  useEffect(() => {
    let stInstance1: gsap.plugins.ScrollTriggerInstance = null;

    if (triggerRef && triggerRef.current && smoothScrollViewport) {
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        stInstance1 = ScrollTrigger.create({
          trigger: triggerRef.current,
          scroller: smoothScrollViewport,
          start: 'top bottom',
          onEnter: () => {
            controls.start('show');
          },
          onUpdate: ({ progress }) => {
            const value =
              -difference / 2 + (difference / 100) * (progress * 100);
            scrollY.set(`${value}%`);
          },
        });
      }, 500);
    }

    return () => {
      if (stInstance1) {
        stInstance1.kill();
      }
      clearTimeout(timeout.current);
    };
  }, [triggerRef, smoothScrollViewport]);

  const parallaxImageStyle = {
    x: 0,
    y: scrollY,
  };

  return (
    <Wrapper ref={triggerRef}>
      <CoverWrapper>
        <Cover
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          imageSrc={imageSrc}
          style={parallaxImageStyle}
        />
      </CoverWrapper>
    </Wrapper>
  );
};

export default BlogPostCover;
