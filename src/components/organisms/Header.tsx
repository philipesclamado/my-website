import { useState } from "react";
import Link from "next/link";
import { CompanyName } from "../../constants";
import { NavBar } from "../molecules";
import { Logo } from "../atom";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex flex-row relative mb-8" id="header">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="flex md:flex-row ml-20 mt-1">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold sm:text-2xl mt-3 md:mt-0">
            {CompanyName}
          </h1>
          <NavBar
            navStyle="text-sm space-x-5 md:space-x-4"
            borderStyle="border-dashed border-highlightColor"
            hoverStyle="hover:underline decoration-highlightColor"
            className="hidden md:block"
          />
          <NavBar
            navStyle="flex flex-col space-y-1"
            borderStyle="border-none"
            className={`text-start mt-5 md:hidden ${
              toggle ? "content" : "hidden"
            }`}
          />
        </div>
        <button
          className="absolute right-5 top-4 md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <FiX size={30} className="fill-highlightColor" />
          ) : (
            <FiMenu size={30} className="fill-highlightColor" />
          )}
        </button>
      </div>
    </header>
  );
};
