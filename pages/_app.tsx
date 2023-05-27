import Layout from "../components/organisms/Layout";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Layout>
        <AnimatePresence>
          <Main
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={variants}
            exit="pageExit"
          >
            <Component {...pageProps} />
          </Main>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

const Main = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const variants = {
  pageInitial: {
    opacity: 0,
    y: 100,
  },
  pageAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 75,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  pageExit: {
    opacity: 0,
    y: 300,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 80,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};
