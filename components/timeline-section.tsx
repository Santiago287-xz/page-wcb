import React from "react";
import { Button } from "@nextui-org/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function TimelineSection() {
  const list = [
    {
      icono: <span className="text-indigo-400">01</span>,
      title: "Consulta inicial",
      bio: "Comencemos con una discusión detallada sobre su proyecto. Exploraremos su visión, objetivos y requisitos específicos para garantizar una comprensión integral.",
    },
    {
      icono: <span className="text-yellow-400">02</span>,
      title: "Propuesta a medida",
      bio: "Basándome en nuestra conversación, elaboraré una propuesta detallada que describa el alcance del proyecto, el cronograma estimado y un desglose transparente de los costos.",
    },
    {
      icono: <span className="text-cyan-400">03</span>,
      title: "Vista previa del diseño",
      bio: "Antes de sumergirse en el desarrollo a gran escala, podrá vislumbrar la dirección del diseño. Esto permite recibir comentarios tempranos y garantiza que estemos alineados creativamente.",
    },
    {
      icono: <span className="text-lime-400">04</span>,
      title: "Toques finales y entrega",
      bio: "Una vez que el proyecto esté a punto de finalizar, colaboraremos en los ajustes finales. Su satisfacción es primordial y lo perfeccionaremos hasta que todo cumpla con sus expectativas.",
    },
  ];

  return (
    <section className="w-full px-8 pt-12 md:px-32 md:pt-32 gap-16 flex justify-center flex-col items-center lg:items-start lg:flex-row bg-white dark:bg-transparent">
      <article className="container h-[20rem] max-w-[38rem] flex flex-col justify-between">
        <h2 className="text-5xl md:text-6xl">
          The digital
          marketing agency.
        </h2>
        <div className="max-w-[30rem] flex flex-col items-end lg:block">
          <p>Out integrated digital frameworks are meticulously <span className="text-foreground-700">designed to streamline sales funnels.</span></p>
          <Button endContent={<ArrowUpRightIcon className="h-full p-1 text-foreground" />} className="gap-0 my-4 rounded-sm">Get in touch</Button>
        </div>
      </article>
      <article className="relative w-[90%] max-w-[40rem] p-0 md:px-6 flex flex-col justify-center">
        <ul className="flex flex-col gap-4">
          {list.map((item, index) => (
            <li className="flex items-start lg:items-center mb-4 flex-col lg:flex-row" key={index}>
              <div className="w-max flex items-center gap-4">
                <div className="w-fit p-4 border-1 border-gray-800 rounded-[0.5rem] justify-center flex bg-transparent text-[2rem] h-auto min-w-[5rem]">
                  {item.icono}
                </div>
                <h4 className="text-foreground text-lg font-bold block lg:hidden">
                  {item.title}
                </h4>
              </div>
              <div className="ml-4 mt-4 lg:mt-0">
                <h4 className="text-foreground text-lg font-bold hidden lg:block">
                  {item.title}
                </h4>
                <p className="font-normal text-foreground/80">{item.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
