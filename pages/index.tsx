import DefaultLayout from "@/layouts/default";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Services/>
      <Skills />
    </DefaultLayout>
  );
}
