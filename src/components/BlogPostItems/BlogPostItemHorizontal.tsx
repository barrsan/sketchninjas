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
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { IBlogPost } from '@/types';

interface IProps extends IBlogPost {}

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
  slug,
}: IProps) => {
  const { setCursorSize, setCursorType } = useCursorFollower();

  const { t } = useTranslation();

  const tReadMore = t('blog:readMore');
  const tMinRead = t('blog:minRead', { count: minRead });

  const handleMouseMove = () => {
    setCursorType('baseLink');
    setCursorSize(50);
  };

  const handleMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  const handleImageMouseMove = () => {
    setCursorType('blogPostImage');
    setCursorSize(100);
  };

  const handleImageMouseLeave = () => {
    setCursorSize(10);
    setCursorType('default');
  };

  return (
    <Row mdAlignItems="center">
      <ImageCol sm={12} md={5}>
        <BlogPostDateWrapper>
          <BlogPostDate publicationDate={publicationDate} />
        </BlogPostDateWrapper>
        <Link href={slug} passHref>
          <BlogPostImageLink
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
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
            <Link href={slug} passHref>
              <TitleLink
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Title>{title}</Title>
              </TitleLink>
            </Link>
          </TitleWrapper>
          <Description>{description}</Description>
          <Link href={slug} passHref>
            <ReadMoreLink
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
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
