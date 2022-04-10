export const portfoliodata = [
  {
    id: 1,
    name: "Coffeeroasters",
    slug: "coffee",
    description:
      "Most introductions start casually over a cup of coffee don’t they? Coffeeroasters was built with Gatsby.js and GraphQL. It features colors that are meant to evoke a feeling of nature, tranquility, and peace. Aren’t you starting to feel refreshed already? Brew yourself a fresh artisan coffee and let’s dive into this project.",
    projBackground:
      "Coffeeroasters aims to improve the morning ritual by providing people with access to a growing range of artisan coffees delivered right to your door. You can customize your options by selecting the roast style, grind type, and even choose the frequency of delivery. It was essential that I was able to pass selection data throughout different components. I was able to create a useBetween and useSummary hook to handle state changes as an alternative to Redux or React Context. Visit the site or check out my GitHub to learn more about the implementation.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-coffeeroasters-1000x1080.jpg",
      },
      detailhero: {
        desktop:
          "/assets/detail/desktop/image-coffeeroasters-hero-2220x1000.jpg",
      },

      preview: {
        desktopOne:
          "/assets/detail/desktop/image-coffeeroasters-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-coffeeroasters-preview-two-1278x868.jpg",
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
        desktop:
          "/assets/portfolio/desktop/image-portfolio-hyperfast-1000x1080.jpg",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-hyperfast-hero-2220x1000.jpg",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-hyperfast-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-hyperfast-preview-two-1278x868.jpg",
      },
    },
    sources: {
      // github: "https://github.com/jNembhard/galleria",
      website: "https://www.hyperfastleads.com",
    },
    subGreen: "Webflow, Dynamic CMS, Client Content Editor",
    previous: "Coffee",
    next: "Scoot",
  },
  {
    id: 3,
    name: "Scoot",
    slug: "scoot",
    description:
      "Wouldn’t it be nice if you could swiftly move around any urban environment at low-cost and reduce your carbon footprint? With fast page load times and speedy animations, building this project with React was the perfect choice to communicate the meaning behind Scoot. Let’s get scootin’.",
    projBackground:
      "The idea behind Scoot is something everyone wants in an urban environment; Quick and efficient, easy to access, and at low-cost. The challenge is getting that idea across effectively. I decided it was best to build this project with React. I could cut down on code and add Styled Components and Framer Motion into the mix to keep users engaged with animations and colors that represent speed. Check out the site or head over to my GitHub page for more technical background.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-scoot-1000x1080.jpg",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-scoot-hero-2220x1000.jpg",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-scoot-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-scoot-preview-two-1278x868.jpg",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/scoot",
      website: "https://getscootin.vercel.app/",
    },
    subGreen: "Atomic Design, React, Framer Motion, Styled Components",
    previous: "Hyperfast",
    next: "Galleria",
  },
  {
    id: 4,
    name: "Galleria",
    slug: "galleria",
    description:
      "We often don’t see a chance to blend art and technology in a significant way. The Galleria website aims to provide a user experience of walking through an art gallery. The project was built with NextJS and uses React Redux to handle state changes between slides. Head into the gallery to view some timeless artwork.",
    projBackground:
      "Galleria features many pieces artwork from the 1400s up until the early 1900s. The gallery is just a small snippet of art pieces from that time but has the potential to grow exponentially. I decided to use React Redux for this project not only because I looking to update the state, but it also makes it easy to add in more pieces to the art gallery. I could potentially add hundreds of pieces of art but only load one piece at a time with a simple two-page layout and a modal. I invite you to visit the Galleria website and check out my GitHub page for a more in-depth look at the technical aspects of the project.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-galleria-1000x1080.jpg",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-galleria-hero-2220x1000.jpg",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-galleria-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-galleria-preview-two-1278x868.jpg",
      },
    },
    sources: {
      github: "https://github.com/jNembhard/galleria",
      website: "https://galleria-art.vercel.app",
    },
    subGreen:
      "Next JS, Redux, Mobile-First Workflow, Framer Motion, Styled Components",
    previous: "Scoot",
    next: "Planets",
  },
  {
    id: 5,
    name: "Planet Facts",
    slug: "planets",
    description:
      "If you’ve ever wanted to explore the solar system from the comfort of your couch, you’ve come to the right place. A starry backdrop and quick access to information about our planets aims to give users an engaging learning experience. Head home to planet Earth or venture out just a bit further.",
    projBackground:
      "Planet Facts provides an easy and engaging way to help people learn about the planets. Website users get a quick overview of each planet in our solar system ranging from interesting facts, each planet’s structure, and what it would be like to visit the surface. I decided to use React to take advantage of the react-router to render each page dynamically. The data changes present in the project utilize custom tab implementations. I’ve added some light animations with Framer Motion that you’ll see when you visit the site. Want to see the code for this project? Feel free to head over to my GitHub page.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-planetfacts-1000x1080.jpg",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-planetfacts-hero-2220x1000.jpg",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-planetfacts-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-planetfacts-preview-two-1278x868.jpg",
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
    id: 6,
    name: "Netflix Clone",
    slug: "netflix",
    description:
      "There isn’t a front-end developer alive who hasn’t at least attempted to build a Netflix clone. True story. This project was built in React and also connects to the TMDB API which grants access to a vast movie poster and backdrop library. Available trailers are pulled from YouTube.",
    projBackground:
      "This was an early project focused on connecting APIs to Frontend technology. I wanted to create something that was relatable yet also presenting some technical challenge. The Movie Database (TMDB) API is similar to IMDB but instead presents a free version to access an array of public movie poster and forms of data pertaining to movies. Most of the challenge comes from proper implementation of pulling data into your React app as  the rows in place are generated by basic components implementation.",
    images: {
      index: {
        desktop:
          "/assets/portfolio/desktop/image-portfolio-netflix-1000x1080.jpg",
      },
      detailhero: {
        desktop: "/assets/detail/desktop/image-netflix-hero-2220x1000.jpg",
      },
      preview: {
        desktopOne:
          "/assets/detail/desktop/image-netflix-preview-one-1278x868.jpg",
        desktopTwo:
          "/assets/detail/desktop/image-netflix-preview-two-1278x868.jpg",
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
