import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutUsSection } from '@/components/AboutUsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorksSection } from '@/components/WorksSection';
import { ContactSection } from '@/components/ContactSection';
import { BlogSection } from '@/components/BlogSection';
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
        <BlogSection />
        <ContactSection />
      </PageSmoothScroll>
    </>
  );
};

export default HomeLayout;
