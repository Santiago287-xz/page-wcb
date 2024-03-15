import React from "react";
import Image from "next/image";
import CategoryTitle from "./title";
import {
  PaintBrushIcon,
  CodeBracketSquareIcon,
  BookOpenIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

export default function TimelineSection() {
  const list = [
    {
      icono: <BookOpenIcon className="w-[2rem] h-[2rem] text-green-400" />,
      title: "Estudio del proyecto",
      bio: "Analizamos cuáles son tus objetivos, el target al cual nos dirigimos, y estudiamos a la competencia. A partir del estudio te presentamos un proyecto web y una estrategia de marketing digital ganadoras.",
    },
    {
      icono: <PaintBrushIcon className="w-[2rem] h-[2rem] text-yellow-400" />,
      title: "Diseño web",
      bio: "Nuestros diseñadores web querrán conocer tus gustos y las referencias del sector. Te propondrán un diseño web a medida de las principales páginas de tu futura web, que discutiremos, enmendaremos y aprobaremos.",
    },
    {
      icono: (
        <CodeBracketSquareIcon className="w-[2rem] h-[2rem] text-purple-400" />
      ),
      title: "Programación web",
      bio: "Nuestros programadores web crean el código de la web para que responda al diseño planteado, e incorpore todas las funcionalidades necesarias. Realizamos tests de calidad y seguridad de la página.",
    },
    {
      icono: <ArrowTrendingUpIcon className="w-[2rem] h-[2rem] text-red-400	" />,
      title: "SEO",
      bio: "A partir de un estudio de keywords y una estrategia que habremos acordado, preparamos los fundamentos de la web para que sea rastreada por los buscadores y esté preparada para posicionar.",
    },
  ];

  return (
    <section className="w-2/3 m-auto py-16">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <CategoryTitle
          text="Fases"
          description="Esta serían los pasos que seguimos para hacer tu página web."
        />
        <div className="flex justify-center">
          <div className="mr-56">
            <Image
              src=""
              alt="Image Description"
              className="h-[35rem] w-[35rem] rounded-full mt-[-3.4rem] "
            />
          </div>
          <div className="flex flex-col items-end">
            {list.map((item, index) => (
              <div key={index} className="w-[40rem]">
                <div className="flex items-center mb-4">
                  <div className="p-4 border-1 border-gray-800 rounded-full bg-[#09090b] ">
                    {item.icono}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-300 text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="font-normal text-gray-500">{item.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
