import DefaultLayout from "@/layouts/default";
import Services from "@/components/services-section";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Projects/>
      <Skills />
      <Services />
    </DefaultLayout>
  );
}
