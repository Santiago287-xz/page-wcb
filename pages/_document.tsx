import { siteConfig } from "@/config/site";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={siteConfig.lenguage} className="scroll-smooth">
      <Head />
      <body className="min-h-screen bg-zinc-200 dark:bg-zinc-950 antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
