import { FC } from 'react';
import { NextSeo } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import useTranslation from 'next-translate/useTranslation';
import { Header } from '@/components/Header';
import { Blog } from '@/components/Blog';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { Pagination } from '@/components/Pagination';
import { CursorFollower } from '@/components/CursorFollower';
import { PageHeadSpacer } from '@/components/shared/common';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  pageCount?: number;
  currentPage?: number;
}

const AllBlogPostsLayout: FC<IProps> = ({
  blogPosts,
  pageCount = 1,
  currentPage = 1,
}: IProps) => {
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
        <PageHeadSpacer />
        <Blog type="allPosts" blogPosts={blogPosts} />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          targetPathname="/blog/page/[page]"
        />
        <ContactSection />
      </PageSmoothScroll>
      <PageTransitionMask />
      {detectMobile.isMobile() ? null : <CursorFollower />}
    </>
  );
};

export default AllBlogPostsLayout;
