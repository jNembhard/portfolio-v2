import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  lineVariant,
  buttonVariant,
} from "../../animations/content";
import styled from "styled-components";
import Link from "next/link";

export default function ContactButton() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  return (
    <Container ref={ref}>
      <Title animate={controls} initial="hidden" variants={titleVariant}>
        Interested in doing a project together?
      </Title>
      <Line animate={controls} initial="hidden" variants={lineVariant} />

      <Link href="/contact" passHref>
        <Button animate={controls} initial="hidden" variants={buttonVariant}>
          contact me
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 8px 32px 80px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    text-align: left;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: flex;
      align-items: center;
      text-align: left;
      margin: 0 80px 110px;
      max-width: 1170px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 165px 150px;
        max-width: 1440px;
      }
    }
  }
`;
const Title = styled(motion.h1)`
  letter-spacing: -0.36px;
  margin: 0 8px 40px;
`;

const Line = styled(motion.hr)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: inherit;
    margin: 0 32px;
    width: 113px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      width: 480px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        width: 534px;
      }
    }
  }
`;

const Button = styled(motion.a)`
  font-family: "Public Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-transform: uppercase;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 200px;
  }

  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
