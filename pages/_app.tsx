import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono, outfit } from "@/config/fonts";
import type { AppProps } from "next/app";
import Particles from "@/components/particles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
        <Particles className="h-full w-full absolute z-10"/>
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  outfit: outfit.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
