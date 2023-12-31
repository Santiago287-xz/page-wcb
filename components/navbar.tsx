import {
  Button,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, InstagramIcon } from "@/components/icons";

const lightLogoURL = siteConfig.images.lightMiniLogo;
const darkLogoURL = siteConfig.images.darkMiniLogo;

export const Navbar = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const imageUrl = theme === "light" ? lightLogoURL : darkLogoURL;
    setImageUrl(imageUrl);
  }, [theme]);

  return (
    <>
      <NextUINavbar
        className="backdrop-blur-sm animate-fade-down animate-duration-[350ms] 
      animate-delay-100 bg-[#ebeff3db] dark:bg-background/80 z-[200000] w-4/5 max-w-[45rem] m-auto top-4 rounded-2xl h-12"
        maxWidth="md"
        position="sticky"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink href="/" >
              WebCode<b className="text-[#731682]">Builder</b>
            </NextLink>
          </NavbarBrand>
          <div className="hidden lg:flex gap-2 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Button
                  href={item.href}
                  as={Link}
                  className="text-lg dark:font-extralight bg-transparent p-6"
                  // className="text-lg bg-foreground/10 p-6"
                >
                  {item.label}
                </Button>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-3">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            <NavbarMenuItem>
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <Link
                    color="foreground"
                    className="py-2"
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
