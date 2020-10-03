import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { Row, Col } from 'styled-bootstrap-grid';
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

const ImageCol = styled(Col)`
  position: relative;
`;

const ImageWrapper = styled(BlogPostImageWrapper)`
  height: 300px;
`;

const BlogPostInfo = styled.div`
  padding: 0 0 0 25px;

  ${down('sm')} {
    padding: 0;
  }
`;

const BlogPostDateWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;

  ${down('xs')} {
    top: 15px;
    left: 30px;
  }
`;

const BlogPostItemHorizontal: FC<IProps> = ({
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
    <Row mdAlignItems="center">
      <ImageCol sm={12} md={5}>
        <BlogPostDateWrapper>
          <BlogPostDate publicationDate={publicationDate} />
        </BlogPostDateWrapper>
        <Link href="/blog" passHref>
          <BlogPostImageLink>
            <ImageWrapper>
              <BlogPostImage imageSrc={imageSrc} />
            </ImageWrapper>
          </BlogPostImageLink>
        </Link>
      </ImageCol>
      <Col sm={12} md={7}>
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
      </Col>
    </Row>
  );
};

export default BlogPostItemHorizontal;
