import { NextPage, GetStaticProps } from 'next';
import { HomeLayout } from '@/layouts';
import { worksApi, blogApi } from '@/api';
import { getReadingTime } from '@/helpers/getReadingTime';
import { common } from '@/constants';
import { IWork, IBlogPost } from '@/types';

interface IProps {
  works: IWork[];
  blogPosts: IBlogPost[];
}

const { LIMIT_WORKS_ON_HOMEPAGE, LIMIT_BLOG_POSTS_ON_HOMEPAGE } = common;

const Home: NextPage<IProps> = ({ works, blogPosts }: IProps) => (
  <HomeLayout works={works} blogPosts={blogPosts} />
);

export const getStaticProps: GetStaticProps = async () => {
  const works = await worksApi.getWorks(0, LIMIT_WORKS_ON_HOMEPAGE);
  const blogPostsRaw = await blogApi.getBlogPosts(
    0,
    LIMIT_BLOG_POSTS_ON_HOMEPAGE,
  );

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
      works,
      blogPosts,
    },
  };
};

export default Home;
