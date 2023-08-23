import React from "react";
import { NavBar } from "../molecules";
import { Brand } from "../../constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-xs mt-14 space-y-2 md:space-y-0">
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
