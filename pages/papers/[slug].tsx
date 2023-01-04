import { gql } from "@apollo/client";
import React from "react";
import client from "../../apolloClient";
import { FaTag } from "react-icons/fa";
import { Footer } from "../../src/components/organisms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

export default function Paper({ post }: any) {
  return (
    <div>
      <div className="border border-black" />
      <div className="w-full md:w-[48rem] mx-auto px-4 py-16">
        <article>
          <header>
            <h1 className="font-bold text-xl">{post.title}</h1>
            <div className="flex flex-row items-center space-x-2 mb-4 text-subtextColor">
              <time className="text-sm">{post.datePublished}</time>
              <div className="border-l-2 border-subtextColor h-4" />
              <FaTag />
              <div className="text-sm">{post.tags.name}</div>
            </div>
          </header>
          {/* <div dangerouslySetInnerHTML={{ __html: post.content.html }} /> */}
          <RichText
            content={post.content.json.children}
            references={post.content.references}
            renderers={{
              p: ({ children }) => (
                <div>
                  <p className="break-normal">{children}</p>
                  <br />
                </div>
              ),
              bold: ({ children }) => <strong>{children}</strong>,
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-md font-semibold">{children}</h4>
              ),
              img: ({ src, altText, height, width }: any) => (
                <Image src={src} alt={altText} height={height} width={width} />
              ),
            }}
          />
        </article>
        <Footer />
      </div>
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
          tags {
            name
            slug
          }
          content {
            json
            references {
              __typename
              ... on Asset {
                url
                id
                mimeType
              }
            }
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
