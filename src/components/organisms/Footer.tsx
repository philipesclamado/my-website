import React from "react";
import { NavBar } from "../molecules";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-xs mt-14">
      <div>Copyright &copy; 2022 Philip Esclamado</div>
      <NavBar
        navStyle="ml-4 underline space-x-6"
        borderStyle="border-[0.5px] border-solid border-black"
        hoverStyle="hover:text-subtextColor hover:decoration-black"
      />
    </footer>
  );
};
