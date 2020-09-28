import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SvgArrowNext } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';

const Wrapper = styled.div`
  position: relative;
  height: 110vh;
  font-size: 12vw;
  overflow: hidden;
  min-height: 1033px;

  ${down('lg')} {
    min-height: 1033px;
    margin-bottom: calc(12vw - 40vh);
  }

  ${down('md')} {
    min-height: auto;
    margin-bottom: calc(12vw - 50vh);
  }
`;

const ScaleDownBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 110vh;
  transform-origin: 50% 40%;
  min-height: 1033px;

  ${down('lg')} {
    min-height: 1033px;
  }

  ${down('md')} {
    min-height: auto;
  }
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
  padding: 0 15px;
  font-size: clamp(18px, 5.1vw, 86px);
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  color: ${colors.BLACK};
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
  margin-left: -5em;
  width: 10em;
`;

const StatsImage = styled(HeroImage)`
  top: 1em;
  left: -3.9em;
  width: 4.45em;
`;

const StatsCircleImage = styled(HeroImage)`
  top: 0;
  right: -3.2em;
  width: 4.05em;
`;

const ControlsImage = styled(HeroImage)`
  top: 2.4em;
  right: 0.1em;
  width: 4.3em;
`;

const SearchImage = styled(HeroImage)`
  top: -1em;
  right: -3.6em;
  width: 2em;
`;

const MessengerImage = styled(HeroImage)`
  top: 4.2em;
  left: -2.3em;
  width: 1.9em;
`;

const PictureImage = styled(HeroImage)`
  top: 2.8em;
  right: -3.8em;
  width: 5.2em;
`;

const CodeImage = styled(HeroImage)`
  top: -2.7em;
  left: -3.8em;
  width: 4.6em;
`;

const DiagramImage = styled(HeroImage)`
  top: 2.6em;
  left: -1em;
  width: 4em;
`;

const TextImage = styled(HeroImage)`
  top: -3.3em;
  right: -3.2em;
  width: 5.7em;
`;

const LinkWrapper = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${down('sm')} {
    padding-top: 30px;
  }
`;

const HeroLink = styled.a`
  position: relative;
  z-index: 2;
  top: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: clamp(14px, 2.6vw, 30px);
  font-weight: 600;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & svg {
    margin: 3px 0 0 10px;
    width: 14px;
    fill: ${colors.BLUE};
    transition: all 0.3s ease-in-out;

    ${down('md')} {
      margin-top: 2px;
      width: 8px;
    }
  }

  &:hover {
    color: ${colors.MAJORELLE_BLUE};

    & svg {
      fill: ${colors.MAJORELLE_BLUE};
      transform: translateX(6px);
    }
  }
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

  const timeout = useRef(null);

  const { t } = useTranslation();
  const tHeroTitle = t('hero:title');
  const tHeroLink = t('hero:letsCreateLink');

  const { smoothScrollViewport } = useViewport();

  useEffect(() => {
    let stInstance1: gsap.plugins.ScrollTriggerInstance = null;
    let stInstance2: gsap.plugins.ScrollTriggerInstance = null;

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
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
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
              x: '-2em',
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
              x: '5em',
            },
            '<',
          );

        stInstance1 = ScrollTrigger.create({
          animation: timeline1,
          trigger: wrapperRef.current,
          scroller: smoothScrollViewport,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=3000',
        });

        stInstance2 = ScrollTrigger.create({
          animation: timeline2,
          trigger: wrapperRef.current,
          scroller: smoothScrollViewport,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=3000',
        });
      }, 200);
    }

    return () => {
      if (stInstance1 && stInstance2) {
        stInstance1.kill();
        stInstance2.kill();
      }
      clearTimeout(timeout.current);
    };
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
          <LinkWrapper>
            <Link href="/blog" passHref>
              <HeroLink>
                {tHeroLink}
                <SvgArrowNext />
              </HeroLink>
            </Link>
          </LinkWrapper>
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
