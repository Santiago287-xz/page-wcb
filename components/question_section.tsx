import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  UserIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";

export default function Pregutas() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const list = [
    {
      icono: <UserIcon className="w-[1.8rem] h-[2rem] text-indigo-400	" />,
      title: "Santi es puto",
      subtitle: "Nose que vamos a poner aca",
      colortext: "aca menos",
      style:"text-primary",
      bio: "y aca vamos a chamuyar.",
    },
    {
      icono: <SpeakerWaveIcon className="w-[1.8rem] h-[2rem] text-cyan-400	" />,
      title: "Sistema de diseño",
      subtitle: "Responsive design",
      colortext: "desig",
      style:"text-primary",
      bio: "Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.",
    },
  ];

  return (
    <section className="w-full">
      <div>
        <Accordion
          showDivider={false}
          className="p-2 flex flex-col gap-1 max-w-[50%] m-auto pb-4 border border-gray-800 rounded-md"
          itemClasses={itemClasses}
        >
          {list.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label="Connected devices"
              className="duration-500"
              startContent={item.icono}
              subtitle={
                <p className="flex">
                  {item.subtitle}{" "}
                  <span className={"ml-1 " + item.style} > {item.colortext}</span>
                </p>
              }
              title={item.title}
            >
              {item.bio}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
