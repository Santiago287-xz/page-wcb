import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Title from "@/components/title-section";
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
      <div className="relative flex flex-col">
        <Head />
        <Navbar />
        <div>
          <Title />
          <main className="container mx-auto flex-grow" id="products">
            {children}
          </main>
        </div>
        <Footer showAllInputs={false} />
      </div>
    </div>
  );
}
