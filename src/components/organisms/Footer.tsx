import React from "react";
import { NavBar } from "../molecules";

export const Footer = () => {
  return (
    <footer className="flex justify-between text-xs mt-14">
      <div>Copyright &copy; 2022 Philip Esclamado</div>
      <NavBar className="ml-4 underline space-x-7" />
    </footer>
  );
};
