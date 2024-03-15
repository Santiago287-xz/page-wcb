import CategoryTitle from "./title";

import {
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";

import {
  UserIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export default function Skills() {
  const list = [
    {
      icono: (
        <DevicePhoneMobileIcon className="w-[2.8rem] h-[3rem] text-indigo-400	" />
      ),
      title: "Responsive design",
      bio: "Analizamos cuáles son tus objetivos, el target al cual nos dirigimos, y estudiamos a la competencia. A partir del estudio te presentamos un proyecto web y una estrategia de marketing digital ganadoras.",
    },
    {
      icono: (
        <ComputerDesktopIcon className="w-[2.8rem] h-[3rem] text-cyan-400	" />
      ),
      title: "Sistema de diseño",
      bio: "Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.",
    },
    {
      icono: <UserIcon className="w-[2.8rem] h-[3rem] text-lime-400	" />,
      title: "Cooworking",
      bio: "Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.",
    },
    {
      icono: (
        <SpeakerWaveIcon className="w-[2.8rem] h-[3rem] text-yellow-400	" />
      ),
      title: "Comunicación",
      bio: "Puedo mantener comunicación  con el equipo de desarrollo, atento a cualquier inquietud que se presente con el fin de llevar el proyecto de manera correcta.",
    },
    {
      icono: <ListBulletIcon className="w-[2.8rem] h-[3rem] text-red-400" />,
      title: "Iteración",
      bio: "Soy capaz de iterar recibiendo e interpretando el feedback que me sea proporcionado con el fin de mejorar la calidad del producto que esté diseñando.",
    },
    {
      icono: (
        <CodeBracketIcon className="w-[2.8rem] h-[3rem] text-orange-400" />
      ),
      title: "React y Tailwind",
      bio: "Tengo conocimientos basicos y bien fundamentados de html y css, lo que me permite tener un panorama mas claro a la hora de tomar mis decisiones de diseño para los desarrolladores.",
    },
  ];

  return (
    <section className="bg-color-[#171718] container m-auto">
      <div
        className="py-16 bg-no-repeat bg-cover bg-center bg-zinc-900 flex justify-center items-center"
        id="services"
      >
        <section className="flex flex-wrap justify-center gap-4 w-11/12">
          <CategoryTitle
            text="Servicios"
            description="Estos son algunas de las cualidades que se intengran en los proyectos."
          />
        </section>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-7">
        {list.map((item, index) => (
          <Card
            key={index}
            className="mt-6 w-[22.1rem] h-[19rem] bg-[#141414] rounded-md border border-gray-800 "
          >
            <CardBody>
              {item.icono}
              <Typography
                variant="h3"
                color="white"
                className="tracking-wide mt-4 mb-4 font-medium"
              >
                {item.title}
              </Typography>
              <Typography className="w-[306px] h-auto font-light text-gray-500">
                {item.bio}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
