import DefaultLayout from "@/layouts/default";
import Services from "@/components/services";
import Skills from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Services />
      <Skills />
      <ContactSection />
    </DefaultLayout>
  );
}
