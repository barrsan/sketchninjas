export interface IWorkItem {
  id: string;
  title: string;
  categories: TProjectCategory[];
  imageSrc: string;
  href: string;
  textStyle: 'dark' | 'light';
}

export type TProjectCategory =
  | 'branding'
  | 'webDesign'
  | 'appDesign'
  | 'development';
