import React from "react";
import CategoryTitle from "./title";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function App() {
  return (
    <section>
      <div
        className="py-16 bg-no-repeat bg-cover bg-center bg-zinc-900 flex justify-center items-center"
        id="services"
      >
        <section className="flex flex-wrap justify-center gap-4 w-11/12">
          <CategoryTitle
            text="FAQ´S"
            description="Preguntas frecuentes sobre servicios, planes, etc."
          />
        </section>
      </div>
      <div className="w-[60rem] m-auto">
        <Accordion variant="shadow">
          {siteConfig.question_section.map((items, index) => (
            <AccordionItem key={index} title={items.title}>
              {items.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
