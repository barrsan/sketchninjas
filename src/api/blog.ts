import { GraphQLClient } from 'graphql-request';
import { common } from '@/constants';
import {
  IBlogPostSlug,
  IBlogPostWithTextContentRaw,
  IBlogPostFullRaw,
} from '@/types';
import { blogQueries } from './gqlQueries';

const { LIMIT_BLOG_POSTS } = common;

const {
  allBlogPostSlugsQuery,
  blogPostBySlugQuery,
  blogPostsQuery,
} = blogQueries;

const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL);

async function getAllBlogPostSlugs() {
  try {
    const {
      blogPosts,
    }: { blogPosts: IBlogPostSlug[] } = await graphQLClient.request(
      allBlogPostSlugsQuery,
    );
    return blogPosts;
  } catch (error) {
    throw error;
  }
}

async function getBlogPosts(start: number, limit: number = LIMIT_BLOG_POSTS) {
  try {
    const {
      blogPosts,
    }: {
      blogPosts: IBlogPostWithTextContentRaw[];
    } = await graphQLClient.request(blogPostsQuery, {
      start,
      limit,
    });
    return blogPosts;
  } catch (error) {
    throw error;
  }
}

async function getBlogPostBySlug(slug: string) {
  try {
    const {
      blogPosts,
    }: { blogPosts: IBlogPostFullRaw[] } = await graphQLClient.request(
      blogPostBySlugQuery,
      {
        slug,
      },
    );
    return blogPosts[0];
  } catch (error) {
    throw error;
  }
}

export default {
  getAllBlogPostSlugs,
  getBlogPosts,
  getBlogPostBySlug,
};
