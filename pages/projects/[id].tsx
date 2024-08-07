import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Image, Card, CardBody } from "@nextui-org/react";
import type { Project } from "@/config/site";
import ContactArticle from "@/components/contact-article";
import { Link, Button } from "@nextui-org/react";

// Argen reps
"text-[#10984d]";
"dark:from-[#ccdff6] dark:to-[#ccdbf6]";
"bg-[radial-gradient(#121ca61f_0%,#0f2a8500_60%)]";
"bg-[#0c0b3a29] hover:bg-[#16155d29]";

"text-[#0a5dbc]";
"text-[#cdbfea]";
"bg-[radial-gradient(#1d56bb1c_0%,#0f2a8500_70%)]";
"bg-[#0c0b3a29] hover:bg-[#16155d29]";
// Argen reps

// Magic by Zeko
"text-[#0070f0]";
"dark:from-[#CCD6F6] dark:to-[#d9ccf6]"
"bg-[radial-gradient(#7a21cd17_0%,#320F8500_60%)]";
"bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]";

"text-[#6d45c4]";
"text-[#cdbfea]";
"bg-[radial-gradient(#3a12c11c_0%,#320F8500_70%)]";
"bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]";
// Magic by Zeko

// Punto de venta
"text-[#9857D3]";
"dark:from-[#CCD6F6] dark:to-[#d9ccf6]"
"bg-[radial-gradient(#0e4b0217_0%,#24932600_60%)]";
"bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]";

"bg-[radial-gradient(#1883401c_0%,#05210c00_70%)]";
// Punto de venta

export async function getStaticPaths() {
  const paths = siteConfig.projects.content.map((item) => ({
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
import Head from 'next/head'
export default function Project({ project }: { project: Project }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{project.name}</title>
      </Head>
      <section className="min-h-[50rem] m-auto pt-36 relative overflow-x-hidden">
        <div
          className={
            "absolute h-[50rem] w-[50rem] rounded-[50%] right-[-20rem] top-[0rem] " +
            project.color.first.gradient
          }
        ></div>
        <div
          className={
            "absolute h-[50rem] w-[50rem] rounded-[50%] left-[-25rem] bottom-[0rem] " +
            project.color.second.gradient
          }
        ></div>
        <article>
          <div className="relative w-[70%] m-auto">
            <div className="flex flex-col content-start">
              <h4
                className={
                  "text-center font-semibold text-sm w-fit " +
                  project.color.first.h4
                }
              >
                {project.text.first.subtitle}
              </h4>
              <h1
                className="bg-clip-text text-transparent bg-gradient-to-r leading-[3rem] text-start font-semibold text-4xl mt-1 w-fit from-gray-800 to-black dark:from-[#ccdff6] dark:to-[#ccdbf6]">
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
            <div
              className={
                "hidden xl:block z-[5] absolute w-[32rem] right-0 top-0 rounded-xl duration-300 " +
                project.color.second.image
              }
            >
              <Image
                className="translate-x-6 translate-y-6 hover:translate-y-5 hover:translate-x-5"
                alt={project.image.first_image.alt}
                shadow="md"
                src={project.image.first_image.link}
              />
            </div>
          </div>
        </article>
        {project.text.second.title != "" ? <article className="mt-36">
          <div className="relative w-[70%] m-auto">
            <div
              className={
                "z-0 absolute w-[32rem] left-0 top-0 rounded-xl duration-300 " +
                project.color.second.image
              }
            >
              <Image
                className="hidden xl:block translate-x-[-1.5rem] translate-y-6 hover:translate-y-5 hover:translate-x-[-1.25rem]"
                alt={project.image.second_image.alt}
                shadow="md"
                src={project.image.second_image.link}
              />
            </div>
            <div className="flex flex-col content-end items-end flex-wrap">
              <h4
                className={
                  "text-end font-semibold text-sm w-fit " +
                  project.color.second.h4
                }
              >
                {project.text.second.subtitle}
              </h4>
              <h1
                className="text-end font-semibold text-4xl mt-1 w-fit"
              >
                {project.text.second.title}
              </h1>
              <Card
                isBlurred
                className="w-auto border-none bg-background/60 dark:bg-default-100/50 mt-8 xl:w-[40rem] xl:p-4 xl:pr-16 z-10"
                shadow="md"
              >
                <CardBody>{project.text.second.paragraph}</CardBody>
              </Card>
              {
                project.link != "" ?
                  <Button
                    href={"https://" + project.link}
                    as={Link}
                    className="bg-background/60 dark:bg-default-100/50 mt-4"
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                  >
                    {project.link}
                  </Button> : ''
              }
            </div>
          </div>
        </article> : <></>}
        <ContactArticle />
      </section>
    </DefaultLayout>
  );
}
