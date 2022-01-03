import Layout from "../components/organisms/Layout";
import styled from "styled-components";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <Main
          key={router.route}
          initial="initial"
          animate="enter"
          variants={variants}
          exit="exit"
        >
          <Component {...pageProps} />
        </Main>
      </Layout>
    </>
  );
}

export default MyApp;

const Main = styled(motion.main)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const variants = {
  initial: {
    opacity: 0,
    x: 300,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 75,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
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
