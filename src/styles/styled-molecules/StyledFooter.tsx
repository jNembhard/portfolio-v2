import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const FooterWrap = styled.footer`
  width: 100%;
  height: 22.125rem;
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  font-family: "Public Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 5.313rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      height: 100%;
    }
  }
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 73.125rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 90rem;
      }
    }
  }
`;

const Logo = styled(Image)`
  filter: invert(100%) sepia(0%) saturate(169%) hue-rotate(155deg)
    brightness(101%) contrast(98%);
`;

const LogoContainer = styled(motion.div)`
  margin: 0.625rem 2.125rem 1.875rem;
  width: 3.813rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 3rem 0 1.25rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 3rem 0 0;
    }
  }
`;

const NavContainer = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.veryLightGreyBG};
  padding: 0 0.438rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    padding: unset;
    margin: 2.063rem 0;
    width: 19.313rem;
  }
`;

const NavList = styled(motion.li)`
  list-style-type: none;
  margin: 0 0.438rem 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 1.313rem 0 0;
  }
`;

const LinkList = styled.a`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;

  &:hover {
    color: ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 4.063rem;
  height: 1.5rem;
  margin: 0 6.563rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    margin: 1.75rem 2.5rem 1.75rem 13.875rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 1.75rem 2.5rem 1.75rem 40.188rem;
    }
  }
`;

const Socials = styled(Image)`
  filter: invert(100%) sepia(0%) saturate(169%) hue-rotate(155deg)
    brightness(101%) contrast(98%);
`;

export {
  Container,
  FooterWrap,
  LinkList,
  Logo,
  LogoContainer,
  NavContainer,
  NavList,
  Socials,
  SocialContainer,
};
