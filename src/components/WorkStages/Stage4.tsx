import { useRef, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SvgRocket } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import StageCard from './StageCard';

const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 330px;
`;

const CardWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const Image1 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Image2 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Image3 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Image4 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Image5 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Image6 = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: calc(50% - 165px);
`;

const Stage4 = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const img5Ref = useRef<HTMLImageElement>(null);
  const img6Ref = useRef<HTMLImageElement>(null);
  const timeout = useRef(null);

  const { t } = useTranslation();
  const tTitle = t('works:stages.stage4.title');
  const tDescription = t('works:stages.stage4.description');

  const { smoothScrollViewport } = useViewport();

  useEffect(() => {
    let stInstance1: gsap.plugins.ScrollTriggerInstance = null;

    if (
      triggerRef &&
      triggerRef.current &&
      img1Ref &&
      img1Ref.current &&
      img2Ref &&
      img2Ref.current &&
      img3Ref &&
      img3Ref.current &&
      img4Ref &&
      img4Ref.current &&
      img5Ref &&
      img5Ref.current &&
      img6Ref &&
      img6Ref.current &&
      smoothScrollViewport
    ) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        const timeline = gsap.timeline();

        gsap.defaults({ ease: 'none', duration: 0.5 });

        timeline
          .to(img1Ref.current, { x: -180, y: -30 })
          .to(img2Ref.current, { x: -160, y: 100 }, '<')
          .to(img3Ref.current, { x: -200, y: 210 }, '<')
          .to(img4Ref.current, { x: 340, y: -40 }, '<')
          .to(img5Ref.current, { x: 390, y: 70 }, '<')
          .to(img6Ref.current, { x: 320, y: 180 }, '<');

        stInstance1 = ScrollTrigger.create({
          animation: timeline,
          trigger: triggerRef.current,
          scroller: smoothScrollViewport,
          start: 'top 85%',
          end: '+=400',
          scrub: true,
        });
      }, 500);
    }
    return () => {
      if (stInstance1) {
        stInstance1.kill();
      }
      clearTimeout(timeout.current);
    };
  }, [
    triggerRef,
    img1Ref,
    img2Ref,
    img3Ref,
    img4Ref,
    img5Ref,
    img6Ref,
    smoothScrollViewport,
  ]);

  return (
    <Wrapper ref={triggerRef}>
      <CardWrapper>
        <StageCard
          title={tTitle}
          description={tDescription}
          IconComponent={SvgRocket}
        />
      </CardWrapper>
      <Image1 ref={img1Ref} src="/assets/images/stage-4-1.png" alt={tTitle} />
      <Image2 ref={img2Ref} src="/assets/images/stage-4-2.png" alt={tTitle} />
      <Image3 ref={img3Ref} src="/assets/images/stage-4-3.png" alt={tTitle} />
      <Image4 ref={img4Ref} src="/assets/images/stage-4-4.png" alt={tTitle} />
      <Image5 ref={img5Ref} src="/assets/images/stage-4-5.png" alt={tTitle} />
      <Image6 ref={img6Ref} src="/assets/images/stage-4-6.png" alt={tTitle} />
    </Wrapper>
  );
};

export default Stage4;
