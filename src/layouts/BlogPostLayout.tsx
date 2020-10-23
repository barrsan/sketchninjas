import { FC } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { BlogPost } from '@/components/BlogPost';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IBlogPostFull } from '@/types';

interface IProps {
  blogPost: IBlogPostFull;
}

const BlogPostLayout: FC<IProps> = ({ blogPost }: IProps) => {
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  return (
    <>
      <Header />
      <PageSmoothScroll>
        <BlogPost blogPost={blogPost} />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default BlogPostLayout;
