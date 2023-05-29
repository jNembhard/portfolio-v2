import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const ButtonContainer = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 21.25rem;
    height: 19.688rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      width: 31.25rem;
      height: 33.75rem;
    }
  }
`;

const ButtonWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 4.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-bottom: unset;
    max-width: 17.563rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 21.875rem;
    }
  }
`;

const Description = styled(motion.p)`
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

const IndexWrap = styled.div`
  margin: 0 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 58.125rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 63.438rem;
      }
    }
  }
`;

const ProjectButton = styled(motion.button)`
  width: 10.938rem;
  height: 3rem;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1.5rem;
  border: 0.063rem solid ${({ theme }) => theme.colors.grayishDarkBlue};
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: white;
  text-transform: uppercase;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 3.125rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  }
`;

const ScaleWrapper = styled(motion.div)`
  width: 100%;
  height: auto;
`;

const Title = styled(motion.h1)`
  margin-bottom: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 1.875rem;
  }
`;

const SpecialImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export {
  ButtonContainer,
  ButtonWrapper,
  Container,
  Description,
  ImageContainer,
  IndexWrap,
  ProjectButton,
  Title,
  ScaleWrapper,
  SpecialImage,
};
