export const portfoliodata = [
  {
    id: 1,
    name: "Coffeeroasters",
    slug: "coffee",
    description:
      "Most introductions start casually over a cup of coffee don’t they? For this project I created a three-page coffee roasters subscription site. I used Gatsby.js along with a  mobile-first workflow, framer motion, and GraphQL. State changes are handled with a use-between hook.",
    projBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.",
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
    subGreen:
      "Gatsby JS, Atomic Design, GraphQL, Framer Motion, Mobile First, Styled Components",
    previous: "Netflix",
    next: "Hyperfast",
  },
  {
    id: 2,
    name: "Hyperfast",
    slug: "hyperfast",
    description:
      "Take a look at something I’ve created with a more professional feel. The  events Hyperfast Investor and Growth Summit website was built in Webflow. Some features available in this project include dynamic content management systems, Webflow animations, and a place for clients to handle content editing after initial setup of the website.",
    projBackground:
      "This website was created for the three-day summit event by Hyperfast hosted in Boca Raton, FL. Hyperfast is a business hosted under the Optime Realty umbrella, which also includes Keri Shull Team. The goal was to create a website for coaching clients to navigate to after scanning a QR code to read speaker bios and see the daily schedule. This product was especially useful after the initial build on Webflow allowing clients to make quick changes to pictures, copy, and links on the fly, without a need to use a service like GitHub.",
    images: {
      index: {
        desktop: "/assets/portfolio/desktop/image-portfolio-hyperfast.webp",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-hyperfast-hero.webp",
      },
      preview: {
        desktopOne: "/assets/detail/desktop/image-hyperfast-preview-1.webp",
        desktopTwo: "/assets/detail/desktop/image-hyperfast-preview-2.webp",
      },
    },
    sources: {
      // github: "https://github.com/jNembhard/galleria",
      website: "https://www.hyperfastleads.com",
    },
    subGreen: "Webflow, Dynamic CMS, Client Content Editor",
    previous: "Coffee",
    next: "Galleria",
  },
  {
    id: 3,
    name: "Galleria",
    slug: "galleria",
    description:
      "We often don’t see a chance to blend art and technology in a significant way. This project was built with NextJS, framer-motion, and React Redux. Redux is used to handle state changes across and tracks the position of slide transitions in the gallery and updates the slide progress bar.",
    projBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.",
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
    subGreen:
      "Next JS, Redux, Mobile-First Workflow, Framer Motion, Styled Components",
    previous: "Hyperfast",
    next: "Planets",
  },
  {
    id: 4,
    name: "Planet Facts",
    slug: "planets",
    description:
      "Planet Facts is a project based in React. It uses framer-motion for animations and react-router to transition between pages, and also uses Styled-Components. This project features tab implementations to handle data changes. Head home to planet Earth or venture out just a bit further.",
    projBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.",
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
    subGreen: "React, Atomic Design, Mobile-first, Styled Components",
    previous: "Galleria",
    next: "Netflix",
  },
  {
    id: 5,
    name: "Netflix Clone",
    slug: "netflix",
    description:
      "There isn’t a front-end developer alive who hasn’t at least attempted to build a Netflix clone. True story. This project was built in React and also connects to the TMDB API which grants access to a vast movie poster and backdrop library. Available trailers are pulled from YouTube.",
    projBackground:
      "This was an early project focused on connecting APIs to Frontend technology. I wanted to create something that was relatable yet also presenting some technical challenge. The Movie Database (TMDB) API is similar to IDMB but instead presents a free version to access an array of public movie poster and forms of data pertaining to movies. Most of the challenge comes from proper implementation of pulling data into your React app as  the rows in place are generated by basic components implementation.",
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
    subGreen: "React, Firebase, Interaction Design, TMDB API",
    previous: "Planets",
    next: "Coffee",
  },
];
