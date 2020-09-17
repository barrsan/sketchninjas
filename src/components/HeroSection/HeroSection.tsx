import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';

const Wrapper = styled.div`
  position: relative;
  height: 120vh;
  font-size: 12vw;
  will-change: transform;
`;

const ScaleDownBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 120vh;
  transform-origin: 50% 40%;
`;

const TitleWrapper = styled.div`
  padding: 0 15px;
  position: relative;
  top: 26vh;
`;

const Title = styled.h1`
  position: relative;
  z-index: 3;
  margin: 0 auto;
  max-width: 1110px;
  font-size: 86px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  color: ${colors.BLACK};

  ${down('md')} {
    font-size: 48px;
  }

  ${down('sm')} {
    font-size: 36px;
  }

  ${down('xs')} {
    font-size: 28px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  z-index: 2;
  display: block;
  will-change: opacity;
`;

const CoverImage = styled(HeroImage)`
  z-index: 1;
  top: -2em;
  left: 50%;
  margin-left: -5.5em;
  width: 11em;
`;

const StatsImage = styled(HeroImage)`
  top: 1.1em;
  left: -4.4em;
  width: 4.45em;
`;

const StatsCircleImage = styled(HeroImage)`
  top: -0.1em;
  right: -3.6em;
  width: 4.05em;
`;

const ControlsImage = styled(HeroImage)`
  top: 2.9em;
  right: -0.3em;
  width: 4.3em;
`;

const SearchImage = styled(HeroImage)`
  top: -1em;
  right: -4.2em;
  width: 2em;
`;

const MessengerImage = styled(HeroImage)`
  top: 4.7em;
  left: -3em;
  width: 1.9em;
`;

const PictureImage = styled(HeroImage)`
  top: 3.2em;
  right: -4.4em;
  width: 5.2em;
`;

const CodeImage = styled(HeroImage)`
  top: -2.8em;
  left: -4.6em;
  width: 4.6em;
`;

const DiagramImage = styled(HeroImage)`
  top: 3.1em;
  left: -1.8em;
  width: 4em;
`;

const TextImage = styled(HeroImage)`
  top: -3.6em;
  right: -4.4em;
  width: 5.7em;
`;

const HeroSection = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const scaleDownBoxRef = useRef<HTMLDivElement>();
  const coverImageRef = useRef<HTMLImageElement>();
  const statsImageRef = useRef<HTMLImageElement>();
  const statsCircleImageRef = useRef<HTMLImageElement>();
  const diagramImageRef = useRef<HTMLImageElement>();
  const codeImageRef = useRef<HTMLImageElement>();
  const pictureImageRef = useRef<HTMLImageElement>();
  const messengerImageRef = useRef<HTMLImageElement>();
  const searchImageRef = useRef<HTMLImageElement>();
  const textImageRef = useRef<HTMLImageElement>();
  const controlsImageRef = useRef<HTMLImageElement>();

  const { t } = useTranslation();
  const tHeroTitle = t('hero:title');

  const { smoothScrollViewport } = useViewport();

  useEffect(() => {
    if (
      wrapperRef &&
      wrapperRef.current &&
      scaleDownBoxRef &&
      scaleDownBoxRef.current &&
      coverImageRef &&
      coverImageRef.current &&
      statsImageRef &&
      statsImageRef.current &&
      statsCircleImageRef &&
      statsCircleImageRef.current &&
      diagramImageRef &&
      diagramImageRef.current &&
      codeImageRef &&
      codeImageRef.current &&
      pictureImageRef &&
      pictureImageRef.current &&
      messengerImageRef &&
      messengerImageRef.current &&
      searchImageRef &&
      searchImageRef.current &&
      textImageRef &&
      textImageRef.current &&
      controlsImageRef &&
      controlsImageRef.current &&
      smoothScrollViewport
    ) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.defaults({ ease: 'none', duration: 0.5 });

      gsap.set(scaleDownBoxRef.current, {
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(coverImageRef.current, {
        opacity: 0,
      });

      const timeline1 = gsap.timeline().to(scaleDownBoxRef.current, {
        scale: 0.46,
      });

      const timeline2 = gsap
        .timeline()
        .to(coverImageRef.current, {
          opacity: 1,
        })
        .from(
          statsImageRef.current,
          {
            x: '-3.9em',
          },
          '<',
        )
        .from(
          codeImageRef.current,
          {
            y: '-1em',
            x: '-4.3em',
          },
          '<',
        )
        .from(
          diagramImageRef.current,
          {
            y: '4em',
          },
          '<',
        )
        .from(
          messengerImageRef.current,
          {
            y: '5em',
            x: '-2em',
          },
          '<',
        )
        .from(
          textImageRef.current,
          {
            y: '-2.7em',
            x: '4.7em',
          },
          '<',
        )
        .from(
          statsCircleImageRef.current,
          {
            x: '4em',
          },
          '<',
        )
        .from(
          searchImageRef.current,
          {
            y: '0.6em',
            x: '5em',
          },
          '<',
        )
        .from(
          pictureImageRef.current,
          {
            y: '5em',
            x: '5em',
          },
          '<',
        )
        .from(
          controlsImageRef.current,
          {
            y: '4.5em',
          },
          0,
        );

      ScrollTrigger.create({
        animation: timeline1,
        trigger: wrapperRef.current,
        scroller: smoothScrollViewport,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=3000',
      });

      ScrollTrigger.create({
        animation: timeline2,
        trigger: wrapperRef.current,
        scroller: smoothScrollViewport,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=3000',
      });
    }
  }, [
    wrapperRef,
    scaleDownBoxRef,
    coverImageRef,
    statsImageRef,
    statsCircleImageRef,
    diagramImageRef,
    codeImageRef,
    pictureImageRef,
    messengerImageRef,
    searchImageRef,
    textImageRef,
    controlsImageRef,
    smoothScrollViewport,
  ]);

  return (
    <Wrapper ref={wrapperRef}>
      <ScaleDownBox ref={scaleDownBoxRef}>
        <TitleWrapper>
          <Title>{tHeroTitle}</Title>
          <CoverImage
            ref={coverImageRef}
            src="/assets/images/hero-monitor.png"
          />
          <StatsImage ref={statsImageRef} src="/assets/images/hero-stats.png" />
          <StatsCircleImage
            ref={statsCircleImageRef}
            src="/assets/images/hero-stats-circle.png"
          />
          <ControlsImage
            ref={controlsImageRef}
            src="/assets/images/hero-controls.png"
          />
          <SearchImage
            ref={searchImageRef}
            src="/assets/images/hero-search.png"
          />
          <MessengerImage
            ref={messengerImageRef}
            src="/assets/images/hero-messenger.png"
          />
          <PictureImage
            ref={pictureImageRef}
            src="/assets/images/hero-picture.png"
          />
          <CodeImage ref={codeImageRef} src="/assets/images/hero-code.png" />
          <DiagramImage
            ref={diagramImageRef}
            src="/assets/images/hero-diagram.png"
          />
          <TextImage ref={textImageRef} src="/assets/images/hero-text.png" />
        </TitleWrapper>
      </ScaleDownBox>
    </Wrapper>
  );
};

export default HeroSection;
