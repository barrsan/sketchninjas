import { FC } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ImageCaption, ImageFull } from '@/components/shared/article';
import { ArticleText } from '../ArticleText';

interface IProps {
  src: string;
  caption?: string;
  alt?: string;
  parallax?: boolean;
  mode?: TMode;
}

interface IWrapperProps {
  mode: TMode;
}

type TMode = 'wide' | 'default' | 'full';

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
  parallax = false,
  mode = 'default',
}: IProps) => {
  if (mode === 'full') {
    return (
      <ImageFull>
        <ParallaxImage
          src={src}
          limitPositionY={30}
          caption={caption}
          mode="cover"
        />
      </ImageFull>
    );
  }

  if (parallax) {
    return (
      <ParallaxImage
        src={src}
        limitPositionY={20}
        caption={caption}
        mode={mode}
      />
    );
  }

  return (
    <Wrapper mode={mode}>
      <Image src={src} alt={alt} />
      {caption && (
        <ImageCaption>
          <ArticleText type="blogPost" markup={caption} />
        </ImageCaption>
      )}
    </Wrapper>
  );
};

export default ArticleImage;
