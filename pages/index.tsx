import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { HeroBanner } from "../src/components/molecules";
import { Projects } from "../src/constants";
import client from "../apolloClient";
import { gql } from "@apollo/client";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Philip Esclamado</title>
        <meta name="description" content="Home for thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <HeroBanner />
        <main>
          <section id="papers">
            <h1 className="text-xl font-semibold mt-12 mb-4">Papers</h1>
            {posts.map((post: any, i: any) => {
              return (
                <div className="flex flex-row p-2 text-base md:text-sm" key={i}>
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
          </section>
          <section id="projects">
            <h1 className="text-xl font-semibold mt-12 mb-4">Projects</h1>
            {Projects.map((project, i) => {
              return (
                <div className="flex flex-row p-2 text-base md:text-sm" key={i}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    key={project.link}
                  >
                    <p
                      className="underline hover:decoration-highlightColor font-bold"
                      key={project.title}
                    >
                      {project.title}:
                    </p>
                  </Link>
                  &nbsp;
                  <p
                    className="text-subText break-words leading-relaxed"
                    key={project.description}
                  >
                    {project.description}
                  </p>
                </div>
              );
            })}
          </section>
        </main>
      </BaseLayout>
    </div>
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

export default Home;
