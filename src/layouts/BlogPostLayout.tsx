import useMobileDetect from 'use-mobile-detect-hook';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const BlogPostLayout = () => {
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default BlogPostLayout;
