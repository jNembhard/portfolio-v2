import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactWrap = styled.div`
  margin: 2.5rem 2rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 2.938rem 6.25rem;
    width: 56.25rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 2.938rem 10.313rem;
      width: 69.375rem;
      max-width: 69.375rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 2.938rem 10.313rem;
        width: 69.375rem;
        max-width: 69.375rem;
      }
    }
  }
`;

const Container = styled.div`
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    padding: 3rem 0;
  }
`;

const SummaryContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 43.063rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 39.688rem;
      margin-left: 9.063rem;
      margin-top: 0.625rem;
    }
  }
`;

const Title = styled(motion.h1)``;

const Description = styled(motion.p)`
  margin-bottom: 1.5rem;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: left;
  justify-content: space-between;
  width: 4.063rem;
  height: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Socials = styled(Image)``;

export {
  ContactWrap,
  Container,
  SummaryContainer,
  Title,
  Description,
  SocialContainer,
  Socials,
};
