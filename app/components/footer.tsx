import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-xs space-y-2 p-4 md:p-2 md:space-y-0 mb-16">
      <p>
        Copyright &copy; {currentYear} {`Philip Esclamado`}
      </p>
      <ul className="underline font-sm flex flex-row ml-4 space-x-6">
        <li>
          <Link
            className="hover:text-subtext hover:decoration-black"
            rel="noopener noreferrer"
            href="/"
          >
            Home
          </Link>
        </li>
        <div className="border-[0.5px] border-solid border-black dark:border-white" />
        <li>
          <Link
            className="hover:text-subtext hover:decoration-black"
            rel="noopener noreferrer"
            href="/elements"
          >
            Elements
          </Link>
        </li>
        <div className="border-[0.5px] border-solid border-black dark:border-white" />
        <li>
          <Link
            className="hover:text-subtext hover:decoration-black"
            rel="noopener noreferrer"
            href="/"
          >
            Practice
          </Link>
        </li>
      </ul>
    </footer>
  );
}
