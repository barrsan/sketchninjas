import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { BlogPostDate } from '@/components/BlogPostDate';
import { SvgArrowNext } from '@/components/Svg';
import {
  BlogPostImageWrapper,
  BlogPostImage,
  BlogPostImageLink,
  MinReadDateWrapper,
  MinRead,
  ReadMoreLink,
  TitleWrapper,
  Title,
  TitleLink,
  Description,
} from '@/components/shared/blog';
import { common } from '@/constants';

interface IProps {
  title: string;
  description: string;
  publicationDate: string;
  readingTime: number;
  imageSrc: string;
  slug: string;
}

const { CURSOR_READ_CLASS_NAME, CURSOR_FOCUS_CLASS_NAME } = common;

const BlogPost = styled.div`
  position: relative;
  width: 100%;
`;

const BlogPostDateWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: -15px;

  ${down('xs')} {
    top: 15px;
    left: 15px;
  }
`;

const BlogPostInfo = styled.div`
  padding: 25px 0 0 0;

  ${down('sm')} {
    padding: 0;
  }
`;

const BlogPostItemWide: FC<IProps> = ({
  imageSrc,
  title,
  description,
  readingTime,
  publicationDate,
  slug,
}: IProps) => {
  const { t } = useTranslation();

  const tReadMore = t('blog:readMore');
  const tMinRead = t('blog:minRead', { count: readingTime });

  return (
    <BlogPost>
      <BlogPostDateWrapper>
        <BlogPostDate publicationDate={publicationDate} />
      </BlogPostDateWrapper>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug },
        }}
        passHref
      >
        <BlogPostImageLink data-cursor={CURSOR_READ_CLASS_NAME}>
          <BlogPostImageWrapper>
            <BlogPostImage imageSrc={imageSrc} />
          </BlogPostImageWrapper>
        </BlogPostImageLink>
      </Link>
      <BlogPostInfo>
        <MinReadDateWrapper>
          <MinRead>{tMinRead}</MinRead>
        </MinReadDateWrapper>
        <TitleWrapper>
          <Link
            href={{
              pathname: '/blog/[slug]',
              query: { slug },
            }}
            passHref
          >
            <TitleLink data-cursor={CURSOR_FOCUS_CLASS_NAME}>
              <Title>{title}</Title>
            </TitleLink>
          </Link>
        </TitleWrapper>
        <Description>{description}</Description>
        <Link
          href={{
            pathname: '/blog/[slug]',
            query: { slug },
          }}
          passHref
        >
          <ReadMoreLink data-cursor={CURSOR_FOCUS_CLASS_NAME}>
            {tReadMore}
            <SvgArrowNext width={8} height={14} />
          </ReadMoreLink>
        </Link>
      </BlogPostInfo>
    </BlogPost>
  );
};

export default BlogPostItemWide;
