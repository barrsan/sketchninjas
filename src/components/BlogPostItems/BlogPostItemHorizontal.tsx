import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import hexToRgba from 'hex-to-rgba';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { Row, Col } from 'styled-bootstrap-grid';
import { BlogPostDate } from '@/components/BlogPostDate';
import { SvgArrowNext } from '@/components/Svg';
import { colors } from '@/constants';
import { IBlogPostPreview } from '@/types';

interface IProps extends IBlogPostPreview {
  reverse?: boolean;
}

interface IStyledBlogPostProps {
  imageSrc: string;
}

const BlogPostImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 482px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.14)};
  transition: all 0.5s ease-in-out;

  ${down('md')} {
    height: 282px;
  }
`;

const BlogPostImage = styled.div<IStyledBlogPostProps>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.GHOST_WHITE};
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;
  ${({ imageSrc }: IStyledBlogPostProps) => {
    return css`
      background-image: url(${imageSrc});
    `;
  }}
`;

const BlogPostImageLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    & ${BlogPostImageWrapper} {
      transform: scale(0.98);
    }

    & ${BlogPostImage} {
      transform: scale(1.15);
    }
  }
`;

const BlogPostDateWrapper = styled.div`
  ${down('sm')} {
    padding-top: 30px;
  }
`;

const TitleWrapper = styled.div`
  margin: 24px 0;
`;

const Title = styled.h3`
  max-width: 100%;
  font-size: 42px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1px;
  color: ${colors.BLACK};
  transition: all 0.3s ease-in-out;

  ${down('md')} {
    font-size: 26px;
    line-height: 32px;
  }
`;

const TitleLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover ${Title} {
    color: ${colors.MAJORELLE_BLUE};
  }
`;

const Description = styled.p`
  margin: 0 0 40px 0;
  max-width: 100%;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.BLACK};

  ${down('md')} {
    font-size: 16px;
    line-height: 24px;
  }

  ${down('sm')} {
    margin-bottom: 30px;
  }
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & svg {
    margin: 0 0 0 10px;
    fill: ${colors.BLUE};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${colors.MAJORELLE_BLUE};

    & svg {
      fill: ${colors.MAJORELLE_BLUE};
      transform: translateX(6px);
    }
  }

  ${down('md')} {
    font-size: 16px;
  }
`;

const BlogPostItemHorizontal: FC<IProps> = ({
  imageSrc,
  title,
  description,
  minRead,
  publicationDate,
  reverse = false,
}: IProps) => {
  const { t } = useTranslation();

  const tReadMore = t('blog:readMore');

  const orderFirstCol = reverse ? 'last' : 'first';
  const orderSecondCol = reverse ? 'first' : 'last';

  return (
    <Row mdAlignItems="center">
      <Col sm={12} md={6} mdOrder={orderFirstCol} lgOrder={orderFirstCol}>
        <Link href="/blog" passHref>
          <BlogPostImageLink>
            <BlogPostImageWrapper>
              <BlogPostImage imageSrc={imageSrc} />
            </BlogPostImageWrapper>
          </BlogPostImageLink>
        </Link>
      </Col>
      <Col sm={12} md={6} mdOrder={orderSecondCol} lgOrder={orderSecondCol}>
        <BlogPostDateWrapper>
          <BlogPostDate
            minRead={minRead}
            publicationDate={publicationDate}
            color={colors.BLACK}
          />
        </BlogPostDateWrapper>
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
      </Col>
    </Row>
  );
};

export default BlogPostItemHorizontal;
