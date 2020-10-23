import { IImage, ISeo, TContent, TContentTextOnly } from './common';

export interface IBlogPostSlug {
  id: string;
  slug: string;
}

export interface IBlogPostRaw extends IBlogPostSlug {
  title: string;
  cover: IImage;
  description: string;
  published_at: string;
}

export interface IBlogPostWithTextContentRaw extends IBlogPostRaw {
  content: TContentTextOnly;
}

export interface IBlogPost extends IBlogPostRaw {
  readingTime: number;
}

export interface IBlogPostFullRaw extends IBlogPostRaw {
  seo: ISeo;
  content: TContent;
}

export interface IBlogPostFull extends IBlogPostFullRaw, IBlogPost {}
