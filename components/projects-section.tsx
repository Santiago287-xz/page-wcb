import SliderImage from "./slider-image";
import { Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function ProjectSection() {
  const projects = siteConfig.projects.content
  return (
    <main className="py-4 flex justify-center items-center bg-[#09090b]">
      <section className="flex flex-wrap justify-center gap-4 w-4/5">
        <div>
          <h1 className="text-5xl text-white text-center p-3 pt-8 font-light">Explore Beautiful Templates</h1>
          <h4 className="text-md text-white/80 text-center pb-4 font-light">Choose one of styles or cutomize easily your site following your ideas.</h4>
          <Divider className="bg-white/80" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-3/4">
          <SliderImage projects={projects}></SliderImage>
        </div>
      </section>
    </main>
  );
}
