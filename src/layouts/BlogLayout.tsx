import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { PageTitleBlog } from '@/components/PageTitleBlog';
import { Blog } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  blogPostsCount: number;
}

const BlogLayout: FC<IProps> = ({ blogPosts, blogPostsCount }: IProps) => {
  const { t } = useTranslation();
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
    </>
  );
};

export default BlogLayout;
