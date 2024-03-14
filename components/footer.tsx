import { Link, Image, Divider } from "@nextui-org/react";
import MailForm from "@/components/mail-form";
import { TwitterIcon, InstagramIcon, DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center p-2 px-6 sm:px-24 gap-5">
      <div className="flex items-center gap-4 mt-4">
        <Link isExternal href={siteConfig.links.instagram}>
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
          href={siteConfig.links.page}
          className="flex items-center gap-1 text-current"
        >
          <span className="text-zinc-200 pl-2">Powered by</span>
          <p className="text-primary">WebCodeBuilders</p>
        </Link>
      </div>
    </footer>
  );
}
