export interface ISvgProps {
  width?: number;
  height?: number;
  fill?: string;
}

export interface ISvgLogoProps {
  width?: number;
  height?: number;
  fill1?: string;
  fill2?: string;
  fill3?: string;
}

export interface ISeo {
  metaKeywords: string;
  metaDescription: string;
}

export interface IImage {
  url: string;
  formats: {
    thumbnail: IImageFormat;
    large: IImageFormat;
    medium: IImageFormat;
    small: IImageFormat;
  };
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string | null;
  url: string;
}

export interface IContentText {
  __typename: 'ComponentArticleText';
  id: string;
  text: string;
}

export interface IContentQuote {
  __typename: 'ComponentArticleQuote';
  id: string;
  text: string;
  author: string;
}

export interface IContentImagesGrid {
  __typename: 'ComponentArticleImagesGrid';
  id: string;
  images: IImagesGridItem[];
}

export interface IContentSingleImage {
  __typename: 'ComponentArticleSingleImage';
  id: string;
  image: IImage;
  caption: string | null;
  type: 'full' | 'wide' | 'default';
  parallax: boolean;
}

export interface IContentVideo {
  __typename: 'ComponentArticleVideo';
  id: string;
  video: {
    url: string;
  };
  controls: boolean;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  playsinline: boolean;
  videoDisplayType: 'default' | 'wide';
}

interface IImagesGridItem {
  image: IImage;
  caption: string | null;
  description: string | null;
}

export type TContent = Array<TContentBlock>;

export type TContentTextOnly = Array<IContentText | IContentQuote>;

export type TContentBlock =
  | IContentText
  | IContentQuote
  | IContentVideo
  | IContentSingleImage
  | IContentImagesGrid;

export type TCursorType =
  | 'default'
  | 'baseLink'
  | 'blogPostImage'
  | 'workImage';
