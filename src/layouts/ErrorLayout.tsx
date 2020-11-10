import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { PageError } from '@/components/PageError';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { common } from '@/constants';

interface IProps {
  statusCode?: number;
}

const ErrorLayout: FC<IProps> = ({ statusCode = 404 }: IProps) => {
  useStopCssAnimationsOnResize();

  return (
    <>
      <NextSeo title={`${statusCode} - ${common.COMPANY}`} />
      <PageSmoothScroll>
        <PageError errorCode={statusCode} />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default ErrorLayout;
