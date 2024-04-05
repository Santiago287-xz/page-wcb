import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import CategoryTitle from "./title";

import {
  UserIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export default function SkillsSection() {
  const list = [
    {
      icono: (
        <DevicePhoneMobileIcon className="w-[2.8rem] h-[3rem] text-indigo-400	" />
      ),
      title: "Responsive design",
      style:
        "hover:shadow-[0_3px_100px_0px_rgba(129,140,248,0.45)] hover:bg-[rgb(129,140,248)]",
      bio: "Analizamos cuáles son tus objetivos, el target al cual nos dirigimos, y estudiamos a la competencia. A partir del estudio te presentamos un proyecto web y una estrategia de marketing digital ganadoras.",
    },
    {
      icono: (
        <ComputerDesktopIcon className="w-[2.8rem] h-[3rem] text-cyan-400	" />
      ),
      title: "Sistema de diseño",
      style:
        "hover:shadow-[0_3px_80px_-15px_rgba(21,115,255,0.45)] hover:bg-[rgb(21,115,255)]",
      bio: "Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.",
    },
    {
      icono: <UserIcon className="w-[2.8rem] h-[3rem] text-lime-400	" />,
      title: "Cooworking",
      style:
        "hover:shadow-[0_3px_80px_7px_rgba(163,230,53,0.2)] hover:bg-[rgba(163,230,53,1)]",
      bio: "Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.",
    },
    {
      icono: (
        <SpeakerWaveIcon className="w-[2.8rem] h-[3rem] text-yellow-400	" />
      ),
      title: "Comunicación",
      style:
        "hover:shadow-[0_3px_80px_7px_rgba(250,204,21,0.45)] hover:bg-[rgb(250,204,21)]",
      bio: "Puedo mantener comunicación  con el equipo de desarrollo, atento a cualquier inquietud que se presente con el fin de llevar el proyecto de manera correcta.",
    },
    {
      icono: <ListBulletIcon className="w-[2.8rem] h-[3rem] text-red-400" />,
      style:
        "hover:shadow-[0_3px_80px_7px_rgba(238,29,54,0.5)] hover:bg-[rgb(238,29,54)]",
      title: "Iteración",
      bio: "Soy capaz de iterar recibiendo e interpretando el feedback que me sea proporcionado con el fin de mejorar la calidad del producto que esté diseñando.",
    },
    {
      icono: (
        <CodeBracketIcon className="w-[2.8rem] h-[3rem] text-orange-400" />
      ),
      title: "React y Tailwind",
      style:
        "hover:shadow-[0_3px_80px_7px_rgba(237,107,0,0.45)] hover:bg-[rgb(237,107,0)]",
      bio: "Tengo conocimientos basicos y bien fundamentados de html y css, lo que me permite tener un panorama mas claro a la hora de tomar mis decisiones de diseño para los desarrolladores.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#09090b] dark:text-white text-gray-900">
      <div className="px-4 mx-auto py-16 max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold lg:text-5xl sm:text-5xl">Skills</h2>
            <p className="mt-4 text-lg leading-relaxed">Estas son algunas de nuestras habilidades que hacen que conformen el equipo.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-7">
          {list.map((item, index) => (
            <Card
              key={index}
              className={
                "mt-6 w-[22.1rem] h-auto bg-transparent rounded-md border border-gray-800 min-w-[30%] transition-[color,_background,_box-shadow_!important] hover:text-black change-color-icon " +
                item.style
              }
            >
              <CardBody className="overflow-visible p-4 relative z-10">
                {item.icono}
                <div className="flex items-center mb-2">
                  <b className="text-start mr-2 text-2xl mt-4 tracking-wide font-medium opacity-90">
                    {item.title}
                  </b>
                </div>
                <h4 className=" opacity-60 my-3 text-md">{item.bio}</h4>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
