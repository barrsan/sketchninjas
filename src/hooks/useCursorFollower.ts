import { useContext } from 'react';
import { throttle } from 'throttle-debounce';
import { CursorFollowerContext } from '@/context/CursorFollowerContext';
import { TCursorType } from '@/types';

const useCursorFollower = () => {
  const {
    cursorXY,
    setCursorXY,
    cursorSize,
    setCursorSize,
    cursorType,
    setCursorType,
  } = useContext(CursorFollowerContext);

  const throttleSetCursorSize = throttle(1000, (v: number) => {
    setCursorSize(v);
  });

  const throttleSetCursorType = throttle(1000, (v: TCursorType) => {
    setCursorType(v);
  });

  return {
    cursorXY,
    setCursorXY,
    cursorSize,
    setCursorSize: throttleSetCursorSize,
    cursorType,
    setCursorType: throttleSetCursorType,
  };
};

export { useCursorFollower };
