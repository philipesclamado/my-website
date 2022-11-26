import Link from "next/link";
import { CompanyName } from "../../constants";
import { NavBar } from "../molecules";
import { Logo } from "../atom";

export const Header = () => {
  return (
    <header className="flex flex-row relative mb-8" id="header">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="ml-20 mt-1">
        <h1 className="text-xl font-semibold sm:text-2xl">{CompanyName}</h1>
        <NavBar
          navStyle="text-sm space-x-5 md:space-x-4"
          borderStyle="border-dashed border-highlightColor"
        />
      </div>
    </header>
  );
};
