// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
import "./global.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Footer from "./components/footer";

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Next.js",
    template: "%s | Next.js",
  },
  description: "Home on the internet.",
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "border-t-2 border-black text-black bg-white dark:text-white dark:bg-black",
        ibm_plex_mono.className,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
