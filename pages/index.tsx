import DefaultLayout from "@/layouts/default";
import Services from "@/components/services-section";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";
import Title from "@/components/title-section";
import Particles from "@/components/particles";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Particles className="h-screen w-full absolute z-10 top-0" />
      <Title />
      <Projects/>
      <Skills />
      <Services />
    </DefaultLayout>
  );
}
