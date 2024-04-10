import { siteConfig } from "@/config/site";
import { Button, Image, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Spline from '@splinetool/react-spline';
// import SliderImage from "./slider-image";

export default function ProjectSection() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#e4e4e7] dark:bg-[#09090b] dark:text-white" id="projects">
      <article className="flex justify-center w-full px-12 md:px-16 pt-32">
        <div className="flex flex-col justify-between sm:gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl max-w-[30rem]">{siteConfig.projects.content[0].title}</h2>
            <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[0].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 hidden lg:block" />
            <span className="text-foreground-700 block lg:hidden">{siteConfig.projects.content[0].date}</span>
          </div>
          <div className="flex flex-col py-12">
            <h3 className="text-1xl md:text-3xl text-foreground-900 hidden lg:block">{siteConfig.projects.content[0].name}</h3>
            <span className="text-foreground-700 hidden lg:block">{siteConfig.projects.content[0].date}</span>
            <div className="max-w-[35rem] block lg:hidden">
              <Image
                src={siteConfig.projects.content[0].image.principal_image_phone.link}
                alt={siteConfig.projects.content[0].image.principal_image_phone.alt}
                removeWrapper
                className="rounded-none w-full h-full"
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[0].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden" />
            <Button
              endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
              className="gap-0 my-4 rounded-sm w-fit"
              as={Link}
              href={"/projects/" + siteConfig.projects.content[0].id}>
              Ver Mas
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

      <article className="bg-white dark:bg-black dark:text-white w-full">
        <div className="flex justify-center w-full m-auto max-w-[100rem] px-12 md:px-32 py-16">
          <div className="relative hidden lg:flex items-center pl-4">
            <Image
              src={"https://media.discordapp.net/attachments/1019381524149305426/1225586360883216394/image.png?ex=6621ab3e&is=660f363e&hm=5999e87fcc83893c4bb0570b1806f3672ff31b2a74b70708e9bac1dd07b0f212&=&format=webp&quality=lossless&width=687&height=381"}
              alt={siteConfig.projects.content[1].image.principal_image.alt}
              removeWrapper
              className="w-full bg-[#131313] rounded-lg"
            />
            <Image
              src={"https://media.discordapp.net/attachments/1019381524149305426/1225587628259414167/image.png?ex=6621ac6c&is=660f376c&hm=8ef9d5c33c5550881d5e8af2afccbc088a57ddd6f1efdc8bb47792892f51fdd5&=&format=webp&quality=lossless&width=735&height=670"}
              alt={siteConfig.projects.content[1].image.principal_image.alt}
              removeWrapper
              className="rounded-none w-1/4 absolute top-[30%] right-0 translate-x-[50%] z-10"
            />
            <Image
              src={"https://media.discordapp.net/attachments/1019381524149305426/1225588017763188879/image.png?ex=6621acc9&is=660f37c9&hm=9746d9ec24db4a5dcd7af55334d1d2dec709738226cb2bc1a69f298ac3c0fa95&=&format=webp&quality=lossless&width=1440&height=453"}
              alt={siteConfig.projects.content[1].image.principal_image.alt}
              removeWrapper
              className="w-1/3 absolute bottom-[25%] translate-x-[-50%] z-10 rounded-none"
            />
            <Image
              src={"https://media.discordapp.net/attachments/1019381524149305426/1225588042287419423/image.png?ex=6621accf&is=660f37cf&hm=441b772f8da829f542c94f33b5a2f652b70e236eef91e2ad90b77af7ae3e98d3&=&format=webp&quality=lossless&width=1440&height=350"}
              alt={siteConfig.projects.content[1].image.principal_image.alt}
              removeWrapper
              className="w-2/5 absolute top-[35%] translate-x-[-50%] z-10 rounded-none"
            />
          </div>

          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col justify-start items-start lg:items-end lg:gap-12">
              <h2 className="text-5xl md:text-8xl max-w-[30rem] lg:text-right">{siteConfig.projects.content[1].title}</h2>
              <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[1].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 text-right hidden lg:block" />
              <span className="text-foreground-700 block lg:hidden">{siteConfig.projects.content[1].date}</span>
            </div>
            <div className="flex flex-col lg:items-end gap-12">
              <h3 className="text-1xl md:text-3xl text-foreground-900 text-right hidden lg:block">{siteConfig.projects.content[1].name}</h3>
              <span className="text-foreground-700 text-right hidden lg:block">{siteConfig.projects.content[1].date}</span>
              <div className="max-w-[35rem] block lg:hidden">
                <Image
                  src={siteConfig.projects.content[1].image.principal_image_phone.link}
                  alt={siteConfig.projects.content[1].image.principal_image_phone.alt}
                  removeWrapper
                  className="rounded-none w-full h-full"
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[1].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden" />
              <Button
                endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
                className="gap-0 my-4 rounded-sm w-fit"
                as={Link}
                href={"/projects/" + siteConfig.projects.content[1].id}>
                Ver Mas
              </Button>
            </div>
          </div>
        </div>
      </article>

      <article className="flex justify-center bg-white dark:bg-black w-full px-12 md:px-16 py-12 lg:py-0">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl max-w-[30rem] m-0 lg:mt-16">{siteConfig.projects.content[2].title}</h2>
            <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[2].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 hidden lg:block" />
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
            <p dangerouslySetInnerHTML={{ __html: siteConfig.projects.content[2].short_description }} className="max-w-[20rem] mt-4 text-foreground-600 block lg:hidden" />
            <Button
              endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
              className="gap-0 my-4 rounded-sm w-fit lg:mb-16"
              as={Link}
              href={"/projects/" + siteConfig.projects.content[2].id}>
              Ver Mas
            </Button>
          </div>
        </div>
        <div className="max-w-[45rem] w-[45rem] h-[40rem] hidden lg:block">
          <Spline scene={siteConfig.projects.content[2].image.principal_image.link} />
        </div>
      </article>
    </section>
  );
}
