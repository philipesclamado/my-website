import { NextPage } from "next";
import Link from "next/link";
import client from "../apolloClient";
import { gql } from "@apollo/client";
import { BaseLayout } from "../src/Layout/BaseLayout";

const groupPostsByYear = (posts: Post[]) => {
  return posts.reduce<{ [year: string]: Post[] }>((grouped, post) => {
    const year = post.datePublished.split("-")[0];
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(post);
    return grouped;
  }, {});
};

const PostList: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const groupedPosts = groupPostsByYear(posts);
  return (
    <BaseLayout>
      {Object.keys(groupedPosts)
        .reverse()
        .map((year) => (
          <div key={year}>
            <p className="font-semibold">{year}</p>
            {groupedPosts[year].map((post, index) => (
              <div
                className="flex flex-col md:flex-row p-2 text-base md:text-sm"
                key={index}
              >
                <p className="text-subtextColor">{post.datePublished}:</p>
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
            ))}
          </div>
        ))}
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        posts(orderBy: datePublished_DESC) {
          title
          datePublished
          slug
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

export default PostList;
