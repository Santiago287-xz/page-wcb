import DefaultLayout from "@/layouts/default";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects_section";
import Title from "@/components/title-section";
import Particles from "@/components/particles";
import TimelineSection from "@/components/timeline-section";
import Pregutas from "@/components/question_section"
import PuntoVenta from "@/components/punto_venta"
import ContactArticle from "@/components/contact-article";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Particles className="h-[100svh] transition-all w-full absolute z-10 top-0 bg-[#e4e4e7] dark:bg-black" props_size={3} particles_color={"115,22,130"}/>
      <Title />
      <TimelineSection/>
      <Projects/>
      <Skills />
      <PuntoVenta />
      <Pregutas />
      <ContactArticle/>
    </DefaultLayout>
  );
}