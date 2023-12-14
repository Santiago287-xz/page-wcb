import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Title from "@/components/title";
import Footer from "@/components/footer";

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function DefaultLayout({  
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <div className={outfit.className}>
      <div className="relative flex flex-col">
        <Head />
        <Navbar />
        <div>          
          <Title />
          <main className="container mx-auto flex-grow" id="products">
            {children}
          </main>
        </div>
        <Footer showAllInputs={false}/>        
      </div>
    </div>
  );
}
