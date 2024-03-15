import DefaultLayout from "@/layouts/default";
import Services from "@/components/services-section";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";
import Title from "@/components/title-section";
import Particles from "@/components/particles";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Particles className="h-screen w-full absolute z-10 top-0" />
      <Title />
      <TimelineSection/>
      <Projects/>
      <Skills />
      <Services />
    </DefaultLayout>
  );
}
