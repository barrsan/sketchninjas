import { createContext } from 'react';
import { TCursorType } from '@/types';

interface IContext {
  cursorXY: TCursorXY;
  setCursorXY: (v: TCursorXY) => void;
  cursorSize: number;
  setCursorSize: (v: number) => void;
  cursorType: TCursorType;
  setCursorType: (v: TCursorType) => void;
}

type TCursorXY = {
  x: number | null;
  y: number | null;
};

export default (() => {
  const CursorFollowerContext = createContext<IContext>(undefined);
  return CursorFollowerContext;
})();
