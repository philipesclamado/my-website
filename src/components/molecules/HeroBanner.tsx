import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaResearchgate,
} from "react-icons/fa";
import { CachedThoughts } from "../../constants";

export const HeroBanner = () => {
  return (
    <div id="about">
      <p className="mt-4 text-base md:text-sm">Some cached thoughts:</p>
      {CachedThoughts.map((thoughts, i) => {
        return (
          <p className="text-base md:text-sm" key={i}>
            {thoughts}
          </p>
        );
      })}
      <p className="flex flex-row my-4 text-base md:text-sm">
        Find me on&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/philipesclamado"
        >
          <FaGithub className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
        </Link>
        ,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/philipesclamado"
        >
          <FaLinkedin className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
        </Link>
        ,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.researchgate.net/profile/Philip-Esclamado"
        >
          <FaResearchgate className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
        </Link>
        ,&nbsp;and,&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:philipesclamado@uvic.ca"
        >
          <FaEnvelope className="h-5 w-5 fill-current hover:text-highlightColor hover:cursor-pointer" />
        </Link>
        &nbsp;.
      </p>
    </div>
  );
};
