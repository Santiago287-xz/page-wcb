import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/react";

export async function getStaticPaths() {
  let paths = siteConfig.projects.content.map((item) => ({
    params: {
      name: item.name,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const project = siteConfig.projects.content.filter(
    (x) => x.name == params.name
  )[0];
  return { props: { project } };
}

export default function Project({ project }: { project: any }) {
  return (
    <>
      <p>Post: {project.name}</p>
      <Image src={project.image.link} alt={project.image.alt} />
    </>
  );
}
