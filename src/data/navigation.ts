import github from "../../public/assets/icons/github.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";

interface INavLinks {
  id: number;
  name: string;
  url: string;
}

interface ISocial {
  id: number;
  name: string;
  media: string;
  url: string;
}

const navLinks: INavLinks[] = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    name: "contact me",
    url: "/contact",
  },
];

const socials: ISocial[] = [
  {
    id: 1,
    name: "github",
    media: github,
    url: "https://github.com/jNembhard",
  },
  {
    id: 2,
    name: "linkedin",
    media: linkedin,
    url: "https://www.linkedin.com/in/jasonnembhard1/",
  },
];

export { navLinks, socials };
