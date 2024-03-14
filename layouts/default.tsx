import { Navbar } from "@/components/navbar";
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
      <div className="relative flex flex-col overflow-x-hidden">
        <Head />
        <Navbar />
        <main className="container mx-auto flex-grow w-full " id="products">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
