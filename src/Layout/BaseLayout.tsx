import React, { PropsWithChildren } from "react";
import { Footer, Header } from "../components/organisms";

interface BaseLayoutProps {}

export const BaseLayout = ({
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <div className="py-0 md:py-16 w-full md:w-[48rem] mx-auto px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
