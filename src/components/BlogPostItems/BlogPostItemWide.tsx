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
import { IBlogPostPreview } from '@/types';

interface IProps extends IBlogPostPreview {}

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
  minRead,
  publicationDate,
}: IProps) => {
  const { t } = useTranslation();

  const tReadMore = t('blog:readMore');
  const tMinRead = t('blog:minRead', { count: minRead });

  return (
    <BlogPost>
      <BlogPostDateWrapper>
        <BlogPostDate publicationDate={publicationDate} />
      </BlogPostDateWrapper>
      <Link href="/blog" passHref>
        <BlogPostImageLink>
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
          <Link href="/blog" passHref>
            <TitleLink>
              <Title>{title}</Title>
            </TitleLink>
          </Link>
        </TitleWrapper>
        <Description>{description}</Description>
        <Link href="/blog" passHref>
          <ReadMoreLink>
            {tReadMore}
            <SvgArrowNext width={8} height={14} />
          </ReadMoreLink>
        </Link>
      </BlogPostInfo>
    </BlogPost>
  );
};

export default BlogPostItemWide;
