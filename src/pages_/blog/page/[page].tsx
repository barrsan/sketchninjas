import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { AllBlogPostsLayout } from '@/layouts';
import { blogApi } from '@/api';
import { getReadingTime } from '@/helpers/getReadingTime';
import { common } from '@/constants';
import { IBlogPost } from '@/types';

interface IProps {
  blogPosts: IBlogPost[];
  pageCount: number;
  currentPage: number;
}

const { LIMIT_BLOG_POSTS } = common;

const AllBlogPosts: NextPage<IProps> = ({
  blogPosts,
  pageCount,
  currentPage,
}: IProps) => (
  <AllBlogPostsLayout
    blogPosts={blogPosts}
    pageCount={pageCount}
    currentPage={currentPage}
  />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = params?.page as string;
  const currentPageNumber = +(currentPage || 0);

  const start = (currentPageNumber - 1) * LIMIT_BLOG_POSTS;

  const blogPostsRaw = await blogApi.getBlogPosts(start);
  const allBlogPosts = await blogApi.getAllBlogPostSlugs();
  const numberOfPages = Math.ceil(allBlogPosts.length / LIMIT_BLOG_POSTS);

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
      currentPage: currentPageNumber,
      pageCount: numberOfPages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await blogApi.getAllBlogPostSlugs();
  const numberOfPages = Math.ceil(blogPosts.length / LIMIT_BLOG_POSTS);

  const paths = Array(numberOfPages)
    .fill('')
    .map((i, index) => {
      return {
        params: {
          page: (index + 1).toString(),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export default AllBlogPosts;
