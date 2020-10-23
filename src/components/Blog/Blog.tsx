import { FC } from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import {
  BlogPostItemHorizontal,
  BlogPostItemWide,
} from '@/components/BlogPostItems';
import { BlogPostWrapper } from '@/components/shared/blog';
import { colors } from '@/constants';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  type?: 'main' | 'allPosts';
}

const Wrapper = styled.section`
  padding: 0 0 50px 0;
  background-color: ${colors.WHITE};
`;

const Blog: FC<IProps> = ({ blogPosts, type = 'allPosts' }: IProps) => {
  return (
    <Wrapper>
      <Container>
        {blogPosts.map((item, index) => {
          if (index === 0 && type === 'main') {
            return (
              <BlogPostWrapper key={item.id}>
                <BlogPostItemWide
                  title={item.title}
                  description={item.description}
                  publicationDate={item.published_at}
                  readingTime={item.readingTime}
                  imageSrc={item.cover.url}
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
                publicationDate={item.published_at}
                readingTime={item.readingTime}
                imageSrc={item.cover.url}
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
