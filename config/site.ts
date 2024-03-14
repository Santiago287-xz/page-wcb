export type SiteConfig = typeof siteConfig;
export type Project = (typeof siteConfig.projects.content)[0];

export const siteConfig = {
  lenguage: "es",
  name: "Magic by Zeko",
  description:
    "Nos encontramos enfocados al máximo en crear y construir mousepads orientados al deporte competitivo profesional en sus diferentes entregas.",
  domain: "http://localhost:3000/",
  text: {
    contact:{
      h4: "Contact",
      p: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect."
    }
  },
  navItems: [
    {
      label: "Skills",
      href: "http://localhost:3000/#skills",
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
        id: "argen_reps",
        link: "https://www.magicbyzeko.com/",
        image: {
          principal_image: {
            link: "https://i.imgur.com/ZDfcMBy.png",
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
            link: "https://imgur.com/ghDZ0YO.png",
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
