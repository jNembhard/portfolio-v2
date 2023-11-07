import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { AnimatePresence, motion } from "framer-motion";
import { Ibarra_Real_Nova, Public_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { variants } from "../../animations/variants";

const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

const styles = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  h1,
  h2,
  h3 {
    font-family: "Ibarra Real Nova", serif;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2 {
    font-weight: 700;
    font-size: clamp(2.5rem, 90%, 3.125rem);
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
    line-height: 1.875rem;
    font-size: 0.938rem;
  }

  @font-face {
    font-family: "Ibarra Real Nova";
    src: url(${ibarra}) format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Ibarra Real Nova";
    src: url(${ibarra}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Public Sans";
    src: url(${publicSans}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
const GlobalStyle = createGlobalStyle`
  ${styles}
`;

const theme = {
  colors: {
    desaturatedCyan: "#5FB4A2",
    darkBlue: "#203A4C",
    grayishDarkBlue: "#33323D",
    veryLightGreyBG: "#FAFAFA",
    lightGrey: "#EAEAEB",
    brightRed: "#F43030",
  },
  breakpoints: {
    tablet: `(min-width: 767px)`,
    laptop: `(min-width: 1200px)`,
    desktop: `(min-width: 1440px)`,
  },
};

const Main = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Main
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={variants}
            exit="pageExit"
          >
            {children}
          </Main>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}
