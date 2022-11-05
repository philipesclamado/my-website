import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  CachedThoughts,
  CompanyName,
  Articles,
  Experiences,
} from "../src/constants";

const Home: NextPage = () => {
  return (
    <div className="py-16">
      <Head>
        <title>{CompanyName}</title>
        <meta
          name="description"
          content="Philip Esclamado's home on the internet"
        />
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-row relative mb-8" id="header">
        <Image
          className="absolute rounded-full"
          height={60}
          width={60}
          src="/images/mugshot-mono.jpg"
          id="logo"
          alt={""}
        />
        <Image
          className="absolute rounded-full opacity-0 hover:opacity-100"
          height={60}
          width={60}
          src="/images/mugshot.jpg"
          id="logo"
          alt={""}
        />
        <h1 className="mt-3 ml-20 text-xl font-semibold sm:text-2xl">
          {CompanyName}
        </h1>
      </header>

      <main>
        <section id="about">
          <p className="mt-4">Some cached thoughts:</p>
          {CachedThoughts.map((thoughts, i) => {
            return <p key={i}>{thoughts}</p>;
          })}
          <p className="flex flex-row my-4">
            Find me on&nbsp;
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/philipesclamado"
            >
              <svg
                className="h-5 w-5 fill-current hover:text-highlightColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Link>
            ,&nbsp;
            <Link
              target="_blank"
              rel="noreferrer"
              href="mailto:philipesclamado@uvic.ca"
            >
              <svg
                className="h-5 w-5 fill-current hover:text-highlightColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </Link>
            &nbsp;.
          </p>
        </section>
        <section id="writing">
          <span>
            <h1 className="text-xl font-semibold mt-12 mb-4">Papers</h1>
          </span>
          {Articles.map((article, i) => {
            return (
              <div className="flex flex-row" key={i}>
                <p key={article.date}>{article.date}:</p>
                &nbsp;
                <Link
                  href={article.link}
                  target="blank"
                  rel="noreferrer"
                  type="application/pdf"
                >
                  <p
                    className="break-words underline hover:decoration-highlightColor"
                    key={article.title}
                  >
                    {article.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </section>
        <section id="projects">
          <span>
            <h1 className="text-xl font-semibold mt-12 mb-4">Projects</h1>
          </span>
          {Experiences.map((experience, i) => {
            return (
              <div className="flex flex-row" key={i}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={experience.link}
                  key={experience.link}
                >
                  <p
                    className="underline hover:decoration-highlightColor font-bold"
                    key={experience.title}
                  >
                    {experience.title}:
                  </p>
                </Link>
                &nbsp;
                <p key={experience.description}>{experience.description}</p>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="flex justify-between text-xs mt-14">
        <div>Copyright &copy; 2022 Philip Esclamado</div>
      </footer>
    </div>
  );
};
export default Home;
