import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { logoVariant } from "../../animations/content";
import styled from "styled-components";
import logo from "../../public/assets/logo.svg";
import Menu from "../atoms/Menu";
import BurgerNav from "../atoms/BurgerNav";

export default function Header() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visibleLogo");
    }
  });

  return (
    <NavHeader>
      <Container ref={ref}>
        <Link href="/" passHref>
          <ATag animate={controls} initial="hidden" variants={logoVariant}>
            <Image src={logo} alt="Logo" />
          </ATag>
        </Link>
        <BurgerNav />
        <Menu />
      </Container>
    </NavHeader>
  );
}

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem 2.5rem 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem 2.5rem 2.938rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 4rem 5rem 3.375rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 4rem 10.313rem 3.375rem;
      }
    }
  }
`;
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 80rem;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      max-width: 90rem;
    }
  }
`;

const ATag = styled(motion.a)`
  min-width: 10%;
`;
