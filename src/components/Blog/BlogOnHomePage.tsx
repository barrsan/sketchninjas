import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import { BlogPostItemHorizontal } from '@/components/BlogPostItems';
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
  },
  {
    id: '2',
    title: 'Типы анимации в мобильном приложении',
    description:
      'Sketch Ninjas создан для того, чтобы находить простые решения сложных задач.',
    publicationDate: '2020-09-29T18:51:06+00:00',
    minRead: 5,
    imageSrc: '/uploads/blog2.png',
  },
  {
    id: '3',
    title: 'Типы анимации в мобильном приложении',
    description:
      'Равным образом дальнейшее развитие различных форм деятельности играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям.',
    publicationDate: '2020-09-29T18:51:06+00:00',
    minRead: 5,
    imageSrc: '/uploads/blog3.png',
  },
];

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${colors.WHITE};
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 72px 0;
  text-align: center;
`;

const AllPosts = styled.div`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const BlogOnHomePage = () => {
  const { t } = useTranslation();
  const tBlog = t('blog:blog');
  const tAllPosts = t('blog:allPosts');

  return (
    <Wrapper>
      <Container>
        <SectionTitleWrapper>
          <SectionTitle>{tBlog}</SectionTitle>
        </SectionTitleWrapper>
      </Container>
      <Container>
        {items.map((item) => (
          <BlogPostWrapper key={item.id}>
            <BlogPostItemHorizontal
              title={item.title}
              description={item.description}
              publicationDate={item.publicationDate}
              minRead={item.minRead}
              imageSrc={item.imageSrc}
            />
          </BlogPostWrapper>
        ))}
        <AllPosts>
          <SecondaryButton block asLink href="/blog">
            {tAllPosts}
          </SecondaryButton>
        </AllPosts>
      </Container>
    </Wrapper>
  );
};

export default BlogOnHomePage;
