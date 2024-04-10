import { Link, Divider } from "@nextui-org/react";
import { InstagramIcon, DiscordIcon, TikTokIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pb-6 px-6 sm:px-24 gap-5">
      <div className="flex items-center gap-4 mt-4">
        <Link isExternal href={siteConfig.links.tiktok}>
          <TikTokIcon className="w-8 h-8 text-foreground/90 hover:drop-shadow-[0_1px_25px_rgb(36_158_240)] duration-500 hover:text-[rgb(36,158,240)]" />
        </Link>
        <Link isExternal href={siteConfig.links.instagram} className="w-8">
          <InstagramIcon className="w-6 h-8 m-auto text-foreground/90 hover:drop-shadow-[0_1px_25px_rgb(193_8_165)] duration-500 hover:text-[rgb(193,8,165)]" />
        </Link>
        <Link isExternal href={siteConfig.links.discord} className="w-8">
          <DiscordIcon className="w-7 h-8 m-auto text-foreground/90 hover:drop-shadow-[0_1px_15px_rgb(93_106_242)] duration-500 hover:text-[rgb(93,106,242)]" />
        </Link>
      </div>
      <Divider />
      <div className="flex flex-wrap justify-center">
        <p className="text-foreground/80 text-center">
          Copyright © 2023-2024 <span className="text-gradient duration-500 transition-all">WebCodeBuilders</span>
        </p>
      </div>
    </footer>
  );
}
