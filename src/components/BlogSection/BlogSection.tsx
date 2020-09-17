import useTranslation from 'next-translate/useTranslation';
import styled, { css } from 'styled-components';
import { down } from 'styled-breakpoints';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import {
  BlogPostItemWide,
  BlogPostItemHorizontal,
} from '@/components/BlogPostItems';
import { colors } from '@/constants';

interface IStyledBlogPostWrapperProps {
  last?: boolean;
}

const Wrapper = styled.section`
  padding: 100px 0;
  background-color: ${colors.WHITE};
`;

const SectionTitleWrapper = styled.div`
  padding: 0 0 72px 0;
  text-align: center;
`;

const BlogPostWrapper = styled.div<IStyledBlogPostWrapperProps>`
  padding: 0 0 80px 0;

  ${down('sm')} {
    ${({ last = false }: IStyledBlogPostWrapperProps) => {
      if (!last) {
        return css`
          padding-bottom: 50px;
        `;
      }
      return '';
    }}
  }
`;

const AllPosts = styled.div`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const BlogSection = () => {
  const { t } = useTranslation();
  const tBlog = t('blog:blog');
  const tAllPosts = t('blog:allPosts');

  const items = [
    {
      id: '1',
      title: 'Типы анимации в мобильном приложении',
      description:
        'Sketch Ninjas создан для того, чтобы находить простые решения сложных задач. Sketch Ninjas создан для того, чтобы находить простые решения сложных задач.',
      publicationDate: 'Авг. 20, 2020',
      minRead: 5,
      imageSrc: '/uploads/blog1.png',
    },
    {
      id: '2',
      title: 'Типы анимации в мобильном приложении',
      description:
        'Sketch Ninjas создан для того, чтобы находить простые решения сложных задач. Sketch Ninjas создан для того, чтобы находить простые решения сложных задач.',
      publicationDate: 'Авг. 20, 2020',
      minRead: 5,
      imageSrc: '/uploads/blog2.png',
    },
    {
      id: '3',
      title: 'Типы анимации в мобильном приложении',
      description:
        'Sketch Ninjas создан для того, чтобы находить простые решения сложных задач. Sketch Ninjas создан для того, чтобы находить простые решения сложных задач.',
      publicationDate: 'Авг. 20, 2020',
      minRead: 5,
      imageSrc: '/uploads/blog3.png',
    },
  ];

  return (
    <Wrapper>
      <Container>
        <SectionTitleWrapper>
          <SectionTitle>{tBlog}</SectionTitle>
        </SectionTitleWrapper>
      </Container>
      <Container>
        {items.map((item, index) => {
          if (index > 0) {
            return (
              <BlogPostWrapper key={item.id}>
                <BlogPostItemHorizontal
                  title={item.title}
                  description={item.description}
                  publicationDate={item.publicationDate}
                  minRead={item.minRead}
                  imageSrc={item.imageSrc}
                  reverse
                />
              </BlogPostWrapper>
            );
          }
          return (
            <BlogPostWrapper key={item.id}>
              <BlogPostItemWide
                title={item.title}
                description={item.description}
                publicationDate={item.publicationDate}
                minRead={item.minRead}
                imageSrc={item.imageSrc}
              />
            </BlogPostWrapper>
          );
        })}
        <AllPosts>
          <SecondaryButton block asLink href="/blog">
            {tAllPosts}
          </SecondaryButton>
        </AllPosts>
      </Container>
    </Wrapper>
  );
};

export default BlogSection;
