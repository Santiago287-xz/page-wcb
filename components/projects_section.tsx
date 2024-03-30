import { siteConfig } from "@/config/site";
import { Button, Image, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import SliderImage from "./slider-image";

export default function ProjectSection() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#e4e4e7] dark:bg-[#09090b] dark:text-white">
      <article className="flex justify-center w-full px-12 md:px-16 pt-32">
        <div className="flex flex-col justify-between sm:gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl max-w-[30rem]">{siteConfig.projects.content[0].title}</h2>
            <p className="max-w-[20rem] mt-4 text-foreground-600 hidden lg:block">{siteConfig.projects.content[0].short_description}</p>
            <span className="text-foreground-700 block lg:hidden">{siteConfig.projects.content[0].date}</span>
          </div>
          <div className="flex flex-col py-12">
            <h3 className="text-1xl md:text-3xl text-foreground-900 hidden lg:block">{siteConfig.projects.content[0].name}</h3>
            <span className="text-foreground-700 hidden lg:block">{siteConfig.projects.content[0].date}</span>
            <div className="max-w-[35rem] block lg:hidden">
              <Image
                src={siteConfig.projects.content[0].image.principal_image.link}
                alt={siteConfig.projects.content[0].image.principal_image.alt}
                removeWrapper
                className="rounded-none w-full h-full"
              />
            </div>
            <p className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden">{siteConfig.projects.content[0].short_description}</p>
            <Button
              endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
              className="gap-0 my-4 rounded-sm w-fit"
              as={Link}
              href={"/projects/" + siteConfig.projects.content[0].id}>
              See More
            </Button>
          </div>
        </div>
        <div className="max-w-[35rem] hidden lg:block">
          <Image
            src={siteConfig.projects.content[0].image.principal_image.link}
            alt={siteConfig.projects.content[0].image.principal_image.alt}
            removeWrapper
            className="rounded-none w-full h-full"
          />
        </div>
      </article>

      <article className="flex justify-center w-full px-12 md:px-16 py-16 bg-black">
        <div className="max-w-[35rem] hidden lg:block">
          <Image
            src={siteConfig.projects.content[1].image.principal_image.link}
            alt={siteConfig.projects.content[1].image.principal_image.alt}
            removeWrapper
            className="rounded-none w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-12">
          <div className="flex flex-col items-start lg:items-end gap-12">
            <h2 className="text-5xl md:text-8xl max-w-[30rem] lg:text-right">{siteConfig.projects.content[1].title}</h2>
            <p className="max-w-[20rem] mt-4 text-foreground-600 text-right hidden lg:block">{siteConfig.projects.content[1].short_description}</p>
            <span className="text-foreground-700 block lg:hidden">{siteConfig.projects.content[1].date}</span>
          </div>
          <div className="flex flex-col lg:items-end">
            <h3 className="text-1xl md:text-3xl text-foreground-900 text-right hidden lg:block">{siteConfig.projects.content[1].name}</h3>
            <span className="text-foreground-700 text-right hidden lg:block">{siteConfig.projects.content[1].date}</span>
            <div className="max-w-[35rem] block lg:hidden">
              <Image
                src={siteConfig.projects.content[1].image.principal_image.link}
                alt={siteConfig.projects.content[1].image.principal_image.alt}
                removeWrapper
                className="rounded-none w-full h-full"
              />
            </div>
            <p className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden">{siteConfig.projects.content[1].short_description}</p>
            <Button
              endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
              className="gap-0 my-4 rounded-sm w-fit"
              as={Link}
              href={"/projects/" + siteConfig.projects.content[1].id}>
              See More
            </Button>
          </div>
        </div>
      </article>

      <article className="flex justify-center w-full px-12 md:px-16 py-16">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl max-w-[30rem]">{siteConfig.projects.content[2].title}</h2>
            <p className="max-w-[20rem] mt-4 text-foreground-600 hidden lg:block">{siteConfig.projects.content[2].short_description}</p>
            <span className="text-foreground-700 block lg:hidden">{siteConfig.projects.content[2].date}</span>
          </div>
          <div className="max-w-[35rem] block lg:hidden">
            <Image
              src={siteConfig.projects.content[2].image.principal_image_phone.link}
              alt={siteConfig.projects.content[2].image.principal_image_phone.alt}
              removeWrapper
              className="rounded-none w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-1xl md:text-3xl text-foreground-900 hidden lg:block">{siteConfig.projects.content[2].name}</h3>
            <span className="text-foreground-700 hidden lg:block">{siteConfig.projects.content[2].date}</span>
            <p className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden">{siteConfig.projects.content[2].short_description}</p>
            <Button
              endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
              className="gap-0 my-4 rounded-sm w-fit"
              as={Link}
              href={"/projects/" + siteConfig.projects.content[2].id}>
              See More
            </Button>
          </div>
        </div>
        <div className="max-w-[35rem] hidden lg:block">
          <Image
            src={siteConfig.projects.content[2].image.principal_image.link}
            alt={siteConfig.projects.content[2].image.principal_image.alt}
            removeWrapper
            className="rounded-none w-full h-full"
          />
        </div>
      </article>
    </section>
  );
}
