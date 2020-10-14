import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { BlogPostHead } from '@/components/BlogPostHead';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ArticleText } from '@/components/ArticleText';
import { ArticleImage } from '@/components/ArticleImage';
import { ArticleQuote } from '@/components/ArticleQuote';
import { ArticleVideo } from '@/components/ArticleVideo';
import { ArticleImageGrid } from '@/components/ArticleImageGrid';
import { ArticleBlock } from '@/components/shared/article';

const MARKUP_1 = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
  Разнообразный и богатый опыт консультация с широким активом играет важную роль в формировании дальнейших
  направлений развития. Равным образом консультация с широким активом в значительной степени обуславливает создание
  существенных финансовых и административных условий. Разнообразный и богатый опыт реализация намеченных плановых
  заданий способствует подготовки и реализации направлений прогрессивного развития. Задача организации, в особенности же
  консультация с широким активом в значительной степени обуславливает создание системы обучения кадров,
  соответствует насущным потребностям.</p>
`;

const MARKUP_2 = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<h2>Подзаголовок текстовой страницы</h2>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<table>
  <thead>
    <tr>
      <th>Заголовок колонки 1</th>
      <th>Заголовок колонки 2</th>
      <th>Заголовок колонки 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Повседневная практика показывает</td>
      <td>Разнообразный и богатый опыт консультация с широким активом</td>
      <td>Равным образом консультация с широким активом в значительной степени</td>
    </tr>
    <tr>
      <td>Равным образом консультация с широким активом в значительной степени</td>
      <td>Разнообразный и богатый опыт консультация с широким активом</td>
      <td>Повседневная практика показывает</td>
    </tr>
    <tr>
      <td>Повседневная практика показывает</td>
      <td>Разнообразный и богатый опыт консультация с широким активом</td>
      <td>Равным образом консультация с широким активом в значительной степени</td>
    </tr>
  </tbody>
</table>
<h3>Подзаголовок для перечня с пунктами</h3>
<ul>
  <li>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять
    важные задания</li>
  <li>Разнообразный и богатый опыт консультация с широким активом играет важную роль</li>
  <li>Задача организации, в особенности же консультация с широким активом в значительной степени</li>
  <li>Cистемы обучения кадров, соответствует насущным потребностям</li>
  <li>Равным образом консультация с широким активом в значительной степени обуславливает создание</li>
</ul>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<ol>
  <li>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять
    важные задания</li>
  <li>Разнообразный и богатый опыт консультация с широким активом играет важную роль</li>
  <li>Задача организации, в особенности же консультация с широким активом в значительной степени</li>
  <li>Cистемы обучения кадров, соответствует насущным потребностям</li>
  <li>Равным образом консультация с широким активом в значительной степени обуславливает создание</li>
</ol>
<h1>Заголовок 1</h1>
<h2>Заголовок 2</h2>
<h3>Заголовок 3</h3>
<h4>Заголовок 4</h4>
<h5>Заголовок 5</h5>
<h6>Заголовок 6</h6>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке</p>
<p>
  <strong>Strong Текст</strong>
</p>
<p>
  <em>Em Текст</em>
</p>
<p>
  <strong>
    <em>Strong + Em Текст</em>
  </strong>
</p>
<p>
  <a href="#">Текст ссылки</a>
</p>
<pre>
const codeSample = (value) => { 
  const result = computeSample(value);
  return result; 
}
</pre>
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
`;

const Article = styled.article`
  padding-bottom: 100px;
`;

const ParallaxCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
`;

const ParallaxImageWrapper = styled.div`
  margin: 40px 0;
