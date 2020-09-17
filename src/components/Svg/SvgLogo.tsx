import React, { FC } from 'react';
import { ISvgProps } from '@/types';

const SvgLogo: FC<ISvgProps> = (props: ISvgProps) => {
  return (
    <svg viewBox="0 0 39 46" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#202020"
          d="M8.088 43.521c1.165 0 2.11 1.035 2.11 2.311h-4.22c0-1.276.944-2.31 2.11-2.31zm11.252 0c1.166 0 2.11 1.035 2.11 2.311h-4.22c0-1.276.945-2.31 2.11-2.31z"
        />
        <path
          fill="#202020"
          d="M13.714 30.812c7.575 0 13.715 6.725 13.715 15.02h-2.813a3.852 3.852 0 00-3.852-3.851h-14.1a3.85 3.85 0 00-3.851 3.851H0c0-8.295 6.14-15.02 13.714-15.02z"
        />
        <path
          fill="#6069E8"
          fillRule="nonzero"
          d="M28.695 43.363c1.748-1.045 4.977-3.159 6.56-4.786 1.585-1.628 3.97-5.028 3.155-8.668-.815-3.64-2.658-5.378-5.596-6.419-2.938-1.04-5.385-1.04-8.198-2.222-2.814-1.182-4.274-2.359-6.019-3.905-1.744-1.547-2.342-3.215-2.342-5.477 0-2.262.457-3.474 2.342-4.76 1.886-1.287 5.521-1.23 7.996 0 2.474 1.229 5.078 4.76 5.637 5.578 0 0 .362-1.877 1.425-3.406.708-1.02 1.565-1.744 2.568-2.173a97.71 97.71 0 00-1.309-2.023 10.68 10.68 0 00-2.684-2.799c-1.055-.758-2.28-1.331-3.673-1.72C27.163.194 25.581 0 23.81 0c-1.959 0-3.696.262-5.213.787-1.516.525-2.792 1.25-3.828 2.172a9.138 9.138 0 00-2.36 3.28c-.536 1.264-.805 2.634-.805 4.112 0 1.477.297 2.784.89 3.921a11.916 11.916 0 002.331 3.09c.961.924 2.058 1.76 3.292 2.508a75.408 75.408 0 003.772 2.143c1.28.68 2.538 1.36 3.772 2.041 1.234.68 2.33 1.405 3.292 2.172.96.768 1.63 1.34 2.223 2.263.594.923.792 1.673.792 2.632 0 .959-.356 1.77-.792 2.428-.435.657-1.222 1.31-2.11 1.741-.887.432-1.607.933-3.044.933 0 0 1.142 1.677 1.753 3.378.408 1.133.714 2.387.92 3.762z"
        />
      </g>
    </svg>
  );
};

export default SvgLogo;
