import { FC } from 'react';
import { ISvgProps } from '@/types';

const SvgTelegram: FC<ISvgProps> = (props: ISvgProps) => {
  return (
    <svg viewBox="0 0 20 18" {...props}>
      <path d="M7.848 11.863l-.331 5.026c.473 0 .678-.22.924-.484l2.219-2.29 4.598 3.637c.844.507 1.438.24 1.665-.838l3.019-15.275C20.21.291 19.492-.236 18.67.095L.928 7.432c-1.21.507-1.192 1.236-.206 1.567l4.536 1.523 10.536-7.12c.496-.354.947-.158.576.197l-8.523 8.264z" />
    </svg>
  );
};

export default SvgTelegram;
