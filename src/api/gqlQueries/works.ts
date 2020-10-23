import { gql } from 'graphql-request';

const FRAGMENT_IDENTIFIER_WITH_SLUG = gql`
  fragment identifierWithSlug on Work {
    id
    slug
  }
`;

const FRAGMENT_MAIN_DATA = gql`
  fragment mainData on Work {
    published_at
    title
    previewTextMode
    categories {
      name
    }
    preview {
      url
      formats
    }
  }
`;

const allWorkSlugsQuery = gql`
  {
    works {
      ...identifierWithSlug
    }
  }
  ${FRAGMENT_IDENTIFIER_WITH_SLUG}
`;

const worksQuery = gql`
  query WorksQuery($start: Int!, $limit: Int!) {
    works(sort: "published_at:desc", limit: $limit, start: $start) {
      ...identifierWithSlug
      ...mainData
    }
  }
  ${FRAGMENT_IDENTIFIER_WITH_SLUG}
  ${FRAGMENT_MAIN_DATA}
`;

const workBySlugQuery = gql`
  query WorkBySlugQuery($slug: String!) {
    works(where: { slug: $slug }) {
      slug
      title
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

export default {
  allWorkSlugsQuery,
  worksQuery,
  workBySlugQuery,
};
