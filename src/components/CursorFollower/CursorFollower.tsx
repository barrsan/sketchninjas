import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { colors, common } from '@/constants';
import { TCursorType } from '@/types';

const {
  CURSOR_FOCUS_CLASS_NAME,
  CURSOR_READ_CLASS_NAME,
  CURSOR_VIEW_CLASS_NAME,
} = common;

interface ICursorProps {
  cursorType: TCursorType;
}

const Cursor = styled(motion.div)<ICursorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
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
      duration: 0.3,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const springConfig = {
  damping: 200,
  stiffness: 2000,
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

  const {
    cursorSize,
    cursorType,
    cursorXY,
    setCursorXY,
    setCursorSize,
    setCursorType,
  } = useCursorFollower();

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

  useEffect(() => {
    const viewElements = document.querySelectorAll(
      `[data-cursor="${CURSOR_VIEW_CLASS_NAME}"]`,
    );
    const readElements = document.querySelectorAll(
      `[data-cursor="${CURSOR_READ_CLASS_NAME}"]`,
    );
    const focusElements = document.querySelectorAll(
      `[data-cursor="${CURSOR_FOCUS_CLASS_NAME}"]`,
    );

    const handleMouseMoveFocus = () => {
      setCursorType('baseLink');
      setCursorSize(50);
    };

    const handleMouseMoveRead = () => {
      setCursorType('blogPostImage');
      setCursorSize(100);
    };

    const handleMouseMoveView = () => {
      setCursorType('workImage');
      setCursorSize(100);
    };

    const handleMouseLeave = () => {
      setCursorType('default');
      setCursorSize(10);
    };

    if (viewElements) {
      viewElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseMoveView);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }
    if (readElements) {
      readElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseMoveRead);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }
    if (focusElements) {
      focusElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseMoveFocus);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }
    return () => {
      if (viewElements) {
        viewElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseMoveView);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
      if (readElements) {
        readElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseMoveRead);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
      if (focusElements) {
        focusElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseMoveFocus);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
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
