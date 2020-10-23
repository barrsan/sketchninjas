import { FC } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { BlogPostHead } from '@/components/BlogPostHead';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ArticleCommonBlock } from '@/components/ArticleBlocks';
import { Article } from '@/components/shared/article';
import { IBlogPostFull } from '@/types';

interface IProps {
  blogPost: IBlogPostFull;
}

const ParallaxCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
`;

const BlogPost: FC<IProps> = ({ blogPost }: IProps) => {
  return (
    <>
      <Container>
        <BlogPostHead
          title={blogPost.title}
          description={blogPost.description}
          date={blogPost.published_at}
          minRead={blogPost.readingTime}
        />
      </Container>
      <Container fluid>
        <Row>
          <ParallaxCoverWrapper>
            <ParallaxImage src={blogPost.cover.url} mode="cover" />
          </ParallaxCoverWrapper>
        </Row>
      </Container>
      <Container fluid>
        <Article>
          {blogPost.content.map((i) => (
            <ArticleCommonBlock key={i.id} type="blogPost" content={i} />
          ))}
        </Article>
      </Container>
    </>
  );
};

export default BlogPost;
