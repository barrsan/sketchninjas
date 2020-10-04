import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors } from '@/constants';
import { TCursorType } from '@/types';

interface ICursorProps {
  cursorType: TCursorType;
}

const Cursor = styled(motion.div)<ICursorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 99%;
  background-color: ${colors.BLUE};
  pointer-events: none;

  ${({ cursorType }: ICursorProps) => {
    if (cursorType === 'baseLink') {
      return css`
        background-color: transparent;
        border: 1px solid ${colors.BLUE};
      `;
    }
    return '';
  }}
`;

const Title = styled(motion.div)`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.WHITE};
`;

const cursorVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const springConfig = {
  damping: 100,
  stiffness: 1500,
};

const CursorFollower = () => {
  const { t } = useTranslation();

  const controls = useAnimation();

  const size = useMotionValue(10);
  const cursorX = useMotionValue(null);
  const cursorY = useMotionValue(null);

  const sizeSpring = useSpring(size, springConfig);
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const { cursorSize, cursorType, cursorXY, setCursorXY } = useCursorFollower();

  const tRead = t('common:read');
  const tView = t('common:view');

  useEffect(() => {
    size.set(cursorSize);
    cursorX.set(cursorXY.x - size.get() / 2);
    cursorY.set(cursorXY.y - size.get() / 2);
  }, [cursorXY, cursorSize]);

  useEffect(() => {
    controls.start('show');

    const moveCursor = (e: MouseEvent) => {
      setCursorXY({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enterCursor = () => {
      controls.start('show');
    };

    const leaveCursor = () => {
      controls.start('hidden');
    };

    document.addEventListener('mouseenter', enterCursor);
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', leaveCursor);

    return () => {
      document.removeEventListener('mouseenter', enterCursor);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', leaveCursor);
    };
  }, []);

  return (
    <Cursor
      variants={cursorVariants}
      initial="hidden"
      animate={controls}
      style={{
        width: sizeSpring,
        height: sizeSpring,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      cursorType={cursorType}
    >
      {cursorType === 'blogPostImage' ? <Title>{tRead}</Title> : null}
      {cursorType === 'workImage' ? <Title>{tView}</Title> : null}
    </Cursor>
  );
};

export default CursorFollower;
