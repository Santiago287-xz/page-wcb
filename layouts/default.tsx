import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Footer from "@/components/footer";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });
import { ThemeProvider } from "@material-tailwind/react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className={poppins.className}>
        <div className="relative flex flex-col overflow-x-hidden">
          <Head />
          <Navbar />
          <main className="mx-auto flex-grow w-full " id="products">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