`;

const BlogPost = () => {
  return (
    <>
      <Container>
        <BlogPostHead
          title="Начало повседневной работы по формированию позиции"
          description="Повседневная практика показывает, что начало повседневной работы поформированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
          date="2020-09-29T18:51:06+00:00"
          minRead={10}
        />
      </Container>
      <Container fluid>
        <Row>
          <ParallaxCoverWrapper>
            <ParallaxImage
              src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2546&q=80"
              mode="cover"
            />
          </ParallaxCoverWrapper>
        </Row>
      </Container>
      <Container fluid>
        <Article>
          <ArticleBlock>
            <ArticleText markup={MARKUP_1} />
          </ArticleBlock>

          <ArticleBlock>
            <ParallaxImageWrapper>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1602329915652-013fcbdb4d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1236&q=80"
                limitPositionY={20}
                caption={`<p>
                  <em>
                    Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                      unsplash.com
                    </a>
                  </em>
                </p>`}
              />
            </ParallaxImageWrapper>
            <ParallaxImageWrapper>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1602357821585-30b1c327c661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80"
                limitPositionY={20}
                mode="wide"
              />
            </ParallaxImageWrapper>
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_1} />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleVideo src="/uploads/test-video.mp4" mode="wide" />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_1} />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleImage
              src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              alt="Реализация намеченных плановых заданий"
              caption={`<p>
                  <em>
                    Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                      unsplash.com
                    </a>
                  </em>
                </p>`}
              mode="wide"
            />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleQuote
              markup={`
              <p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные.</p>
            `}
              author="Иванов А. П."
            />
          </ArticleBlock>

          <ArticleBlock fluid>
            <ArticleImageGrid
              items={[
                {
                  id: '1',
                  src:
                    'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
                  caption: `<p>
                    <em>
                      Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                        unsplash.com
                      </a>
                    </em>
                  </p>`,
                  description:
                    'Прежде всего социально-экономическое развитие способствует повышению качества экономической целесообразности принимаемых изменений.',
                },
                {
                  id: '2',
                  src:
                    'https://images.unsplash.com/photo-1591204541719-8f18e517b3c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1247&q=80',
                  description:
                    ' Разнообразный и богатый опыт новая модель организационной деятельности',
                },
                {
                  id: '3',
                  src:
                    'https://images.unsplash.com/photo-1583133010801-0b9802ae9c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2564&q=80',
                  caption: `<p>
                    <em>
                      Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                        unsplash.com
                      </a>
                    </em>
                  </p>`,
                },
                {
                  id: '4',
                  src:
                    'https://images.unsplash.com/photo-1602357821585-30b1c327c661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80',
                },
                {
                  id: '5',
                  src:
                    'https://images.unsplash.com/photo-1602329915652-013fcbdb4d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1236&q=80',
                },
              ]}
            />
          </ArticleBlock>

          <ArticleBlock>
            <ArticleText markup={MARKUP_2} />
          </ArticleBlock>

          <ArticleBlock fluid>
            <ArticleImageGrid
              items={[
                {
                  id: '1',
                  src:
                    'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
                  caption: `<p>
                    <em>
                      Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                        unsplash.com
                      </a>
                    </em>
                  </p>`,
                  description:
                    'Прежде всего социально-экономическое развитие способствует повышению качества экономической целесообразности принимаемых изменений.',
                },
                {
                  id: '2',
                  src:
                    'https://images.unsplash.com/photo-1591204541719-8f18e517b3c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1247&q=80',
                  description:
                    ' Разнообразный и богатый опыт новая модель организационной деятельности',
                },
                {
                  id: '3',
                  src:
                    'https://images.unsplash.com/photo-1583133010801-0b9802ae9c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2564&q=80',
                  caption: `<p>
                    <em>
                      Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">
                        unsplash.com
                      </a>
                    </em>
                  </p>`,
                },
                {
                  id: '4',
                  src:
                    'https://images.unsplash.com/photo-1602357821585-30b1c327c661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80',
                },
                {
                  id: '5',
                  src:
                    'https://images.unsplash.com/photo-1602329915652-013fcbdb4d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1236&q=80',
                },
              ]}
            />
          </ArticleBlock>
        </Article>
      </Container>
    </>
  );
};

export default BlogPost;
