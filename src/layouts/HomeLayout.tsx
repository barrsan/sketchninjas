import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorksSection } from '@/components/WorksSection';
import { WorkStagesSection } from '@/components/WorkStagesSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const HomeLayout = () => {
  useStopCssAnimationsOnResize();

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <WorksSection />
        <WorkStagesSection />
        <BlogSection />
        <ContactSection />
      </PageSmoothScroll>
    </>
  );
};

export default HomeLayout;
