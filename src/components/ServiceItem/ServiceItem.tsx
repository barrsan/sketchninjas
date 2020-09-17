import { FC, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { Row, Col } from 'styled-bootstrap-grid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import hexToRgba from 'hex-to-rgba';
import { SvgFlash, SvgPalette, SvgCode } from '@/components/Svg';
import { useViewport } from '@/hooks/useSmoothScrollViewport';
import { colors } from '@/constants';

interface IProps {
  title: string;
  description: string;
  stack: string;
  type: 'design' | 'motion' | 'code';
  imagePosition?: 'left' | 'right';
  iconPosition?: 'top left' | 'top right' | 'bottom left' | 'bottom right';
  first?: boolean;
  last?: boolean;
}

interface IWrapperProps {
  first: boolean;
  last: boolean;
}

interface IInfoWrapperProps {
  last: boolean;
  imagePosition: 'left' | 'right';
}

interface IImageIconWrapperProps {
  position: 'top left' | 'top right' | 'bottom left' | 'bottom right';
}

type TInitScrollTrigger = {
  trigger: any;
  image: any;
  icon: any;
  scroller: any;
};

const Wrapper = styled.div<IWrapperProps>`
  padding: 80px 0;

  ${down('md')} {
    padding: 50px 0;
  }

  ${({ first }: IWrapperProps) => {
    if (first) {
      return css`
        padding-top: 0;
      `;
    }

    return '';
  }};

  ${({ last }: IWrapperProps) => {
    if (last) {
      return css`
        padding-bottom: 0;
      `;
    }

    return '';
  }};
`;

const InfoWrapper = styled.div<IInfoWrapperProps>`
  ${({ imagePosition }: IInfoWrapperProps) => {
    if (imagePosition === 'left') {
      return css`
        margin-left: 80px;
      `;
    }
    return css`
      margin-right: 80px;
    `;
  }}

  ${down('md')} {
    margin: 30px 0 60px 0;

    ${({ last }: IInfoWrapperProps) => {
      if (last) {
        return css`
          margin: 30px 0 0 0;
        `;
      }

      return '';
    }};
  }
`;

const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 600;
  color: ${colors.BLACK};
`;

const Description = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.GRAY};
`;

const Stack = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: ${colors.BLACK};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ServiceImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const ImageIconWrapper = styled.div<IImageIconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  width: 100px;
  height: 100px;
  background-color: ${colors.BLUE};
  border-radius: 100%;
  box-shadow: 0 6px 40px 0 ${hexToRgba(colors.BLUE, 0.4)};

  ${({ position }: IImageIconWrapperProps) => {
    switch (position) {
      case 'top right':
        return css`
          top: -30px;
          right: 60px;
        `;
      case 'bottom left':
        return css`
          bottom: 0px;
          left: 60px;
        `;
      case 'bottom right':
        return css`
          bottom: 0px;
          right: 60px;
        `;
      default:
        return css`
          top: -30px;
          left: 60px;
        `;
    }
  }}
`;

const IMAGES = {
  design: '/assets/images/design.svg',
  motion: '/assets/images/motion.svg',
  code: '/assets/images/code.svg',
};

const ServiceItem: FC<IProps> = ({
  title,
  description,
  stack,
  type,
  imagePosition = 'left',
  iconPosition = 'top left',
  first = false,
  last = false,
}: IProps) => {
  const triggerRef = useRef<HTMLDivElement>();
  const imageRef = useRef<HTMLImageElement>();
  const iconRef = useRef<HTMLDivElement>();

  const { smoothScrollViewport } = useViewport();

  const initScrollTrigger = (params: TInitScrollTrigger) => {
    const { trigger, icon, image, scroller } = params;
    if (trigger && image && icon && scroller) {
      const xPos = imagePosition === 'left' ? -100 : 100;
      const yPos = imagePosition === 'left' ? 100 : -100;

      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: 'none', duration: 0.5 });

      const timeline = gsap.timeline();

      timeline
        .from(image, { x: xPos, opacity: 0 })
        .from(icon, { scale: 0, duration: 0.2 });

      const animationIcon = gsap.to(icon, { y: yPos, duration: 1 });

      ScrollTrigger.create({
        animation: timeline,
        trigger,
        scroller,
        start: 'top 85%',
        id: type,
        onEnter: () => timeline.play(),
      });

      ScrollTrigger.create({
        trigger,
        scroller,
        onLeaveBack: () => timeline.pause(0),
      });

      ScrollTrigger.create({
        animation: animationIcon,
        trigger,
        scroller,
        scrub: true,
        start: 'top center',
      });
    }
  };

  useEffect(() => {
    if (
      imageRef &&
      imageRef.current &&
      triggerRef &&
      triggerRef.current &&
      iconRef &&
      iconRef.current &&
      smoothScrollViewport
    ) {
      initScrollTrigger({
        trigger: triggerRef.current,
        image: imageRef.current,
        icon: iconRef.current,
        scroller: smoothScrollViewport,
      });
    }
  }, [imageRef, iconRef, triggerRef, smoothScrollViewport]);

  const orderValueFirst = imagePosition === 'left' ? 1 : 2;
  const orderValueSecond = imagePosition === 'left' ? 2 : 1;

  const renderIcon = () => {
    switch (type) {
      case 'design': {
        return <SvgPalette height={50} fill={colors.WHITE} />;
      }
      case 'motion': {
        return <SvgFlash height={50} fill={colors.WHITE} />;
      }
      default: {
        return <SvgCode width={50} fill={colors.WHITE} />;
      }
    }
  };

  return (
    <Wrapper ref={triggerRef} first={first} last={last}>
      <Row alignItems="center">
        <Col md={12} lg={7} mdOrder={1} lgOrder={orderValueFirst}>
          <ImageWrapper>
            <ImageIconWrapper ref={iconRef} position={iconPosition}>
              {renderIcon()}
            </ImageIconWrapper>
            <ServiceImage ref={imageRef} src={IMAGES[type]} />
          </ImageWrapper>
        </Col>
        <Col md={12} lg={5} mdOrder={2} lgOrder={orderValueSecond}>
          <InfoWrapper imagePosition={imagePosition} last={last}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Stack>{stack}</Stack>
          </InfoWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ServiceItem;
