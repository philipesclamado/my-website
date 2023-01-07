import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { FaTag } from "react-icons/fa";
import { Footer } from "../../src/components/organisms";
import { RichText } from "@graphcms/rich-text-react-renderer";

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
                image: ({ url, altText, height, width }) => (
                  <span className="flex justify-center">
                    <img
                      src={url}
                      alt={altText}
                      height={height}
                      width={width}
                    />
                  </span>
                ),
              },
              embed: {
                Label: ({ description }) => {
                  return (
                    <span className="flex justify-center text-center text-subtextColor break-normal">
                      {description}
                    </span>
                  );
                },
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
              a: ({ children, href, openInNewTab }) => (
                <a
                  href={href}
                  target={openInNewTab ? "_blank" : "_self"}
                  style={{ color: "green" }}
                  rel="noreferrer"
                  className="underline break-all"
                >
                  {children}
                </a>
              ),

              bold: ({ children }) => (
                <strong className="font-bold text-base">{children}</strong>
              ),
              code_block: ({ children }) => {
                return (
                  <pre className="bg-[#f1f1f1] rounded-lg border p-4 break-all overflow-auto">
                    <code>{children}</code>
                  </pre>
                );
              },
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    paddingLeft: "16px",
                    borderLeft: "4px solid blue",
                    fontSize: "26px",
                  }}
                >
                  {children}
                </blockquote>
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
              }
              ... on Label {
                description
                id
              }
              ... on Equation {
                eqn
                id
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
