import React from "react";
import { Button, Link } from "@nextui-org/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function TimelineSection() {
  const list = [
    {
      icono: <span className="text-indigo-400">01</span>,
      title: <span className="text-indigo-400">Inicio del Proyecto</span>,
      bio: "Empezamos con una charla para entender tu proyecto. Hablaremos de tus ideas, lo que necesitas y cómo podemos hacerlo realidad.",
    },
    {
      icono: <span className="text-yellow-400">02</span>,
      title: <span className="text-yellow-400">Propuesta Personalizada</span>,
      bio: "Basándome en lo que discutimos, te presento una propuesta detallada con lo que haremos, cuánto costará y cuánto tiempo llevará.",
    },
    {
      icono: <span className="text-cyan-400">03</span>,
      title: <span className="text-cyan-400">Diseño Previo</span>,
      bio: "Antes de empezar a trabajar en grande, te mostraré cómo lucirá el diseño para que puedas dar tu opinión y asegurarte de que vamos por buen camino.",
    },
    {
      icono: <span className="text-lime-400">04</span>,
      title: <span className="text-lime-400">Ajustes y Entrega</span>,
      bio: "Trabajaremos juntos para perfeccionar los detalles finales. Me aseguraré de que estés feliz con el resultado antes de entregarte el proyecto terminado.",
    },    
  ];

  return (
    <section className="w-full px-8 py-12 md:px-32 md:pt-32 gap-16 flex justify-center flex-col items-center lg:items-start lg:flex-row bg-white dark:bg-[#09090b] dark:text-white" id="phases">
      <article className="container h-[20rem] max-w-[38rem] flex flex-col justify-between">
        <h2 className="text-5xl md:text-6xl">
          Fases que
          tiene un proyecto.
        </h2>
        <div className="max-w-[30rem] flex flex-col items-end lg:block">
          <p>Estas son las principales<span className="text-indigo-400"> tareas </span> <span className="text-foreground-700">que relizamos para el desarrollo de tu proyecto.</span></p>
          <Button href="/#contact" as={Link} endContent={<ArrowUpRightIcon className="h-full p-1 text-foreground" />} className="gap-0 my-4 rounded-sm">Contactanos</Button>
        </div>
      </article>
      <article className="relative w-[90%] max-w-[40rem] p-0 md:px-6 flex flex-col justify-center">
        <ul className="flex flex-col gap-4">
          {list.map((item, index) => (
            <li className="flex items-start lg:items-center mb-4 flex-col lg:flex-row" key={index}>
              <div className="flex items-center gap-4 fit-content">
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
