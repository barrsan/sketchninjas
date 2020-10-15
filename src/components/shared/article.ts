import styled, { css } from 'styled-components';
import { colors } from '@/constants';

interface IArticleBlockProps {
  type?: 'default' | 'wide' | 'full';
}

const Article = styled.article`
  width: 100%;
  padding-bottom: 100px;
`;

const ArticleBlock = styled.div<IArticleBlockProps>`
  margin: 80px auto;
  margin-top: 32px;
  padding: 0;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

  ${({ type }: IArticleBlockProps) => {
    if (type === 'wide') {
      return css`
        max-width: 1400px;
      `;
    }
    if (type === 'full') {
      return css`
        max-width: 100%;
      `;
    }
    return css`
      max-width: 800px;
    `;
  }}
`;

const ImageFull = styled.div`
  margin: 0 -15px;
`;

const ImageCaption = styled.div`
  margin-top: 10px;
  text-align: center;

  p,
  em {
    font-size: 16px;
    text-align: center;
    color: ${colors.GRAY};
  }

  a {
    color: ${colors.GRAY};

    &:hover {
      color: ${colors.MAJORELLE_BLUE};
      border-color: ${colors.MAJORELLE_BLUE};
    }
  }
`;

export { Article, ArticleBlock, ImageFull, ImageCaption };
