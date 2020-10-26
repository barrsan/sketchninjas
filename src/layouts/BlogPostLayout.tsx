import { FC } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import useMobileDetect from 'use-mobile-detect-hook';
import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { PageSmoothScroll } from '@/components/PageSmoothScroll';
import { PageTransitionMask } from '@/components/PageTransitionMask';
import { BlogPost } from '@/components/BlogPost';
import { CursorFollower } from '@/components/CursorFollower';
import { useStopCssAnimationsOnResize } from '@/hooks/useStopCssAnimationsOnResize';
import { common } from '@/constants';
import { IBlogPostFull } from '@/types';

interface IProps {
  blogPost: IBlogPostFull;
}

const BlogPostLayout: FC<IProps> = ({ blogPost }: IProps) => {
  const detectMobile = useMobileDetect();
  useStopCssAnimationsOnResize();

  const jsonLdImages = [
    `${process.env.NEXT_SITE_URL}${blogPost.cover.formats.large.url}`,
    `${process.env.NEXT_SITE_URL}${blogPost.cover.formats.medium.url}`,
    `${process.env.NEXT_SITE_URL}${blogPost.cover.formats.small.url}`,
  ];

  return (
    <>
      <ArticleJsonLd
        url={`${process.env.NEXT_SITE_URL}/blog/${blogPost.slug}`}
        title={blogPost.title}
        description={blogPost.description}
        images={jsonLdImages}
        authorName="Sketch Ninjas Team"
        publisherName="Sketch Ninjas Team"
        datePublished={blogPost.published_at}
        publisherLogo="/assets/images/logo.png"
      />
      <NextSeo
        title={`${blogPost.title} — ${common.COMPANY}`}
        description={blogPost.seo.metaDescription}
      />
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
