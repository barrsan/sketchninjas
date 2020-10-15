import styled from 'styled-components';
import { IWorkItem } from '@/types';
import WorksItem from './WorksItem';

const items: IWorkItem[] = [
  {
    id: '1',
    title: 'Beats by Dr. Dre',
    imageSrc: '/uploads/work1.jpg',
    href: '/works/1',
    textStyle: 'light',
    categories: ['branding', 'webDesign'],
  },
  {
    id: '2',
    title: 'Fujifilm',
    imageSrc: '/uploads/work2.jpg',
    href: '/works/1',
    textStyle: 'dark',
    categories: ['branding'],
  },
  {
    id: '3',
    title: 'Adidas',
    imageSrc: '/uploads/work3.jpg',
    href: '/works/1',
    textStyle: 'dark',
    categories: ['branding', 'development', 'webDesign'],
  },
  {
    id: '4',
    title: 'Porsche Россия',
    imageSrc: '/uploads/work4.jpg',
    href: '/works/1',
    textStyle: 'dark',
    categories: ['development', 'webDesign'],
  },
  {
    id: '5',
    title: 'Coca-Cola',
    imageSrc: '/uploads/work5.jpg',
    href: '/works/1',
    textStyle: 'light',
    categories: ['webDesign', 'appDesign'],
  },
  {
    id: '6',
    title: 'Marvel Spider-Man Toys',
    imageSrc: '/uploads/work6.jpg',
    href: '/works/1',
    textStyle: 'dark',
    categories: ['branding', 'development'],
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const Works = () => {
  return (
    <Wrapper>
      {items.map((i: IWorkItem) => (
        <WorksItem
          key={i.id}
          title={i.title}
          projectCategories={i.categories}
          href={i.href}
          imageSrc={i.imageSrc}
          textStyle={i.textStyle}
        />
      ))}
    </Wrapper>
  );
};

export default Works;
