import { GraphQLClient } from 'graphql-request';
import { common } from '@/constants';
import { IWork, IWorkSlug, IWorkFull } from '@/types';
import { worksQueries } from './gqlQueries';

const { LIMIT_WORKS } = common;

const { allWorkSlugsQuery, workBySlugQuery, worksQuery } = worksQueries;

const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL);

async function getAllWorkSlugs() {
  try {
    const { works }: { works: IWorkSlug[] } = await graphQLClient.request(
      allWorkSlugsQuery,
    );
    return works;
  } catch (error) {
    throw error;
  }
}

async function getWorks(start: number, limit: number = LIMIT_WORKS) {
  try {
    const { works }: { works: IWork[] } = await graphQLClient.request(
      worksQuery,
      {
        start,
        limit,
      },
    );
    return works;
  } catch (error) {
    throw error;
  }
}

async function getWorkBySlug(slug: string) {
  try {
    const { works }: { works: IWorkFull[] } = await graphQLClient.request(
      workBySlugQuery,
      {
        slug,
      },
    );
    return works[0];
  } catch (error) {
    throw error;
  }
}

export default {
  getAllWorkSlugs,
  getWorks,
  getWorkBySlug,
};
