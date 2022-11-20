import { gql } from "@apollo/client";
import React from "react";
import client from "../../apolloClient";
import { FaTag } from "react-icons/fa";
import { Footer } from "../../src/components/organisms";

export default function Paper({ post }: any) {
  return (
    <div className="py-8 w-96 md:py-16 md:w-max">
      <article>
        <header>
          <h1 className="font-bold text-xl">{post.title}</h1>
          <div className="flex flex-row items-center space-x-2 mb-4 text-subText">
            <time className="text-sm">{post.datePublished}</time>
            <div className="border-l-2 border-subText h-4" />
            <FaTag />
            <div className="text-sm"></div>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </article>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  });
  const { posts } = data;
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.toString() },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug as string;
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!) {
        posts(where: { slug: $slug }) {
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
    variables: { slug },
  });
  const { posts } = data;
  const post = posts[0];
  return { props: { post }, revalidate: 60 * 60 };
}
