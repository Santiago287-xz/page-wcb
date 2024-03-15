import DefaultLayout from "@/layouts/default";
import Services from "@/components/services-section";
import Nosotros from "@/components/about_section";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";
import Title from "@/components/title-section";
import Particles from "@/components/particles";
import Preguntas from "@/components/question_section";
import { ThemeProvider } from "@material-tailwind/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ThemeProvider>
        <Particles className="h-screen w-full absolute z-10 top-0" />
        <Title />
        <Nosotros />
        <Skills />
        <Services />
        <Projects />
        <Preguntas />
      </ThemeProvider>
    </DefaultLayout>
  );
}
