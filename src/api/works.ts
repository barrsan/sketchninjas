import { GraphQLClient, gql } from 'graphql-request';
import { common } from '@/constants';
import { IWork, IWorkSlug, IWorkFull } from '@/types';

const { LIMIT_WORKS_ON_HOMEPAGE, LIMIT_WORKS } = common;

const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL);

const allWorksQuery = gql`
  {
    works {
      id
      slug
    }
  }
`;

const worksHomepageQuery = gql`
  query WorksHomepage($limit: Int!) {
    works(sort: "published_at:desc", limit: $limit) {
      id
      published_at
      title
      slug
      previewTextMode
      categories {
        name
      }
      preview {
        url
        formats
      }
    }
  }
`;

const worksQuery = gql`
  query WorksWithPagination($start: Int!, $limit: Int!) {
    works(sort: "published_at:desc", limit: $limit, start: $start) {
      id
      published_at
      title
      slug
      previewTextMode
      categories {
        name
      }
      preview {
        url
        formats
      }
    }
  }
`;

const workBySlugQuery = gql`
  query WorkBySlug($slug: String!) {
    works(where: { slug: $slug }) {
      title
      slug
      categories {
        name
      }
      seo {
        metaKeywords
        metaDescription
      }
      cover {
        url
        formats
      }
      content {
        __typename
        ... on ComponentArticleText {
          id
          text
        }
        ... on ComponentArticleSingleImage {
          id
          image {
            url
            formats
          }
          caption
          type
          parallax
        }
        ... on ComponentArticleVideo {
          id
          video {
            url
          }
          videoDisplayType
          controls
          autoplay
          loop
          muted
          playsinline
        }
        ... on ComponentArticleQuote {
          id
          text
          author
        }
        ... on ComponentArticleImagesGrid {
          id
          images {
            image {
              url
              formats
            }
            caption
            description
          }
        }
      }
    }
  }
`;

async function getAllWorks() {
  try {
    const { works }: { works: IWorkSlug[] } = await graphQLClient.request(
      allWorksQuery,
    );
    return works;
  } catch (error) {
    throw error;
  }
}

async function getWorksHomepage() {
  try {
    const { works }: { works: IWork[] } = await graphQLClient.request(
      worksHomepageQuery,
      {
        limit: LIMIT_WORKS_ON_HOMEPAGE,
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

async function getWorks(start: number) {
  try {
    const { works }: { works: IWorkFull[] } = await graphQLClient.request(
      worksQuery,
      {
        start,
        limit: LIMIT_WORKS,
      },
    );
    return works;
  } catch (error) {
    throw error;
  }
}

export default {
  getAllWorks,
  getWorksHomepage,
  getWorkBySlug,
  getWorks,
};
