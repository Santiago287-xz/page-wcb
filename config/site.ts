export type SiteConfig = typeof siteConfig;
export type Project = (typeof siteConfig.projects.content)[0];

export const siteConfig = {
  lenguage: "es",
  name: "Magic by Zeko",
  description:
    "Nos encontramos enfocados al máximo en crear y construir mousepads orientados al deporte competitivo profesional en sus diferentes entregas.",
  domain: "http://localhost:3000/",
  text: {
    contact: {
      h4: "Contact",
      p: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.",
    },
  },
  navItems: [
    {
      label: "Fases",
      href: "",
    },
    {
      label: "Projectos",
      href: "#services",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "FAQ´S",
      href: "#services",
    },
    {
      label: "Contact us",
      href: "#contact",
    },
  ],
  images: {},
  videos: {},
  about_section: [
    {
      id: 1,
      path: "",
      title: "Estudio del proyecto",
      subtitle:
        "Hola somos una empresa que se dedica al contador de plata y quereos colaborar",
      info: "Analizamos cuáles son tus objetivos, el target al cual nos dirigimos, y estudiamos a la competencia. A partir del estudio te presentamos un proyecto web y una estrategia de marketing digital ganadoras.",
    },
    {
      id: 2,
      path: "",
      title: "Estudio del proyecto",
      subtitle:
        "Hola somos una empresa que se dedica al contador de plata y quereos colaborar",
      info: "Analizamos cuáles son tus objetivos, el target al cual nos dirigimos, y estudiamos a la competencia. A partir del estudio te presentamos un proyecto web y una estrategia de marketing digital ganadoras.",
    },
  ],
  question_section: [
    {
      title: "Estudio del proyecto",
      content:
        "Hola somos una empresa que se dedica al contador de plata y quereos colaborar",
    },
    {
      title: "Estudio del proyecto",
      content:
        "Hola somos una empresa que se dedica al contador de plata y quereos colaborar",
    },
  ],
  projects: {
    content: [
      {
        id: "argen_reps",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://imgur.com/Y6eWHxd.png",
            alt: "a",
          },
          first_image: {
            link: "https://imgur.com/ghDZ0YO.png",
            alt: "a",
          },
          second_image: {
            link: "https://imgur.com/ghDZ0YO.png",
            alt: "a",
          },
        },
        color: {
          first: {
            h4: "text-[#0070f0]",
            h1: "from-[#ccdff6] to-[#ccdbf6]",
            gradient: "bg-[radial-gradient(#121ca61f_0%,#0f2a8500_60%)]",
            image: "bg-[#0c0b3a29] hover:bg-[#16155d29]",
          },
          second: {
            h4: "text-[#0a5dbc]",
            h1: "text-[#cdbfea]",
            gradient: "bg-[radial-gradient(#1d56bb1c_0%,#0f2a8500_70%)]",
            image: "bg-[#0c0b3a29] hover:bg-[#16155d29]",
          },
        },
        text: {
          first: {
            title: "Argen Reps",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
          second: {
            title: "Example Project",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
        },
      },
      {
        id: "magicbyzeko",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://imgur.com/njtiLwc.png",
            alt: "a",
          },
          first_image: {
            link: "https://media.discordapp.net/attachments/1019381524149305426/1216552544407650334/image.png?ex=6600cdd9&is=65ee58d9&hm=db5d6da51de2f3c3c78cd8255d37149745b6ec978ab13a850fd71d5241fbec14&=&format=webp&quality=lossless&width=687&height=388",
            alt: "a",
          },
          second_image: {
            link: "https://imgur.com/ghDZ0YO.png",
            alt: "a",
          },
        },
        color: {
          first: {
            h4: "text-[#9857D3]",
            h1: "from-[#CCD6F6] to-[#d9ccf6]",
            gradient: "bg-[radial-gradient(#7a21cd17_0%,#320F8500_60%)]",
            image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
          },
          second: {
            h4: "text-[#6d45c4]",
            h1: "text-[#cdbfea]",
            gradient: "bg-[radial-gradient(#3a12c11c_0%,#320F8500_70%)]",
            image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
          },
        },
        text: {
          first: {
            title: "Magic by zEko",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
          second: {
            title: "Example Project",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
        },
      },
      {
        id: "puntodeventa",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://imgur.com/WDjWvux.png",
            alt: "a",
          },
          first_image: {
            link: "https://media.discordapp.net/attachments/1019381524149305426/1216552544407650334/image.png?ex=6600cdd9&is=65ee58d9&hm=db5d6da51de2f3c3c78cd8255d37149745b6ec978ab13a850fd71d5241fbec14&=&format=webp&quality=lossless&width=687&height=388",
            alt: "a",
          },
          second_image: {
            link: "https://imgur.com/ghDZ0YO.png",
            alt: "a",
          },
        },
        color: {
          first: {
            h4: "text-[#9857D3]",
            h1: "from-[#CCD6F6] to-[#d9ccf6]",
            gradient: "bg-[radial-gradient(#7a21cd17_0%,#320F8500_60%)]",
            image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
          },
          second: {
            h4: "text-[#6d45c4]",
            h1: "text-[#cdbfea]",
            gradient: "bg-[radial-gradient(#3a12c11c_0%,#320F8500_70%)]",
            image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
          },
        },
        text: {
          first: {
            title: "Punto de Venta",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
          second: {
            title: "Example Project",
            subtitle: "Featured Project",
            paragraph:
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
          },
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
