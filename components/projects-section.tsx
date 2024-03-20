import SliderImage from "./slider-image";
import { siteConfig } from "@/config/site";
import CategoryTitle from "./title";

export default function ProjectSection() {
  const projects = siteConfig.projects.content;
  return (
    <section className="py-4 flex justify-center items-center bg-[#e4e4e7] dark:bg-[#09090b] dark:text-white">
      <article className="flex flex-wrap justify-center gap-4 w-4/5">
        <CategoryTitle
          text="Explore our Projects"
          description="See some of our projects in production, web page, aplications, and
          more"
        />
        <div className="flex flex-wrap justify-center gap-4 mt-8 w-3/4 bg-[#09090b] rounded-3xl">
          <SliderImage projects={projects}></SliderImage>
        </div>
      </article>
    </section>
  );
}
