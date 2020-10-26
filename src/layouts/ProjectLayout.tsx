import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { Project } from '@/components/Project';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { common } from '@/constants';
import { IWorkFull } from '@/types';

interface IProps {
  work: IWorkFull;
}

const ProjectLayout: FC<IProps> = ({ work }: IProps) => {
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  return (
    <>
      <NextSeo
        title={`${work.title} — ${common.COMPANY}`}
        description={work.seo.metaDescription}
      />
      <Header />
      <PageSmoothScroll>
        <Project work={work} />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default ProjectLayout;
