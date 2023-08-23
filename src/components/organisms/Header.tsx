import Link from "next/link";
import { Brand } from "../../constants";
import { NavBar } from "../molecules";
import { Logo } from "../atom";

export const Header = () => {
  return (
    <header className="flex flex-row relative mb-8" id="header">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="flex md:flex-row ml-20 mt-1">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold sm:text-2xl">{Brand}</h1>
          <NavBar
            navStyle="text-sm space-x-5 md:space-x-4"
            borderStyle="border-dashed border-highlightColor"
            hoverStyle="hover:underline decoration-highlightColor"
          />
        </div>
      </div>
    </header>
  );
};
