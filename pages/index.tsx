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
        <link
          rel="canonical"
          href="https://philipesclamado.ca"
          key="canonical"
        />
        <meta charSet="UTF-8"></meta>
        <meta name="description" content="Home for thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Philip Esclamado" />
        <meta property="og:title" content="Philip Esclamado" />
        <meta property="og:url" content="https://philipesclamado.ca" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <HeroBanner />
        <main>
          <section id="posts">
            <h1 className="text-xl font-semibold mt-12 mb-4">Blog</h1>
            {posts.map((post: any, i: any) => {
              return (
                <div
                  className="flex flex-col md:flex-row p-2 text-base md:text-sm"
                  key={i}
                >
                  <p key={post.datePublished} className="text-subtextColor">
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
              );
            })}
          </section>
          <section id="projects">
            <h1 className="text-xl font-semibold mt-12 mb-4">Projects</h1>
            {Projects.map((project, i) => {
              return (
                <ul className="flex flex-row p-2 text-base md:text-sm" key={i}>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      key={project.link}
                      className="underline hover:decoration-highlightColor font-bold"
                    >
                      {project.title}
                    </Link>
                    :&nbsp;{project.description}
                  </li>
                </ul>
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
        posts(orderBy: datePublished_DESC) {
          datePublished
          title
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

export default Home;
