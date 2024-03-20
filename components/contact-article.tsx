import { siteConfig } from "@/config/site";

export default function ContactArticle() {
  return (
    <article className="mt-36 w-2/3 m-auto pb-24">
      <h4 className="text-[#b7b7b7] text-end font-normal text-xl w-fit">
        {siteConfig.text.contact.h4}
      </h4>
      <p className="text-[#b1b1b1] text-start font-normal text-md lg:w-2/3 mt-4 mb-2">
        {siteConfig.text.contact.p}
      </p>
      <a className="text-[#b1b1b1]" href={"mailto:" + siteConfig.contact.gmail}>
        {siteConfig.contact.gmail}
      </a>
    </article>
  );
}
