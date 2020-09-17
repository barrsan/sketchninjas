import styled from 'styled-components';
import { IWorkItem } from '@/types';
import WorksItem from './WorksItem';

const items: IWorkItem[] = [
  {
    id: '1',
    title: 'Beats by Dr. Dre',
    category: 'Веб дизайн, Брендинг',
    imageSrc: '/uploads/work1.jpg',
    href: '/works/1',
    textStyle: 'light',
  },
  {
    id: '2',
    title: 'Fujifilm',
    category: 'Брендинг',
    imageSrc: '/uploads/work2.jpg',
    href: '/works/1',
    textStyle: 'dark',
  },
  {
    id: '3',
    title: 'Adidas',
    category: 'Веб дизайн, Брендинг',
    imageSrc: '/uploads/work3.jpg',
    href: '/works/1',
    textStyle: 'dark',
  },
  {
    id: '4',
    title: 'Porsche Россия',
    category: 'Веб дизайн, Разработка',
    imageSrc: '/uploads/work4.jpg',
    href: '/works/1',
    textStyle: 'dark',
  },
  {
    id: '5',
    title: 'Coca-Cola',
    category: 'Брендинг',
    imageSrc: '/uploads/work5.jpg',
    href: '/works/1',
    textStyle: 'light',
  },
  {
    id: '6',
    title: 'Marvel Spider-Man Toys',
    category: 'Брендинг, Разработка',
    imageSrc: '/uploads/work6.jpg',
    href: '/works/1',
    textStyle: 'dark',
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
          category={i.category}
          href={i.href}
          imageSrc={i.imageSrc}
          textStyle={i.textStyle}
        />
      ))}
    </Wrapper>
  );
};

export default Works;
