import { FC } from 'react';
import { NextSeo } from 'next-seo';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { Project } from '@/components/Project';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { common } from '@/constants';
import { IWorkFull } from '@/types';

interface IProps {
  work: IWorkFull;
}

const ProjectLayout: FC<IProps> = ({ work }: IProps) => {
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
    </>
  );
};

export default ProjectLayout;
