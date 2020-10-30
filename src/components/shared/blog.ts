import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import hexToRgba from 'hex-to-rgba';
import { colors } from '@/constants';

interface IBlogPostProps {
  imageSrc: string;
}

interface IBlogPostWrapperProps {
  last?: boolean;
}

const BlogPostWrapper = styled.div<IBlogPostWrapperProps>`
  padding: 0 0 80px 0;

  ${down('sm')} {
    ${({ last = false }: IBlogPostWrapperProps) => {
      if (!last) {
        return css`
          padding-bottom: 50px;
        `;
      }
      return '';
    }}
  }
`;

const BlogPostImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 20px 0 ${hexToRgba(colors.BLACK, 0.14)};
  transition: all 0.5s ease-in-out;

  ${down('md')} {
    height: 300px;
  }
`;

const BlogPostImage = styled.div<IBlogPostProps>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.GHOST_WHITE};
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;
  ${({ imageSrc }: IBlogPostProps) => {
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

const MinReadDateWrapper = styled.div`
  ${down('sm')} {
    padding-top: 30px;
  }
`;

const MinRead = styled.span`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 2.6px;
  color: ${colors.BLACK};
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  font-size: 18px;
  font-weight: 500;
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

const TitleWrapper = styled.div`
  margin: 24px 0;
`;

const Title = styled.h3`
  max-width: 100%;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 0 40px 0;
  max-width: 100%;
  font-size: 18px;
  line-height: 1.6;
  color: ${colors.BLACK};

  ${down('md')} {
    font-size: 16px;
    line-height: 24px;
  }

  ${down('sm')} {
    margin-bottom: 30px;
  }
`;

export {
  BlogPostWrapper,
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
};
