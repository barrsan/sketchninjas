import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageTitleBlog } from '@/components/PageTitleBlog';
import { Blog } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  blogPostsCount: number;
}

const BlogLayout: FC<IProps> = ({ blogPosts, blogPostsCount }: IProps) => {
  const { t } = useTranslation();
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  const tSeoTitle = t('seo:blog.title');
  const tSeoDescription = t('seo:blog.description');

  return (
    <>
      <NextSeo title={tSeoTitle} description={tSeoDescription} />
      <Header />
      <PageSmoothScroll>
        <PageTitleBlog hideAllPosts={blogPostsCount <= blogPosts.length} />
        <Blog type="main" blogPosts={blogPosts} />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default BlogLayout;
