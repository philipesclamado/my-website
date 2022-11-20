import React, { PropsWithChildren } from "react";
import { Footer, Header } from "../components/organisms";

interface BaseLayoutProps {}

export const BaseLayout = ({
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <div className="py-8 w-96 md:py-16 md:w-max">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
