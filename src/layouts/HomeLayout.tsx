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

const HomeLayout = () => {
  const { t } = useTranslation();
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  const tSEOTitle = t('seo:home.title');
  const tSEODescription = t('seo:home.description');

  return (
    <>
      <NextSeo title={tSEOTitle} description={tSEODescription} />
      <Header />
      <PageSmoothScroll>
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <WorksSection />
        <WorkStagesSection />
        <BlogOnHomePage />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default HomeLayout;
