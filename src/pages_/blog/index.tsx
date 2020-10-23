import { NextPage, GetStaticProps } from 'next';
import { BlogLayout } from '@/layouts';
import { blogApi } from '@/api';
import { getReadingTime } from '@/helpers/getReadingTime';
import { common } from '@/constants';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  blogPostsCount: number;
}

const { LIMIT_BLOG_POSTS_ON_BLOG_PAGE } = common;

const Blog: NextPage<IProps> = ({ blogPosts, blogPostsCount }: IProps) => (
  <BlogLayout blogPosts={blogPosts} blogPostsCount={blogPostsCount} />
);

export const getStaticProps: GetStaticProps = async () => {
  const blogPostsRaw = await blogApi.getBlogPosts(
    0,
    LIMIT_BLOG_POSTS_ON_BLOG_PAGE,
  );
  const allBlogPosts = await blogApi.getAllBlogPostSlugs();

  const blogPosts: IBlogPost[] = blogPostsRaw.map((i) => {
    const readingTime = getReadingTime(i.content);

    const item: IBlogPost = {
      ...i,
      readingTime,
    };

    return item;
  });

  return {
    props: {
      blogPosts,
      blogPostsCount: allBlogPosts.length,
    },
  };
};

export default Blog;
