import { createGlobalStyle, ThemeProvider } from "styled-components";
import IbarraRegular from "../../styles/fonts/IbarraRealNova/IbarraRealNova-Regular.ttf";
import IbarraBold from "../../styles/fonts/IbarraRealNova/IbarraRealNova-Bold.ttf";
import PublicSansRegular from "../../styles/fonts/PublicSans/PublicSans-Regular.ttf";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
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
    font-family: "IbarraReal Nova";
    src: url(${IbarraBold}) format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Ibarra Real Nova";
    src: url(${IbarraRegular}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Public Sans";
    src: url(${PublicSansRegular}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
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

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}
