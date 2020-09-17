import { FC } from 'react';
import { ISvgProps } from '@/types';

const SvgArrowNext: FC<ISvgProps> = (props: ISvgProps) => {
  return (
    <svg viewBox="0 0 8 14" {...props}>
      <path d="M7.707 7.707l-6 6a.996.996 0 01-1.414 0 1 1 0 010-1.414L5.586 7 .293 1.707A1 1 0 011.707.293l6 6a.999.999 0 010 1.414z" />
    </svg>
  );
};

export default SvgArrowNext;
