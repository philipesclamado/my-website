import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row relative mb-8">
      <Link href="/">
        <div>
          <Image
            className="opcaity-100 absolute rounded-full"
            height={60}
            width={60}
            src="/images/id-mono.jpg"
            alt={""}
          />
          <Image
            className="absolute rounded-full opacity-0 hover:opacity-100 hover:cursor-pointer"
            height={60}
            width={60}
            src="/images/id.jpg"
            alt={""}
          />
        </div>
      </Link>
      <div className="flex md:flex-row ml-20 mt-1">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold sm:text-2xl">{`Philip Esclamado`}</h1>
          <ul className="flex flex-row text-sm space-x-5 md:space-x-4">
            <li>
              <Link
                className="hover:underline decoration-highlight"
                rel="noopener noreferrer"
                href="/"
              >
                Home
              </Link>
            </li>
            <div className="border border-dashed border-highlight" />
            <li>
              <Link
                className="hover:underline decoration-highlight"
                rel="noopener noreferrer"
                href="/elements"
              >
                Elements
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
