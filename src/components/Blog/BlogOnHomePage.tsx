import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import { SectionTitle } from '@/components/SectionTitle';
import { SecondaryButton } from '@/components/Buttons';
import { BlogPostItemHorizontal } from '@/components/BlogPostItems';
import { BlogPostWrapper } from '@/components/shared/blog';
import { colors } from '@/constants';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
}

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

const BlogOnHomePage: FC<IProps> = ({ blogPosts }: IProps) => {
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
        {blogPosts.map((item) => (
          <BlogPostWrapper key={item.id}>
            <BlogPostItemHorizontal
              title={item.title}
              description={item.description}
              publicationDate={item.published_at}
              readingTime={item.readingTime}
              imageSrc={item.cover.formats.large.url}
              slug={item.slug}
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
