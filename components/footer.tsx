import { Link, Image, Divider } from "@nextui-org/react";
import MailForm from "@/components/mail-form";
import { TwitterIcon, InstagramIcon, Tiktok } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer({ showAllInputs }: { showAllInputs: boolean }) {
  return (
    <>
      <MailForm showAllInputs={showAllInputs} />
      <footer className="w-full flex flex-col items-center pb-6 pt-6 gap-5 bg-[#141a1f]">
        <div className="flex items-center gap-4 mt-4">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="w-8 h-8 text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <InstagramIcon className="w-6 h-8 text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.tiktok}>
            <Tiktok className="w-7 h-8 text-white" />
          </Link>
        </div>
        <Divider/>
        <div className="flex justify-between">
          <span className="text-zinc-200 text-left">Powered by</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-200 text-right">Powered by</span>
        </div>
      </footer>
    </>
  );
}
