import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Mono } from "@next/font/google";

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibm_plex_mono.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
