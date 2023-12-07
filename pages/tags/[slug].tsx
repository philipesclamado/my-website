import Link from "next/link";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import { BaseLayout } from "../../src/Layout/BaseLayout";
import { NextPage } from "next";
import { groupPostsByYear } from "../../src/algo";

const RelatedPost: NextPage<PostProps> = ({ post }) => {
  const groupedPosts = groupPostsByYear(post);
  return (
    <BaseLayout>
      {Object.keys(groupedPosts)
        .reverse()
        .map((year) => (
          <div key={year} className="mb-6">
            <p className="font-semibold mb-2">{year}</p>
            {groupedPosts[year].map((post, index) => (
              <div
                className="flex flex-col md:flex-row p-2 text-base md:text-sm border-b border-gray-200 last:border-b-0"
                key={index}
              >
                <p className="text-subtextColor mb-2 md:mb-0">
                  {post.datePublished}:&nbsp;
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <div className="w-72 md:w-max">
                    <p
                      className="break-words underline hover:decoration-highlightColor leading-relaxed"
                      key={post.title}
                    >
                      {post.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        tags {
          slug
        }
      }
    `,
  });
  const { tags } = data;
  return {
    paths: tags.map((tag: any) => ({
      params: { slug: tag.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { data } = await client.query({
    query: gql`
      query Tag($slug: String!) {
        tags(where: { slug: $slug }, orderBy: updatedAt_DESC) {
          posts {
            ... on Post {
              title
              datePublished
              slug
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  const { posts } = data.tags[0];

  return { props: { post: posts }, revalidate: 60 };
}

export default RelatedPost;
