import { FC } from 'react';
import { ISvgProps } from '@/types';

const SvgFlash: FC<ISvgProps> = (props: ISvgProps) => {
  return (
    <svg viewBox="0 0 38 50" {...props}>
      <path d="M37.86 19.698a1.126 1.126 0 00-.978-.55H19V1.062a1.07 1.07 0 00-.845-1.03 1.143 1.143 0 00-1.257.527L.132 30.348c-.185.33-.174.73.026 1.049.2.32.564.517.958.517h15.647v17.022c0 .473.33.89.808 1.022a1.146 1.146 0 001.258-.453l19-28.724c.216-.33.229-.744.031-1.083z" />
    </svg>
  );
};

export default SvgFlash;
