import { Header } from '@/components/Header';
import { PageTitleBlog } from '@/components/PageTitleBlog';
import { Blog } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const BlogLayout = () => {
  useStopCssAnimationsOnResize();

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <PageTitleBlog />
        <Blog />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default BlogLayout;
