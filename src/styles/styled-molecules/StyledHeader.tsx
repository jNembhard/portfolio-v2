import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const LogoLink = styled(motion(Link))`
  min-width: 10%;
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

export { LogoLink, Container, NavHeader };
