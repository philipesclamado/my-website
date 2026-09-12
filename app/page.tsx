// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaSnowflake } from "react-icons/fa";
import Header from "./components/header";
import { CachedThoughts } from "./constants";
import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <Header />
      <p className="mb-4 text-base md:text-sm">{`Some cached thoughts:`}</p>
      <ul className="list-disc ml-4 text-base md:text-sm">
        {CachedThoughts.map((thought, index) => (
          <li key={index}>{thought}</li>
        ))}
      </ul>
      <p className="flex flex-row my-4 text-base md:text-sm">
        Find me on&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.protectourwinters.ca/edmonton_chapter"
        >
          <FaSnowflake className="h-5 w-5 fill-current hover:text-highlight hover:cursor-pointer" />
        </Link>
        ,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/philipesclamado"
        >
          <FaGithub className="h-5 w-5 fill-current hover:text-highlight hover:cursor-pointer" />
        </Link>
        ,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/philipesclamado"
        >
          <FaLinkedin className="h-5 w-5 fill-current hover:text-highlight hover:cursor-pointer" />
        </Link>
        ,&nbsp;and,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:philip.esclamado06@gmail.com"
        >
          <FaEnvelope className="h-5 w-5 fill-current hover:text-highlight hover:cursor-pointer" />
        </Link>
        &nbsp;.
      </p>
      <h1 className="text-xl font-semibold mt-12 mb-4">Elements</h1>
      <BlogPosts />
      <h1 className="text-xl font-semibold mt-12 mb-4">Practice</h1>d
    </section>
  );
}
