import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutWrap = styled.div`
  margin: 0 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    margin: 0 2.5rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 6.25rem 9.375rem 5rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 16.25rem 9.375rem 10.313rem;
      }
    }
  }
`;

const Button = styled(motion.button)`
  font-family: "Public Sans", sans-serif;
  width: 12.625rem;
  height: 3rem;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  border: 0.063rem solid ${({ theme }) => theme.colors.grayishDarkBlue};
  cursor: pointer;
  margin-bottom: 2.438rem;
  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.veryLightGreyBG};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
`;

const ButtonLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  text-decoration: none;
`;

const ContainerTwo = styled(motion.div)`
  margin: 2rem 0 3.188rem;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 6rem 2.5rem 6rem 2.875rem;
    max-width: 21.188rem;
    max-height: 100%;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 21.875rem;
      height: 37.5rem;
      margin: 6.25rem 0 0 0;
      padding: 3.125rem 0 -0.625rem;
    }
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 3.188rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 2.5rem;
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
`;

const NextImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const OverflowHidden = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 5.938rem 0 6rem 0;
    max-width: 33.75rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 6.25rem 5rem 4.375rem 0;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 5.938rem 7.813rem 6rem 0;
      }
    }
  }
`;

const Title = styled(motion.h1)`
  letter-spacing: -0.023rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-top: 1.875rem;
  }
`;

export {
  AboutWrap,
  Button,
  ButtonLink,
  ContainerTwo,
  Description,
  ImageContainer,
  NextImage,
  OverflowHidden,
  Title,
};
