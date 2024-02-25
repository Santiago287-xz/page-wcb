import { Link, Image, Divider } from "@nextui-org/react";
import MailForm from "@/components/mail-form";
import { TwitterIcon, InstagramIcon, DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer({ showAllInputs }: { showAllInputs: boolean }) {
  return (
    <>
      <MailForm />
      <footer className="w-full flex flex-col items-center p-6 px-24  gap-5 bg-[#141a1f]">
        <div className="flex items-center gap-4 mt-4">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="w-8 h-8 text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <InstagramIcon className="w-6 h-8 text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <DiscordIcon className="w-7 h-8 text-white" />
          </Link>
        </div>
        <Divider />
        <div className="flex flex-wrap justify-center md:justify-between w-full">
          <span className="text-gray-400">
            Copyright © 2023-2024 WebCodeBuilders
          </span>
          <Link
            isExternal
            href={siteConfig.links.webcodebuilders}
            className="flex items-center gap-1 text-current"
          >
            <span className="text-zinc-200 pl-2">Powered by</span>
            <p className="text-primary">WebCodeBuilders</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
