import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const Background = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: -1.875rem;
    margin-bottom: 11.25rem;
  }
`;

const ButtonWrap = styled.a`
  color: inherit;
  text-decoration: none;
`;

const CarouselWrap = styled.div`
  margin: 0 2rem 3rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 5.875rem 2.5rem 5rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 5.875rem 5rem 7.188rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 5.875rem 10.313rem 7.188rem;
      }
    }
  }
`;

const ContainerOne = styled.div`
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    border-top: unset;
    border-bottom: unset;

    &:before {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
      width: 21.875rem;
    }

    &:after {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
      width: 21.875rem;
    }
  }
`;

const ContainerThree = styled.div`
  margin-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-left: 29.063rem;
    max-width: 43.063rem;
    margin-top: -12.5rem;
  }
`;

const ContainerFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 69.375rem;
  }
`;

const DesContainer = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 21.188rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 21.875rem;
    }
  }
`;

const DesContainerTwo = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 43rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 39.688rem;
    }
  }
`;

const Description = styled.p``;

const ImageContainer = styled.div`
  max-width: 68.75rem;
`;

const ImageContainerTwo = styled(motion.div)`
  max-width: 68.75rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 43.063rem;
  }
`;

const LeftArrow = styled(Image)``;

const LeftTitle = styled.h3`
  line-height: 2.25rem;
  margin-bottom: -0.938rem;
`;

const Next = styled.a`
  border: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 9.125rem;
  border-right: 0;
  padding-top: 0.938rem;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const OverflowHidden = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Previous = styled.a`
  border: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 9.125rem;
  border-left: 0;
  padding-top: 0.938rem;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const Skills = styled(motion.p)`
  color: ${({ theme }) => theme.colors.desaturatedCyan};
  font-weight: bold;
  font-size: 0.813rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: ${({ title }) =>
      title === "Summit"
        ? "-125px"
        : title === "Amazon Clone"
        ? "-125px"
        : "-150px"};
    padding-right: 24.438rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin-top: 1.438rem;
      padding-right: 7.813rem;
      width: 21.25rem;
    }
  }
`;

const Subtitle = styled(motion.h3)``;

const Summary = styled.div`
  margin-top: 2.5rem;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    margin-top: 7.188rem;
  }
`;

const Title = styled(motion.h1)``;

const TitleSum = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: unset;
    }
  }
`;

const TitleWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 3.125rem;
  }
`;

const RightArrow = styled(Image)``;

const RightArrowWrap = styled.div`
  width: 100%;
  text-align: right;
`;

const RightTitle = styled.h3`
  text-align: right;
  line-height: 2.25rem;
  margin-bottom: -0.938rem;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
`;

const SubTwo = styled(Sub)`
  text-align: right;
`;

const WebButton = styled(motion.button)`
  width: 16.25rem;
  height: 3rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  margin: 0.75rem 0;
  box-shadow: none;
  border: 0.063rem solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;

  @media (min-width: 23.438rem) {
    width: 9.375rem;
    margin: 1.5rem 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const WebButton2 = styled(WebButton)`
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  color: ${({ theme }) => theme.colors.lightGrey};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const WebWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 19.375rem;

  @media (min-width: 23.438rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export {
  Background,
  ButtonWrap,
  CarouselWrap,
  ContainerOne,
  ContainerThree,
  ContainerFour,
  DesContainer,
  DesContainerTwo,
  Description,
  ImageContainer,
  ImageContainerTwo,
  LeftArrow,
  LeftTitle,
  Next,
  OverflowHidden,
  Previous,
  Skills,
  Subtitle,
  Summary,
  Title,
  TitleSum,
  TitleWrapper,
  RightArrow,
  RightArrowWrap,
  RightTitle,
  Sub,
  SubTwo,
  WebButton,
  WebButton2,
  WebWrapper,
};
