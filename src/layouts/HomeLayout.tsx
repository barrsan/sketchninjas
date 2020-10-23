import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import useMobileDetect from 'use-mobile-detect-hook';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutUsSection } from '@/components/AboutUsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorksSection } from '@/components/WorksSection';
import { WorkStagesSection } from '@/components/WorkStagesSection';
import { BlogOnHomePage } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IWork, IBlogPost } from '@/types';

interface IProps {
  works: IWork[];
  blogPosts: IBlogPost[];
}

const HomeLayout: FC<IProps> = ({ works, blogPosts }: IProps) => {
  const { t } = useTranslation();
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  const tSeoTitle = t('seo:home.title');
  const tSeoDescription = t('seo:home.description');

  return (
    <>
      <NextSeo title={tSeoTitle} description={tSeoDescription} />
      <Header />
      <PageSmoothScroll>
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <WorksSection works={works} />
        <WorkStagesSection />
        <BlogOnHomePage blogPosts={blogPosts} />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default HomeLayout;
