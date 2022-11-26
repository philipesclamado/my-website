import { NextPage } from "next";
import Link from "next/link";
import { Footer } from "../src/components/organisms";
import client from "../apolloClient";
import { gql } from "@apollo/client";
import { BaseLayout } from "../src/Layout/BaseLayout";

const Papers: NextPage = ({ posts }: any) => {
  return (
    <BaseLayout>
      {posts.map((post: any, i: any) => {
        return (
          <div
            className="flex flex-col md:flex-row p-2 text-base md:text-sm"
            key={i}
          >
            <p key={post.datePublished} className="text-subText">
              {post.datePublished}:
            </p>
            &nbsp;
            <Link href={`/papers/${post.slug}`}>
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          id
          title
          datePublished
          slug
          content {
            html
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `,
  });
  const { posts } = data;
  return {
    props: {
      posts,
    },
  };
}

export default Papers;
