import { FC } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import { PageError } from '@/components/PageError';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

interface IProps {
  statusCode?: number;
}

const ErrorLayout: FC<IProps> = ({ statusCode = 404 }: IProps) => {
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  return (
    <>
      <PageSmoothScroll>
        <PageError errorCode={statusCode} />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default ErrorLayout;
