import { FC } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

interface IProps {
  src: string;
  mode?: TMode;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;
}

interface IWrapperProps {
  mode: TMode;
}

type TMode = 'wide' | 'default';

const Wrapper = styled.div<IWrapperProps>`
  position: relative;
  height: 100%;
  overflow: hidden;

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

const Video = styled.video`
  position: static;
  top: auto;
  left: auto;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const ArticleVideo: FC<IProps> = ({
  src,
  controls = false,
  loop = true,
  muted = true,
  autoPlay = true,
  playsInline = true,
  mode = 'default',
}: IProps) => {
  return (
    <Wrapper mode={mode}>
      <Video
        controls={controls}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        playsInline={playsInline}
      >
        <source src={src} type="video/mp4" />
      </Video>
    </Wrapper>
  );
};

export default ArticleVideo;
