import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const Anchor = styled.a`
  text-decoration: none;
`;

const Arrow = styled.div`
  margin-left: -1.875rem;
  margin-right: 2.375rem;
`;

const Button = styled(motion.button)`
  width: 12.5rem;
  height: 3rem;
  font-family: "Public Sans", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.veryLightGreyBG};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const ContentContainer = styled.div`
  margin: 0 2rem 6rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    bottom: 0;
    left: 2.438rem;
    background-color: white;
    margin: unset;
    max-width: 32.125rem;
    max-height: 17.375rem;
    margin-bottom: auto;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 15.188rem;
      left: 5rem;
      bottom: -0.063rem;
      max-width: 27.813rem;
      max-height: 22.313rem;
      margin: unset;
      margin-left: auto;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 15.188rem;
        left: 10.188rem;
        bottom: -0.063rem;
        max-width: 27.813rem;
        max-height: 22.313rem;
        margin: unset;
      }
    }
  }
`;

const HeroWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: relative;
    width: 100%;
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
  max-height: 37.5rem;
`;

const OverflowHidden = styled.div`
  overflow: hidden;
  margin: 0 2rem 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 2.563rem 1.5rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 1.25rem 5rem 5rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 4.688rem 10.313rem 9.375rem;
        max-width: 69.375rem;
      }
    }
  }
`;

const Title = styled(motion.h1)`
  line-height: 2.625rem;
  letter-spacing: -0.023rem;
`;

const TitleWrapper = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 3.5rem 3.5rem 1.25rem 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 3.5rem 3.5rem 3.313rem 0;
    }
  }
`;

const NextImage = styled(Image)`
  max-height: 37.5rem;
`;

export {
  Anchor,
  Arrow,
  Button,
  ContentContainer,
  HeroWrap,
  ImageContainer,
  OverflowHidden,
  Title,
  TitleWrapper,
  NextImage,
};
