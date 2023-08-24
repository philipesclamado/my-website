import React from "react";
import { NavBar } from "../molecules";
import { Brand } from "../../constants";
import classNames from "classnames";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={classNames(
        className,
        "flex",
        "flex-col",
        "md:flex-row",
        "justify-between",
        "items-center",
        "text-xs",
        "space-y-2",
        "p-4",
        "md:p-2",
        "md:space-y-0"
      )}
    >
      <div>
        Copyright &copy; {currentYear} {Brand}
      </div>
      <NavBar
        navStyle="ml-4 underline space-x-6"
        borderStyle="border-[0.5px] border-solid border-black"
        hoverStyle="hover:text-subtextColor hover:decoration-black"
      />
    </footer>
  );
};
