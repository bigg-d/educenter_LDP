import { CarouselPostDto, DetailNewsDto } from "../new.entities";

const API_URL = process.env.WORDPRESS_API_URL as string;

async function fetchAPI(query: string = "", { variables }: any = {}) {
  const headers: any = { "Content-Type": "application/json" };

  //   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //     const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN as string;
  //     headers["Authorization"] = `Bearer ${token}`;
  //   }

  //educenter.pt-corp.vn/index.php?graphql
  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getCarouselNew() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {

        nodes {
            featuredImage {
                node {
                id
                sourceUrl
                }
            }
            slug
            id
            uri
            link
            title
            excerpt
            tags {
                nodes {
                    name
                }
            }
        }
      }
    }
  `);

  return data.posts.nodes as CarouselPostDto[];
}

export async function getSummary() {
  const data = await fetchAPI(`
  query AllPosts {
  posts(first: 8, after: "4", where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      featuredImage {
        node {
          id
          sourceUrl
          slug
        }
      }
      slug
      id
      uri
      link
      title
      excerpt
      tags {
        nodes {
          name
        }
      }
    }
  }
}
  `);

  return data.posts.nodes as CarouselPostDto[];
}

export async function getDetailPost(slug: string) {
  const id = `"${slug}"`;
  const data = await fetchAPI(`
        query NewQuery {
        post(id: ${id}, idType: SLUG) {
        id
            title
            content
            excerpt
            date
            modified
            author {
              node {
                name
                databaseId
              }
            }
            featuredImage {
            node {
                sourceUrl
            }
            }
        }

        }
  `);

  return data.post as DetailNewsDto;
}


export async function getRelatedPost(authorDbId: number) {
  console.log(authorDbId)
  const data = await fetchAPI(`
      query GetRelatedPost {
        posts(first: 3, where: {author: ${authorDbId}, orderby: {field: DATE, order: DESC}}) {
          nodes {
            featuredImage {
              node {
                id
                sourceUrl
                slug
              }
            }
            id
            slug
            link
            title
            excerpt
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
  `);

    return data.posts.nodes as CarouselPostDto[];
}