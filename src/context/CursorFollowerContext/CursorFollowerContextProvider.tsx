import { FC, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { TCursorType } from '@/types';
import CursorFollowerContext from './CursorFollowerContext';

interface IProps {
  children: JSX.Element;
}

type TCursorXY = {
  x: number;
  y: number;
};

const CursorFollowerContextProvider: FC<IProps> = ({ children }: IProps) => {
  const [cursorXY, setCursorXY] = useState<TCursorXY>({
    x: null,
    y: null,
  });
  const [cursorSize, setCursorSize] = useState<number>(10);
  const [cursorType, setCursorType] = useState<TCursorType>('default');

  const value = {
    cursorXY,
    setCursorXY,
    cursorSize,
    setCursorSize: throttle(1000, (v: number) => setCursorSize(v)),
    cursorType,
    setCursorType: throttle(1000, (v: TCursorType) => setCursorType(v)),
  };

  return (
    <CursorFollowerContext.Provider value={value}>
      {children}
    </CursorFollowerContext.Provider>
  );
};

export default CursorFollowerContextProvider;
