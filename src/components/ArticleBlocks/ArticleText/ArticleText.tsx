import React, { FC, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { wrapElement } from '@/helpers/wrapElement';
import { checkParentClassName } from '@/helpers/checkParentClassName';
import { colors } from '@/constants';
import { TTextBlockType } from '@/types';

interface IProps {
  markup: string;
  type?: TTextBlockType;
}

interface ITextBlockProps {
  type: TTextBlockType;
}

const TextBlock = styled.div<ITextBlockProps>`
  ${({ type }: ITextBlockProps) => {
    if (type === 'blogPost') {
      return css`
        font-family: 'Lora', serif;
        letter-spacing: -0.063px;

        h1 {
          font-size: 42px;
          ${down('md')} {
            font-size: 32px;
          }
        }

        h2 {
          font-size: 38px;
          ${down('md')} {
            font-size: 28px;
          }
        }

        h3 {
          font-size: 32px;
          ${down('md')} {
            font-size: 24px;
          }
        }

        h4 {
          font-size: 28px;
          ${down('md')} {
            font-size: 22px;
          }
        }

        h5 {
          font-size: 22px;
          ${down('md')} {
            font-size: 16px;
          }
        }

        h6 {
          font-size: 18px;
          ${down('md')} {
            font-size: 14px;
          }
        }
      `;
    }

    return css`
      font-family: 'Avenir Next Cyr', -apple-system, Arial, sans-serif;

      h1 {
        font-size: 48px;
        ${down('md')} {
          font-size: 32px;
        }
      }

      h2 {
        font-size: 42px;
        ${down('md')} {
          font-size: 28px;
        }
      }

      h3 {
        font-size: 36px;
        ${down('md')} {
          font-size: 24px;
        }
      }

      h4 {
        font-size: 32px;
        ${down('md')} {
          font-size: 22px;
        }
      }

      h5 {
        font-size: 28px;
        ${down('md')} {
          font-size: 16px;
        }
      }

      h6 {
        font-size: 20px;
        ${down('md')} {
          font-size: 14px;
        }
      }
    `;
  }}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-weight: 900;
    line-height: 1.4;

    ${({ type }: ITextBlockProps) => {
      if (type === 'policy') {
        return css`
          font-weight: 600;
        `;
      }

      return '';
    }}

    ${down('md')} {
      line-height: 1.3;
    }
  }

  p,
  ul,
  ol,
  blockquote,
  table,
  pre {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.8;

    ${({ type }: ITextBlockProps) => {
      if (type === 'blogPost') {
        return css`
          font-size: 20px;
        `;
      }

      if (type === 'policy') {
        return css`
          font-size: 18px;
        `;
      }

      return css`
        font-size: 22px;
      `;
    }}

    ${down('md')} {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  ul {
    list-style: none;
  }

  ol {
    list-style: none;
    counter-reset: my-counter;
  }

  ul,
  ol {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;

    list-style: none;

    li {
      margin-bottom: 8px;
    }

    ${down('md')} {
      padding-left: 30px;
    }
  }

  ol {
    li {
      counter-increment: my-counter;

      &::before {
        width: 50px;
        position: absolute;
        left: 0;
        margin-left: -50px;
        margin-right: 14px;
        padding-right: 20px;
        content: counter(my-counter) '. ';
        color: ${colors.BLUE};
        font-weight: bold;
        text-align: right;

        ${down('md')} {
          margin-left: 0;
        }
      }

      ${down('md')} {
        margin-left: 10px;
      }
    }
  }

  ul {
    li {
      &::before {
        content: '';
        margin-top: 16px;
        margin-left: -28px;
        margin-right: 20px;
        position: absolute;
        left: 0;
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: ${colors.BLUE};
        border-radius: 4px;

        ${down('md')} {
          left: 10px;
          margin-top: 8px;
          margin-left: 0;
          margin-right: 10px;
        }
      }

      ${down('md')} {
        margin-left: 10px;
      }
    }
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  a {
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    font-weight: 600;
    color: ${colors.BLUE};
    border-bottom: 1px solid transparent;

    &:hover {
      color: ${colors.MAJORELLE_BLUE};
      border-color: ${colors.MAJORELLE_BLUE};
    }
  }

  img {
    margin: 0 auto;
    max-width: 100%;
  }

  pre {
    padding: 22px;
    display: block;
    overflow: auto;
    font-family: -apple-system, monospace;
    word-wrap: normal;
    overflow-wrap: normal;
    background-color: ${colors.GHOST_WHITE};
  }

  blockquote {
    position: relative;
    margin: 64px auto;
    padding: 16px 32px;
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
    text-align: center;

    p {
      font-size: inherit;
      font-weight: inherit;
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
  }

  table {
    font-family: 'Raleway', -apple-system, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.6;

    thead {
      font-weight: 700;

      tr {
        background-color: ${colors.ZIRCON};
        color: ${colors.BLACK};
      }
    }

    tbody {
      font-size: 16px;
      tr {
        &:nth-child(even) {
          background-color: ${colors.GHOST_WHITE};
        }
      }
    }

    th,
    td {
      padding: 10px 16px;
      border: 1px solid ${colors.BLUE_MOON};
    }
  }

  .table-wrap {
    margin: 0 0 32px;
    overflow-x: auto;
  }
`;

const ArticleText: FC<IProps> = ({ markup, type = 'default' }: IProps) => {
  const createMarkup = () => ({ __html: markup });

  useEffect(() => {
    const tables = document.querySelectorAll('table');

    tables.forEach((el) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';

      if (!checkParentClassName(el, 'table-wrap')) {
        wrapElement(el, wrapper);
      }
    });
  }, []);

  return <TextBlock type={type} dangerouslySetInnerHTML={createMarkup()} />;
};

export default ArticleText;
