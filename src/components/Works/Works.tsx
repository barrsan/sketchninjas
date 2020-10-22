import { FC } from 'react';
import styled from 'styled-components';
import { IWork } from '@/types';
import WorksItem from './WorksItem';

interface IProps {
  works: IWork[];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const Works: FC<IProps> = ({ works }: IProps) => {
  return (
    <Wrapper>
      {works.map((i: IWork) => (
        <WorksItem
          key={i.id}
          title={i.title}
          projectCategories={i.categories}
          slug={i.slug}
          imageSrc={i.preview.formats.large.url}
          textStyle={i.previewTextMode}
        />
      ))}
    </Wrapper>
  );
};

export default Works;
