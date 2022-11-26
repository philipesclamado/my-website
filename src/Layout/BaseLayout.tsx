import React, { PropsWithChildren } from "react";
import { Footer, Header } from "../components/organisms";

interface BaseLayoutProps {}

export const BaseLayout = ({
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <div>
      <div className="border border-black" />
      <div className="w-full md:w-[48rem] mx-auto px-4 py-16">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
