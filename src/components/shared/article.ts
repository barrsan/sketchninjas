import styled, { css } from 'styled-components';
import { colors } from '@/constants';

interface IArticleBlockProps {
  fluid?: boolean;
}

const ArticleBlock = styled.div<IArticleBlockProps>`
  margin: 0 auto;
  margin-top: 32px;
  padding: 0;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

  ${({ fluid }: IArticleBlockProps) => {
    if (fluid) {
      return css`
        max-width: 1300px;
      `;
    }
    return css`
      max-width: 800px;
    `;
  }}
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

export { ArticleBlock, ImageCaption };
