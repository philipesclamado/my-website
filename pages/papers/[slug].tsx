import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { FaTag } from "react-icons/fa";
import { Footer } from "../../src/components/organisms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

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
              {post.tags.map((tag: any, i: any) => {
                return (
                  <span className="text-sm" key={i}>
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </header>
          <RichText
            content={post.content.json}
            references={post.content.references}
            renderers={{
              Asset: {
                image: ({ url, height, width, description }) => {
                  return (
                    <span className="flex flex-col items-center">
                      <Image src={url} alt={""} height={height} width={width} />
                      <span className="text-subtextColor break-normal text-xs">
                        {description}
                      </span>
                    </span>
                  );
                },
              },
              embed: {
                Equation: ({ eqn }) => {
                  return (
                    <span className="flex justify-center text-base ">
                      {eqn}
                    </span>
                  );
                },
              },
              p: ({ children }) => (
                <div>
                  <p className="break-normal text-sm">{children}</p>
                  <br />
                </div>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-sm">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-sm">{children}</ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              a: ({ children, href }) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href!}
                  className="text-green-700 underline break-all"
                >
                  {children}
                </Link>
              ),

              bold: ({ children }) => (
                <strong className="font-bold text-base">{children}</strong>
              ),
              code_block: ({ children }) => {
                return (
                  <div>
                    <pre className="bg-[#f1f1f1] rounded-lg border p-4 break-all overflow-auto">
                      <code>{children}</code>
                    </pre>
                    <br />
                  </div>
                );
              },
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
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug as string;
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!) {
        posts(orderBy: datePublished_DESC, where: { slug: $slug }) {
          title
          datePublished
          slug
          id
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
                height
                width
                id
                mimeType
                description
              }
              ... on Equation {
                eqn
                id
              }
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
