import { FC } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ArticleText } from '@/components/ArticleText';
import { ImageCaption } from '@/components/shared/article';

interface IProps {
  src: string;
  caption?: string;
  alt?: string;
  mode?: TMode;
}

interface IWrapperProps {
  mode: TMode;
}

type TMode = 'wide' | 'default';

const Wrapper = styled.div<IWrapperProps>`
  margin-bottom: 32px;

  ${({ mode }: IWrapperProps) => {
    if (mode === 'wide') {
      return css`
        ${up('xl')} {
          margin-left: -190px;
          margin-right: -190px;
          max-width: 100vw;
        }
      `;
    }

    return '';
  }}
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const ArticleImage: FC<IProps> = ({
  src,
  caption,
  alt = '',
  mode = 'default',
}: IProps) => {
  return (
    <Wrapper mode={mode}>
      <Image src={src} alt={alt} />
      {caption && (
        <ImageCaption>
          <ArticleText markup={caption} />
        </ImageCaption>
      )}
    </Wrapper>
  );
};

export default ArticleImage;
