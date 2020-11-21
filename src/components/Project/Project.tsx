import { FC } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { ProjectHead } from '@/components/ProjectHead';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ArticleContentHolder } from '@/components/ArticleContentHolder';
import { Article } from '@/components/shared/article';
import { IWorkFull } from '@/types';

interface IProps {
  work: IWorkFull;
}

const ParallaxCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
`;

const Project: FC<IProps> = ({ work }: IProps) => {
  return (
    <>
      <Container>
        <ProjectHead title={work.title} projectCategories={work.categories} />
      </Container>
      <Container fluid>
        <Row>
          <ParallaxCoverWrapper>
            <ParallaxImage src={work.cover.url} mode="cover" />
          </ParallaxCoverWrapper>
        </Row>
      </Container>
      <Container fluid>
        <Article>
          {work.content.map((i) => (
            <ArticleContentHolder key={i.id} content={i} />
          ))}
        </Article>
      </Container>
    </>
  );
};

export default Project;
