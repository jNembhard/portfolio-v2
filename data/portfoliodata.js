export const portfoliodata = [
  {
    id: 1,
    name: "Coffeeroasters",
    slug: "coffee",
    description:
      "Most introductions start casually over a cup of coffee don’t they? For this project I created a three-page coffee roasters subscription site. I used Gatsby.js along with a  mobile-first workflow, framer motion, and GraphQL. State changes are handled with a use-between hook.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-coffeeroasters@2x.webp",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-coffeeroasters-hero@2x.webp",
      },

      preview: {
        desktopOne:
          "/assets/detail/desktop/image-coffeeroasters-preview-1@2x.webp",
        desktopTwo:
          "/assets/detail/desktop/image-coffeeroasters-preview-2@2x.webp",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/coffee-roasters",
      website: "https://coffeeroasters.gatsbyjs.io/",
    },
    previous: "Netflix",
    next: "Galleria",
  },
  {
    id: 2,
    name: "Galleria",
    slug: "galleria",
    description:
      "We often don’t see a chance to blend art and technology in a significant way. This project was built with NextJS, framer-motion, and React Redux. Redux is used to handle state changes across and tracks the position of slide transitions in the gallery and updates the slide progress bar.",
    images: {
      index: {
        desktop: "/assets/portfolio/desktop/image-portfolio-galleria@2x.webp",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-galleria-hero@2x.webp",
      },
      preview: {
        desktopOne: "/assets/detail/desktop/image-galleria-preview-1@2x.webp",
        desktopTwo: "/assets/detail/desktop/image-galleria-preview-2@2x.webp",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/galleria",
      website: "https://galleria-art.vercel.app",
    },
    previous: "Coffee",
    next: "Planets",
  },
  {
    id: 3,
    name: "Planet Facts",
    slug: "planets",
    description:
      "Planet Facts is a project based in React. It uses framer-motion for animations and react-router to transition between pages, and also uses Styled-Components. This project features tab implementations to handle data changes. Head home to planet Earth or venture out just a bit further.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-planetfacts@2x.webp",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-planetfacts-hero@2x.webp",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-planetfacts-preview-1@2x.webp",
        desktopTwo:
          "/assets/detail/desktop/image-planetfacts-preview-2@2x.webp",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/solar-system",
      website: "https://planetfacts.vercel.app",
    },
    previous: "Galleria",
    next: "Netflix",
  },
  {
    id: 4,
    name: "Netflix Clone",
    slug: "netflix",
    description:
      "There isn’t a front-end developer alive who hasn’t at least attempted to build a Netflix clone. True story. This project was built in React and also connects to the TDMB API which grants access to a vast movie poster and backdrop library. Available trailers are pulled from YouTube.",
    images: {
      index: {
        desktop: "/assets/portfolio/desktop/image-portfolio-netflix@2x.webp",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-netflix-hero.webp",
      },
      preview: {
        desktopOne: "/assets/detail/desktop/image-netflix-preview-1@2x.webp",
        desktopTwo: "/assets/detail/desktop/image-netflix-preview-2@2x.webp",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/jflix",
      website: "https://jason-flix.web.app/",
    },
    previous: "Planets",
    next: "Coffee",
  },
];
