import Link from "next/link";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import { BaseLayout } from "../../src/Layout/BaseLayout";
import { NextPage } from "next";

const RelatedPost: NextPage<PostProps> = ({ post }) => {
  return (
    <BaseLayout>
      {post.map((post: any, i: number) => {
        return (
          <div
            className="flex flex-col md:flex-row p-2 text-base md:text-sm"
            key={i}
          >
            <p key={post.datePublished} className="text-subtextColor">
              {post.datePublished}:
            </p>
            &nbsp;
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
        );
      })}
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
  //console.log(data);
  const { posts } = data.tags[0];
  //console.log(data);
  return { props: { post: posts }, revalidate: 10 };
}

export default RelatedPost;
