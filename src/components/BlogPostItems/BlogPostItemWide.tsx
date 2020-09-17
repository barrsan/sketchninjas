import { FC } from 'react';
import Link from 'next-translate/Link';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import hexToRgba from 'hex-to-rgba';
import { BlogPostDate } from '@/components/BlogPostDate';
import { colors } from '@/constants';
import { IBlogPostPreview } from '@/types';

interface IProps extends IBlogPostPreview {}

interface IStyledBlogPostImageProps {
  imageSrc: string;
}

const BlogPost = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.14)};
  transition: all 0.5s ease-in-out;

  ${down('sm')} {
    height: 460px;
  }

  ${down('xs')} {
    min-height: 480px;
  }
`;

const BlogPostImage = styled.div<IStyledBlogPostImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.GHOST_WHITE};
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;

  ${({ imageSrc }: IStyledBlogPostImageProps) => {
    return css`
      background-image: url(${imageSrc});
    `;
  }}

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      ${hexToRgba(colors.MINE_SHAFT, 0.46)},
      ${hexToRgba(colors.BLACK, 0.3)} 48%,
      ${hexToRgba(colors.BLACK, 0)}
    );
  }
`;

const BlogPostLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    ${BlogPost} {
      transform: scale(0.98);
    }

    ${BlogPostImage} {
      transform: scale(1.15);
    }
  }
`;

const BlogPostInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 30px;
`;

const TitleWrapper = styled.div`
  margin: 24px 0;
`;

const Title = styled.h3`
  max-width: 80%;
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  letter-spacing: -1px;
  color: ${colors.WHITE};

  ${down('md')} {
    font-size: 42px;
    line-height: 52px;
  }

  ${down('sm')} {
    font-size: 26px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  max-width: 50%;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.WHITE};

  ${down('md')} {
    max-width: 100%;
  }

  ${down('sm')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const BlogPostItemWide: FC<IProps> = ({
  imageSrc,
  title,
  description,
  minRead,
  publicationDate,
}: IProps) => {
  return (
    <Link href="/blog" passHref>
      <BlogPostLink>
        <BlogPost>
          <BlogPostInner>
            <BlogPostDate
              minRead={minRead}
              publicationDate={publicationDate}
              color={colors.WHITE}
            />
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>
            <Description>{description}</Description>
          </BlogPostInner>
          <BlogPostImage imageSrc={imageSrc} />
        </BlogPost>
      </BlogPostLink>
    </Link>
  );
};

export default BlogPostItemWide;
