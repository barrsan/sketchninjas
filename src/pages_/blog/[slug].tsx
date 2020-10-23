import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { BlogPostLayout } from '@/layouts';
import { getReadingTime } from '@/helpers/getReadingTime';
import { contentMarkdownToHtml } from '@/helpers/contentMarkdownToHtml';
import { blogApi } from '@/api';
import { IBlogPostFull } from '@/types';

interface IProps {
  blogPost: IBlogPostFull;
}

const BlogPost: NextPage<IProps> = ({ blogPost }: IProps) => (
  <BlogPostLayout blogPost={blogPost} />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPostRaw = await blogApi.getBlogPostBySlug(params.slug as string);

  const readingTime = getReadingTime(blogPostRaw.content);
  const htmlContent = await contentMarkdownToHtml(blogPostRaw.content);

  const blogPost = {
    ...blogPostRaw,
    content: htmlContent,
    readingTime,
  };

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await blogApi.getAllBlogPostSlugs();

  const paths = blogPosts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
