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
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const HomeLayout = () => {
  useStopCssAnimationsOnResize();

  return (
    <>
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
    </>
  );
};

export default HomeLayout;
