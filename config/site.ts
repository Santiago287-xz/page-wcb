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
      href: "#projects",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "FAQ'S",
      href: "#faq",
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
        name: "Magic by zEko",
        title: "Featured works",
        short_description: "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
        date: "23/10/2011",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://i.imgur.com/5UwKnVK.png",
            alt: "a",
          },
          principal_image_phone:{
            link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
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
            h1: "dark:from-[#ccdff6] dark:to-[#ccdbf6]",
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
        id: "puntodeventa",
        name: "puntodeventa",
        title: "Featured works",
        short_description: "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
        date: "23/10/2011",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://media.discordapp.net/attachments/1019381524149305426/1225586360883216394/image.png?ex=6621ab3e&is=660f363e&hm=5999e87fcc83893c4bb0570b1806f3672ff31b2a74b70708e9bac1dd07b0f212&=&format=webp&quality=lossless&width=1207&height=668",
            alt: "a",
          },
          principal_image_phone:{
            link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
            alt: "a",
          },
          first_image: {
            link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
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
      {
        id: "magicbyzeko",
        name: "Projecto 51",
        title: "Featured works",
        short_description: "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
        date: "23/10/2011",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://prod.spline.design/3oQ8OFb0mwYFMZ-p/scene.splinecode",
            alt: "a",
          },
          principal_image_phone:{
            link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
            alt: "a",
          },
          first_image: {
            link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
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
            h1: "dark:from-[#CCD6F6] dark:to-[#d9ccf6]",
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
