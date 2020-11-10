import { useContext } from 'react';
import { CursorFollowerContext } from '@/context/CursorFollowerContext';

const useCursorFollowerState = () => {
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

export { useCursorFollowerState };
