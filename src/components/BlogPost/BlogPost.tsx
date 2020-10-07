import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { BlogPostHead } from '@/components/BlogPostHead';
import { Article } from '@/components/Article';

const MARKUP = `
<p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Равным образом консультация
  с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
</p>
<p class="full-img">
  <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Реализация намеченных плановых заданий" />
</p>
<p class="full-em">
  <em>Изображение взято с <a href="https://unsplash.com/photos/fg7J6NnebBc" target="_blank">unsplash.com</a></em>
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
<blockquote>
  <p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные.</p>
  <p><cite>Автор Цитаты</cite></p>
</blockquote>
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

const ArticleWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0 100px 0;
  width: 100%;
  max-width: 800px;
`;

const BlogPost = () => {
  return (
    <Container>
      <BlogPostHead
        title="Начало повседневной работы по формированию позиции"
        description="Повседневная практика показывает, что начало повседневной работы поформированию позиции позволяет выполнять важные
  задания по разработке позиций, занимаемых участниками в отношении поставленных задач."
        date="2020-09-29T18:51:06+00:00"
        minRead={10}
      />
      <ArticleWrapper>
        <Article markup={MARKUP} />
      </ArticleWrapper>
    </Container>
  );
};

export default BlogPost;
