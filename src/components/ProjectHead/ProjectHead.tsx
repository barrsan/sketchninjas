import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { colors } from '@/constants';
import { TProjectCategory } from '@/types';

interface IProps {
  title: string;
  projectCategories: TProjectCategory[];
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  height: 85vh;
  min-height: 600px;
`;

const Title = styled.h1`
  font-size: clamp(48px, 6vw, 86px);
  font-weight: 800;
  line-height: 1.4;
  color: ${colors.BLACK};
`;

const Categories = styled.p`
  padding-top: 40px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;

  ${down('md')} {
    font-size: 13px;
  }
`;

const ProjectHead: FC<IProps> = ({ title, projectCategories }: IProps) => {
  const { t } = useTranslation();

  const categories = projectCategories
    .map((i) => {
      return t(`works:projectCategories.${i}`);
    })
    .join(', ')
    .toString();

  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <Categories>{categories}</Categories>
      </div>
    </Wrapper>
  );
};

export default ProjectHead;
