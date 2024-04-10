import DefaultLayout from "@/layouts/default";
import Skills from "@/components/skills-section";
import Projects from "@/components/projects-section";
import Title from "@/components/title-section";
import Particles from "@/components/particles";
import TimelineSection from "@/components/timeline-section";
import Questions from "@/components/question-section"
import LastProduct from "@/components/last-project"
import ContactArticle from "@/components/contact-article";
import MailForm from "@/components/mail-form";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Particles className="h-[100svh] transition-all w-full absolute z-10 top-0 bg-[#e4e4e7] dark:bg-black" props_size={3} particles_color={"155,22,130"}/>
      <Title />
      <TimelineSection/>
      <Projects/>
      <LastProduct />
      <Skills />
      <Questions />
      <MailForm/>
    </DefaultLayout>
  );
}