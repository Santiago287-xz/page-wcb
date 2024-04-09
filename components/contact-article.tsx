import { siteConfig } from "@/config/site";

export default function ContactArticle() {
  return (
    <section className="mt-36 w-2/3 m-auto pb-24" id="contact">
      <h4 className="dark:text-[#b7b7b7] text-foreground-600 text-end font-normal text-xl w-fit">
        {siteConfig.text.contact.h4}
      </h4>
      <p className="dark:text-[#b1b1b1] text-foreground-500 text-start font-normal text-md lg:w-2/3 mt-4 mb-2">
        {siteConfig.text.contact.p}
      </p>
      <a className="dark:text-[#b1b1b1] text-foreground-500" href={"mailto:" + siteConfig.contact.gmail}>
        {siteConfig.contact.gmail}
      </a>
    </section>
  );
}
