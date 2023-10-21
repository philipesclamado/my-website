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
                  <p
                    className="break-words underline hover:decoration-highlightColor leading-relaxed"
                    key={post.title}
                  >
                    {post.title}
                  </p>
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
