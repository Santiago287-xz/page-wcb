import React from "react";
import CategoryTitle from "./title";

export default function ServicesSection() {
  return (
    <main className="py-16 bg-no-repeat bg-cover bg-center bg-zinc-900 flex justify-center items-center" id="services">
      <section className="flex flex-wrap justify-center gap-4 w-11/12">
        <CategoryTitle text="Services" description="Choose one of styles or cutomize easily your site following your ideas."/>        
      </section>
    </main>
  );
}
