export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  lenguage: "es",
  name: "Magic by Zeko",
  description:
    "Nos encontramos enfocados al máximo en crear y construir mousepads orientados al deporte competitivo profesional en sus diferentes entregas.",
  domain: "http://localhost:3000/",
    navItems: [
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Contact us",
      href: "#contact",
    },
  ],
  images: {},
  videos: {},
  projects: {
    content: [
      {
        name: "argen_reps",
        link: "https://www.magicbyzeko.com/",
        image: {
          link: "https://imgur.com/3NvItvi.png",
          alt: "a",
        },
      },
      {
        name: "magicbyzeko",
        link: "https://www.magicbyzeko.com/",
        image: {
          link: "https://imgur.com/ghDZ0YO.png",
          alt: "a",
        },
      },
    ],
  },
  links: {
    instagram: "https://www.instagram.com/magicbyzeko/",
    tiktok: "https://www.instagram.com/magicbyzeko/",
    page: "https://www.instagram.com/webcode__/",
  },
  contact: {
    gmail: "magicbyzeko@gmail.com",
  },
};
