import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { ProjectHead } from '@/components/ProjectHead';
import { ParallaxImage } from '@/components/ParallaxImage';
import {
  ArticleText,
  ArticleImage,
  ArticleImageGrid,
} from '@/components/ArticleBlocks';
import { Article, ArticleBlock } from '@/components/shared/article';

const MARKUP_1 = `
<h2>Реализация системы обучения</h2>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
`;

const MARKUP_2 = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
`;

const MARKUP_3 = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
</p>
<ul>
  <li>Разнообразный и богатый опыт консультация с широким активом играет важную роль</li>
  <li>Задача организации, в особенности же консультация с широким активом в значительной степени</li>
  <li>Cистемы обучения кадров, соответствует насущным потребностям</li>
</ul>
`;

const MARKUP_4 = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
`;

const ParallaxCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
`;

const Project = () => {
  return (
    <>
      <Container>
        <ProjectHead
          title="Adidas"
          projectCategories={[
            'branding',
            'development',
            'webDesign',
            'appDesign',
          ]}
        />
      </Container>
      <Container fluid>
        <Row>
          <ParallaxCoverWrapper>
            <ParallaxImage src="/uploads/works/p2/1.jpg" mode="cover" />
          </ParallaxCoverWrapper>
        </Row>
      </Container>
      <Container fluid>
        <Article>
          <ArticleBlock>
            <ArticleText markup={MARKUP_1} />
          </ArticleBlock>

          <ArticleBlock type="wide">
            <ArticleImageGrid
              items={[
                {
                  id: '1',
                  src: '/uploads/works/p2/5.jpg',
                  caption: '',
                  description: '',
                },
                {
                  id: '2',
                  src: '/uploads/works/p2/3.jpg',
                  caption: '',
                  description: '',
                },
                {
                  id: '3',
                  src: '/uploads/works/p2/4.jpg',
                  caption: '',
                  description: '',
                },
                {
                  id: '4',
                  src: '/uploads/works/p2/6.jpg',
                  caption: '',
                  description: '',
                },
              ]}
            />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_2} />
          </ArticleBlock>

          <ArticleBlock type="full">
            <ArticleImage src="/uploads/works/p2/2.jpg" mode="full" />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_3} />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleImage
              src="/uploads/works/p2/8.jpg"
              alt="Реализация намеченных плановых заданий"
              caption={`<p>
                  <em>
                    Изображение взято с <a href="https://unsplash.com" target="_blank">
                      unsplash.com
                    </a>
                  </em>
                </p>`}
              mode="wide"
            />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_4} />
          </ArticleBlock>

          <ArticleBlock type="wide">
            <ArticleImageGrid
              items={[
                {
                  id: '1',
                  src: '/uploads/works/p2/7.jpg',
                  caption: '',
                  description:
                    'Прежде всего социально-экономическое развитие способствует повышению качества экономической целесообразности принимаемых изменений.',
                },
                {
                  id: '2',
                  src: '/uploads/works/p2/10.jpg',
                  caption: '',
                  description:
                    'Прежде всего социально-экономическое развитие способствует повышению качества экономической целесообразности принимаемых изменений.',
                },
                {
                  id: '3',
                  src: '/uploads/works/p2/9.jpg',
                  caption: '',
                  description: '',
                },
              ]}
            />
          </ArticleBlock>
        </Article>
      </Container>
    </>
  );
};

export default Project;
