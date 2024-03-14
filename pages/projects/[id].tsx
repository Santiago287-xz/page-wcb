import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Image, Card, CardBody } from "@nextui-org/react";
import type { Project } from "@/config/site";

export async function getStaticPaths() {
  let paths = siteConfig.projects.content.map((item) => ({
    params: {
      id: item.id,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const project = siteConfig.projects.content.filter(
    (x) => x.id == params.id
  )[0];
  return { props: { project } };
}

export default function Project({ project }: { project: Project }) {
  return (
    <DefaultLayout>
      <section className="m-auto py-36 relative overflow-x-hidden">
        <div className="absolute h-[50rem] w-[50rem] rounded-[50%] right-[-20rem] top-[0rem] bg-[radial-gradient(#7a21cd17_0%,#320F8500_60%)]"></div>
        <div className="absolute h-[50rem] w-[50rem] rounded-[50%] left-[-25rem] bottom-[0rem] bg-[radial-gradient(#3a12c11c_0%,#320F8500_70%)]"></div>
        <article>
          <div className="relative w-[70%] m-auto">
            <div className="flex flex-col content-start">
              <h4 className="text-[#9857D3] text-center font-semibold text-sm w-fit">
                {project.text.first.subtitle}
              </h4>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#CCD6F6] to-[#d9ccf6] leading-[3rem] text-center font-semibold text-4xl mt-1 w-fit">
                {project.text.first.title}
              </h1>
              <Card
                isBlurred
                className="w-auto p-1 border-none bg-background/60 dark:bg-default-100/50 mt-8 xl:w-[40rem] xl:p-4 xl:pr-16 z-10"
                shadow="md"
              >
                <CardBody>{project.text.first.paragraph}</CardBody>
              </Card>
            </div>
            <div className="hidden xl:block bg-[rgba(43,11,58,0.16)] hover:bg-[#2b0b3a42] z-[5] absolute w-[32rem] right-0 top-0 rounded-xl duration-300">
              <Image
                className="translate-x-6 translate-y-6 hover:translate-y-5 hover:translate-x-5"
                alt={project.image.first_image.alt}
                shadow="md"
                src={project.image.first_image.link}
              />
            </div>
          </div>
        </article>
        <article className="mt-36">
          <div className="relative w-[70%] m-auto">
            <div className="bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42] z-0 absolute w-[32rem] left-0 top-0 rounded-xl duration-300">
              <Image
                className="hidden xl:block translate-x-[-1.5rem] translate-y-6 hover:translate-y-5 hover:translate-x-[-1.25rem]"
                alt={project.image.second_image.alt}
                shadow="md"
                src={project.image.second_image.link}
              />
            </div>
            <div className="flex flex-col content-end items-end flex-wrap">
              <h4 className="text-[#6d45c4] text-end font-semibold text-sm w-fit">
                {project.text.second.subtitle}
              </h4>
              <h1 className="text-[#cdbfea] text-end font-semibold text-4xl mt-1 w-fit">
                {project.text.second.title}
              </h1>
              <Card
                isBlurred
                className="w-auto border-none bg-background/60 dark:bg-default-100/50 mt-8 xl:w-[40rem] xl:p-4 xl:pr-16 z-10"
                shadow="md"
              >
                <CardBody>{project.text.second.paragraph}</CardBody>
              </Card>
            </div>
          </div>
        </article>
        <article className="mt-36 w-2/3 m-auto">
          <h4 className="text-[#b7b7b7] text-end font-normal text-xl w-fit">
            {siteConfig.text.contact.h4}
          </h4>
          <p className="text-[#b1b1b1] text-start font-normal text-md lg:w-2/3 mt-4 mb-2">
            {siteConfig.text.contact.p}
          </p>
          <a
            className="text-[#b1b1b1]"
            href={"mailto:" + siteConfig.contact.gmail}
          >
            {siteConfig.contact.gmail}
          </a>
        </article>
      </section>
    </DefaultLayout>
  );
}
