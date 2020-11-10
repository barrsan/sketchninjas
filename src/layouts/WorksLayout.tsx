import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTitle } from '@/components/PageTitle';
import { WorksSection } from '@/components/WorksSection';
import { ContactSection } from '@/components/ContactSection';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { Pagination } from '@/components/Pagination';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IWork } from '@/types';

interface IProps {
  works: IWork[];
  pageCount?: number;
  currentPage?: number;
}

const WorksLayout: FC<IProps> = ({
  works,
  pageCount = 1,
  currentPage = 1,
}: IProps) => {
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tSeoTitle = t('seo:works.title');
  const tSeoDescription = t('seo:works.description');

  const tTitle = t('works:intro');
  const tSubtitle = t('works:works');

  return (
    <>
      <NextSeo title={tSeoTitle} description={tSeoDescription} />
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} subtitle={tSubtitle} />
        <WorksSection works={works} disabledTitle />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          targetPathname="/works/page/[page]"
        />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default WorksLayout;
