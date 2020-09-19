import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const ContactLayout = () => {
  useStopCssAnimationsOnResize();

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <ContactSection />
      </PageSmoothScroll>
    </>
  );
};

export default ContactLayout;
