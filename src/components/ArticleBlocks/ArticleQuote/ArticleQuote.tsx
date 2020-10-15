import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants';

interface IProps {
  markup: string;
  author: string;
}

const Quote = styled.blockquote`
  position: relative;
  padding: 48px 32px;
  font-family: 'Lora', serif;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  letter-spacing: -0.063px;

  p {
    margin-bottom: 32px;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.8;
  }

  cite {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    color: ${colors.GRAY};
  }

  &:before {
    position: relative;
    top: 20px;
    content: '“';
    font-family: Georgia, sans-serif;
    font-style: normal;
    font-size: 82px;
    line-height: 0;
    color: ${colors.BLUE};
  }
`;

const QuoteText = styled.div``;

const ArticleQuote: FC<IProps> = ({ markup, author }: IProps) => {
  const createMarkup = () => ({ __html: markup });

  return (
    <Quote>
      <QuoteText dangerouslySetInnerHTML={createMarkup()} />
      <p>
        <cite>{author}</cite>
      </p>
    </Quote>
  );
};

export default ArticleQuote;
