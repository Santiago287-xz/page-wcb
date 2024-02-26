import React from "react";
import { Divider } from "@nextui-org/react";

export default function ServicesSection() {
  return (
    <main className="py-16 bg-no-repeat bg-cover bg-center bg-zinc-900 flex justify-center items-center" id="services">
      <section className="flex flex-wrap justify-center gap-4 w-11/12">
      <div>
          <h1 className="text-5xl text-white text-center p-3 pt-8 font-light">Explore Beautiful Templates</h1>
          <h4 className="text-md text-white/80 text-center pb-4 font-light">Choose one of styles or cutomize easily your site following your ideas.</h4>
          <Divider className="bg-white/80" />
        </div></section>
    </main>
  );
}
