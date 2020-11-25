import { useContext } from 'react';
import { CursorFollowerContext } from '@/context/CursorFollowerContext';

const useCursorFollower = () => {
  const {
    cursorXY,
    setCursorXY,
    cursorSize,
    setCursorSize,
    cursorType,
    setCursorType,
  } = useContext(CursorFollowerContext);

  return {
    cursorXY,
    setCursorXY,
    cursorSize,
    setCursorSize,
    cursorType,
    setCursorType,
  };
};

export { useCursorFollower };
