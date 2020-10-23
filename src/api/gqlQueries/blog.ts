import { gql } from 'graphql-request';

const FRAGMENT_IDENTIFIER_WITH_SLUG = gql`
  fragment identifierWithSlug on BlogPost {
    id
    slug
  }
`;

const FRAGMENT_MAIN_DATA = gql`
  fragment mainData on BlogPost {
    published_at
    title
    description
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
      ... on ComponentArticleQuote {
        id
        text
        author
      }
    }
  }
`;

const allBlogPostSlugsQuery = gql`
  {
    blogPosts {
      ...identifierWithSlug
    }
  }
  ${FRAGMENT_IDENTIFIER_WITH_SLUG}
`;

const blogPostsQuery = gql`
  query blogPostsQuery($start: Int!, $limit: Int!) {
    blogPosts(sort: "published_at:desc", limit: $limit, start: $start) {
      ...identifierWithSlug
      ...mainData
    }
  }
  ${FRAGMENT_IDENTIFIER_WITH_SLUG}
  ${FRAGMENT_MAIN_DATA}
`;

const blogPostBySlugQuery = gql`
  query BlogPostBySlugQuery($slug: String!) {
    blogPosts(where: { slug: $slug }) {
      published_at
      title
      slug
      description
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
  allBlogPostSlugsQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
};
