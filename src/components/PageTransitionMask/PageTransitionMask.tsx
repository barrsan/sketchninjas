import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, useIsPresent } from 'framer-motion';
import hexToRgba from 'hex-to-rgba';
import { SvgLogo } from '@/components/Svg';
import { common, colors } from '@/constants';

interface IMaskProps {
  isInvert: boolean;
}

const LOGO_COLOR = hexToRgba(colors.BLACK, 0.3);

const Mask = styled(motion.div)<IMaskProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  left: 0;
  width: 100%;
  height: 0;
  background-color: ${colors.ZIRCON};
  overflow: hidden;

  ${({ isInvert }: IMaskProps) => {
    if (isInvert) {
      return css`
        top: 0;
      `;
    }
    return css`
      bottom: 0;
    `;
  }}
`;

const LogoWrapper = styled(motion.div)`
  text-align: center;
`;

const Title = styled.p`
  margin-top: 10px;
  font-size: 21px;
  font-weight: 600;
  color: ${LOGO_COLOR};
`;

const maskVariants = {
  hidden: {
    height: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    height: '100%',
    transition: {
      duration: 0.6,
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const PageTransitionMask = () => {
  const [isInvert, setInvert] = useState(true);

  const isPresent = useIsPresent();

  useEffect(() => {
    if (!isPresent) {
      setInvert(false);
    }
  }, [isPresent]);

  return (
    <Mask
      isInvert={isInvert}
      variants={maskVariants}
      exit="exit"
      initial="exit"
      animate="hidden"
    >
      <LogoWrapper variants={logoVariants}>
        <SvgLogo
          width={60}
          fill1={LOGO_COLOR}
          fill2={LOGO_COLOR}
          fill3={LOGO_COLOR}
        />
        <Title>{common.COMPANY}</Title>
      </LogoWrapper>
    </Mask>
  );
};

export default PageTransitionMask;
