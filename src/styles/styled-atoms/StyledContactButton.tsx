import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const LinkButtonWrap = styled(Link)`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  text-decoration: none;
`;

const Button = styled(motion.button)`
  font-family: "Public Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10.125rem;
  height: 3rem;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  box-shadow: none;
  border: 0.063rem solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 12.5rem;
  }

  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Container = styled.div`
  text-align: center;
  margin: 0.5rem 2rem 5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    text-align: left;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: flex;
      align-items: center;
      text-align: left;
      margin: 0 5rem 6.875rem;
      max-width: 73.125rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 10.313rem 9.375rem;
        max-width: 90rem;
      }
    }
  }
`;

const Line = styled(motion.hr)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: inherit;
    margin: 0 2rem;
    width: 7.063rem;
    height: 0.063rem;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      width: 30rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        width: 33.375rem;
      }
    }
  }
`;

const Title = styled(motion.h1)`
  letter-spacing: -0.023rem;
  margin: 0 0.5rem 2.5rem;
`;

export { LinkButtonWrap, Button, Container, Line, Title };
