import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageTitle } from '@/components/PageTitle';
import { Blog } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';

const BlogLayout = () => {
  const { t } = useTranslation();
  useStopCssAnimationsOnResize();

  const tTitle = t('blog:blog');

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <PageTitle title={tTitle} />
        <Blog />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
    </>
  );
};

export default BlogLayout;
