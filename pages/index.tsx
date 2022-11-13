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
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Philip Esclamado</title>
        <meta name="description" content="Home for thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-8 w-96 md:py-16 md:w-max">
        <header className="flex flex-row relative mb-8" id="header">
          <Link href="/">
            <Image
              className="opcaity-100 absolute rounded-full"
              height={60}
              width={60}
              src="/images/mugshot-mono.jpg"
              id="logo"
              alt={""}
            />
            <Image
              className="absolute rounded-full opacity-0 hover:opacity-100 hover:cursor-pointer"
              height={60}
              width={60}
              src="/images/mugshot.jpg"
              id="logo"
              alt={""}
            />
          </Link>
          <h1 className="mt-3 ml-20 text-xl font-semibold sm:text-2xl">
            {CompanyName}
          </h1>
        </header>

        <main>
          <section id="about">
            <p className="mt-4 text-base md:text-sm">Some cached thoughts:</p>
            {CachedThoughts.map((thoughts, i) => {
              return (
                <p className="text-base md:text-sm" key={i}>
                  {thoughts}
                </p>
              );
            })}
            <p className="flex flex-row my-4 text-base md:text-sm">
              Find me on&nbsp;
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/philipesclamado"
              >
                <FaGithub className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
              </Link>
              ,&nbsp;
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:philipesclamado@uvic.ca"
              >
                <FaEnvelope className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
              </Link>
              &nbsp;.
            </p>
          </section>
          <section id="writing">
            <h1 className="text-xl font-semibold mt-12 mb-4">Papers</h1>
            {Articles.map((article, i) => {
              return (
                <div className="flex flex-row p-2 text-base md:text-sm" key={i}>
                  <p key={article.date}>{article.date}:</p>
                  &nbsp;
                  <Link
                    href={article.link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-72 md:w-max">
                      <p
                        className="break-words underline hover:decoration-highlightColor leading-relaxed"
                        key={article.title}
                      >
                        {article.title}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
          <section id="projects">
            <h1 className="text-xl font-semibold mt-12 mb-4">Projects</h1>
            {Experiences.map((experience, i) => {
              return (
                <div className="flex flex-row p-2 text-base md:text-sm" key={i}>
                  <div className="w-44">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
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
                  </div>
                  <div className="w-72 md:w-max">
                    <p
                      className="break-words leading-relaxed"
                      key={experience.description}
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </main>

        <footer className="flex justify-between text-xs mt-14">
          <div>Copyright &copy; 2022 Philip Esclamado</div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
