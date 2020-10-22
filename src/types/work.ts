import { IImage, ISeo, TContent } from './common';

export interface IWorkSlug {
  id: string;
  slug: string;
}

export interface IWork {
  id: string;
  title: string;
  slug: string;
  previewTextMode: 'dark' | 'light';
  categories: IWorkCategory[];
  preview: IImage;
}

export interface IWorkFull extends IWork {
  seo: ISeo;
  cover: IImage;
  content: TContent;
}

export interface IWorkCategory {
  name: 'branding' | 'webDesign' | 'appDesign' | 'development';
}
