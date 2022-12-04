import Link from "next/link";
import { CompanyName } from "../../constants";
import { MenuBar, NavBar } from "../molecules";
import { Logo } from "../atom";

export const Header = () => {
  return (
    <header className="flex flex-row relative mb-8" id="header">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="ml-20 mt-1 flex flex-row md:flex-col">
        <h1 className="text-xl font-semibold sm:text-2xl mt-3 md:mt-0">
          {CompanyName}
        </h1>
        <NavBar
          navStyle="text-sm space-x-5 md:space-x-4"
          borderStyle="border-dashed border-highlightColor"
          hoverStyle="hover:underline decoration-highlightColor"
          className="hidden md:block"
        />
        <MenuBar className="md:hidden ml-4 mt-3 md:mt-0" />
      </div>
    </header>
  );
};
