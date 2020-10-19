import { FC, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import imagesLoaded from 'imagesloaded';
import { ArticleText } from '@/components/ArticleBlocks';
import { ImageCaption } from '@/components/shared/article';
import { useViewport } from '@/hooks/useSmoothScrollViewport';

interface IProps {
  src: string;
  limitPositionY?: number;
  caption?: string;
  mode?: TMode;
}

interface ICoverProps {
  imageSrc: string;
}

interface IWrapperProps {
  mode: TMode;
}

type TMode = 'cover' | 'wide' | 'default';

const Wrapper = styled.div<IWrapperProps>`
  position: relative;
  overflow: hidden;

  ${({ mode }: IWrapperProps) => {
    if (mode === 'cover') {
      return css`
        width: 100%;
        height: 100vh;
        min-height: 600px;

        ${down('md')} {
          height: 50vh;
          min-height: 300px;
        }
      `;
    }

    if (mode === 'wide') {
      return css`
        ${up('xl')} {
          margin-left: -190px;
          margin-right: -190px;
          max-width: 100vw;
        }
      `;
    }

    return '';
  }}
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

const Cover = styled(motion.div)<ICoverProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageSrc }: ICoverProps) => imageSrc});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Image = styled(motion.img)`
  width: 100%;
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

const ParallaxImage: FC<IProps> = ({
  src,
  limitPositionY = 30,
  caption = '',
  mode = 'default',
}: IProps) => {
  const { smoothScrollViewport } = useViewport();

  const triggerRef = useRef<HTMLDivElement>();

  const controls = useAnimation();
  const scrollY = useMotionValue('0%');

  const topBorder = -limitPositionY;
  const bottomBorder = limitPositionY;
  const difference = Math.abs(topBorder - bottomBorder);

  const parallaxImageStyle = {
    x: 0,
    y: scrollY,
  };

  useEffect(() => {
    let stInstance: gsap.plugins.ScrollTriggerInstance = null;

    if (triggerRef && triggerRef.current && smoothScrollViewport) {
      imagesLoaded(document.getElementById('__next'), () => {
        stInstance = ScrollTrigger.create({
          trigger: triggerRef.current,
          scroller: smoothScrollViewport,
          start: 'top bottom',
          onEnter: () => {
            controls.start(imageVariants.show);
          },
          onUpdate: ({ progress }) => {
            const value =
              -difference / 2 + (difference / 100) * (progress * 100);
            scrollY.set(`${value}%`);
          },
        });
      });
    }

    return () => {
      if (stInstance) {
        stInstance.kill();
      }
    };
  }, [triggerRef, smoothScrollViewport]);

  const renderImage = () => (
    <Image
      variants={imageVariants}
      initial="hidden"
      animate={controls}
      src={src}
      style={parallaxImageStyle}
    />
  );

  const renderCover = () => (
    <CoverWrapper>
      <Cover
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        imageSrc={src}
        style={parallaxImageStyle}
      />
    </CoverWrapper>
  );

  return (
    <>
      <Wrapper ref={triggerRef} mode={mode}>
        {(mode === 'default' || mode === 'wide') && renderImage()}
        {mode === 'cover' && renderCover()}
      </Wrapper>
      {caption && (
        <ImageCaption>
          <ArticleText type="blogPost" markup={caption} />
        </ImageCaption>
      )}
    </>
  );
};

export default ParallaxImage;
