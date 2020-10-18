import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import {
  BlogPostItemHorizontal,
  BlogPostItemWide,
} from '@/components/BlogPostItems';
import { BlogPostWrapper } from '@/components/shared/blog';
import { colors } from '@/constants';

const items = [
  {
    id: '1',
    title: 'Типы анимации в мобильном приложении',
    description:
      'Идейные соображения высшего порядка, а также управление и развитие структуры играет важную роль в формировании модели развития.',
    publicationDate: '2020-09-29T18:51:06+00:00',
    minRead: 5,
    imageSrc: '/uploads/blog1.png',
    slug: 'asdasd1',
  },
  {
    id: '2',
    title: 'Типы анимации в мобильном приложении',
    description:
      'Sketch Ninjas создан для того, чтобы находить простые решения сложных задач.',
    publicationDate: '2020-09-29T18:51:06+00:00',
    minRead: 5,
    imageSrc: '/uploads/blog2.png',
    slug: 'asdasd2',
  },
  {
    id: '3',
    title: 'Типы анимации в мобильном приложении',
    description:
      'Равным образом дальнейшее развитие различных форм деятельности играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям.',
    publicationDate: '2020-09-29T18:51:06+00:00',
    minRead: 5,
    imageSrc: '/uploads/blog3.png',
    slug: 'asdasd3',
  },
];

const Wrapper = styled.section`
  padding: 0 0 50px 0;
  background-color: ${colors.WHITE};
`;

const Blog = () => {
  return (
    <Wrapper>
      <Container>
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <BlogPostWrapper key={item.id}>
                <BlogPostItemWide
                  title={item.title}
                  description={item.description}
                  publicationDate={item.publicationDate}
                  minRead={item.minRead}
                  imageSrc={item.imageSrc}
                  slug={item.slug}
                />
              </BlogPostWrapper>
            );
          }
          return (
            <BlogPostWrapper key={item.id}>
              <BlogPostItemHorizontal
                title={item.title}
                description={item.description}
                publicationDate={item.publicationDate}
                minRead={item.minRead}
                imageSrc={item.imageSrc}
                slug={item.slug}
              />
            </BlogPostWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Blog;
