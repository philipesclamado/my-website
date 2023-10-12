import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { FaTag, FaAngleRight, FaAngleLeft, FaAngleUp } from "react-icons/fa";
import { Footer } from "../../src/components/organisms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import "katex/dist/katex.min.css";
import AutoLaTeX, { RenderMathInElementOptions } from "react-autolatex";
import { NavBar } from "../../src/components/molecules";

const Post: NextPage = ({ post, nextPostSlug, prevPostSlug }: any) => {
  const options: RenderMathInElementOptions = {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    errorCallback(msg: string, err: Error) {
      console.error("[Error]", msg, err);
    },
  };
  return (
    <div id="top">
      <div className="border border-black" />
      <NavBar
        className="hidden md:block absolute top-4 right-4"
        navStyle="text-sm space-x-5 md:space-x-4"
        borderStyle="border-dashed border-highlightColor"
        hoverStyle="hover:underline decoration-highlightColor"
      />
      <div className="hidden md:flex flex-row fixed top-12 right-4 space-x-2">
        {prevPostSlug && (
          <Link href={`/posts/${prevPostSlug}`}>
            <FaAngleLeft className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
          </Link>
        )}
        {nextPostSlug && (
          <Link href={`/posts/${nextPostSlug}`}>
            <FaAngleRight className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
          </Link>
        )}
        <Link href="#top">
          <FaAngleUp className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
        </Link>
      </div>
      <div className="w-full md:w-[48rem] mx-auto px-4 py-16">
        <article>
          <header>
            <h1 className="font-bold text-xl">{post.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-2 mb-4 text-subtextColor md:space-y-0 space-y-2">
              <time className="text-sm">{post.datePublished}</time>
              {post.tags.length > 0 && (
                <>
                  <div className="hidden md:block border-l-2 border-subtextColor h-4" />
                  <div className="flex flex-row items-center space-x-2">
                    <FaTag />
                    {post.tags.map((tag: any, index: number) => {
                      return (
                        <span className="text-sm" key={index}>
                          <Link
                            href={`/tags/${tag.slug}`}
                            className="break-words hover:underline decoration-highlightColor leading-relaxed"
                          >
                            {tag.name}
                          </Link>
                          {index !== post.tags.length - 1 && <>,</>}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}
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
                      <span className="text-subtextColor break-normal text-xs justify-center text-center">
                        {description}
                      </span>
                    </span>
                  );
                },
              },
              embed: {
                Equation: ({ eqn }) => {
                  return (
                    <AutoLaTeX
                      options={options}
                      className="flex justify-center text-base"
                    >
                      {eqn}
                    </AutoLaTeX>
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
                <ul className="list-disc text-sm ml-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal text-sm ml-4">{children}</ol>
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
        <Footer className="fixed md:relative bottom-0 left-0 w-full bg-white border-t-[0.5px] border-solid border-black md:border-none" />
      </div>
    </div>
  );
};

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!) {
        posts(where: { slug: $slug }) {
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

  const datePublished = post.datePublished;

  const nextPost = await client.query({
    query: gql`
      query Post($date: Date!) {
        posts(
          where: { datePublished_gt: $date }
          first: 1
          orderBy: datePublished_ASC
        ) {
          slug
        }
      }
    `,
    variables: {
      date: datePublished,
    },
  });

  const nextPostData = nextPost.data.posts[0]; // Retrieve the previous post data
  const nextPostSlug = nextPostData ? nextPostData.slug : null; // Extract the slug if available

  const prevPost = await client.query({
    query: gql`
      query Post($date: Date!) {
        posts(
          where: { datePublished_lt: $date }
          first: 1
          orderBy: datePublished_DESC
        ) {
          slug
        }
      }
    `,
    variables: {
      date: datePublished,
    },
  });

  const prevPostData = prevPost.data.posts[0]; // Retrieve the next post data
  const prevPostSlug = prevPostData ? prevPostData.slug : null; // Extract the slug if available

  return { props: { post, nextPostSlug, prevPostSlug }, revalidate: 10 };
}

export default Post;
