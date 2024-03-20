import Navbar from "@/components/navbar";
import { Head } from "./head";
import Footer from "@/components/footer";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={poppins.className}>
      <div className="text-xl flex justify-center items-center h-screen sm:hidden">Coming soon!!</div>
      <div className="relative  flex-col overflow-x-hidden hidden sm:flex">
        <Head />
        <Navbar />
        <main className="mx-auto flex-grow w-full " id="products">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
