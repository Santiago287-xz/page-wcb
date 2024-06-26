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
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Navbar() {
  return (
    <NextUINavbar
      className="backdrop-blur-sm animate-fade-down animate-duration-[350ms] 
      animate-delay-100 bg-[#ebeff3db] dark:bg-background/80 w-fit m-auto top-4 rounded-2xl h-[3.5rem] fixed"
    >
      <NavbarContent className="basis-2/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink href="/">
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
              >
                {item.label}
              </Button>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="top-[0_!important] h-[100vh_!important]">
        <div className="mx-4 mt-20 flex flex-col gap-2">
          <NavbarMenuItem>
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href + "_phone"}>
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
  );
};
