import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  lineVariant,
  descriptionVariant,
  imageVariant,
  buttonVariant,
} from "../../animations/content";
import headshotmobile2 from "../../public/assets/homepage/mobile/image-homepage-jason-profile.jpg";
import headshottablet2 from "../../public/assets/homepage/tablet/image-homepage-jason-profile.jpg";
import headshotdesktop2 from "../../public/assets/homepage/desktop/image-homepage-jason-profile.jpg";

export default function About() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }
  });

  return (
    <AboutWrap ref={ref}>
      <OverflowHidden>
        <ImageContainer
          animate={controls}
          initial="hidden"
          variants={imageVariant}
        >
          <Image
            id="about"
            src={
              breakPoint1200
                ? headshotdesktop2
                : breakPoint767
                ? headshottablet2
                : headshotmobile2
            }
            width={breakPoint1200 ? 540 : breakPoint767 ? 281 : 311}
            height={breakPoint767 ? 600 : 346}
            quality={100}
            placeholder="blur"
            layout={breakPoint767 ? "" : "responsive"}
            alt="headshot"
          />
        </ImageContainer>
      </OverflowHidden>
      <ContainerTwo
        ref={ref2}
        animate={controls}
        initial="hidden"
        variants={lineVariant}
      >
        <Title animate={controls} initial="hidden" variants={titleVariant}>
          About Me
        </Title>
        <Description
          animate={controls}
          initial="hidden"
          variants={descriptionVariant}
        >
          I&#39;m a front-end developer that focuses on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript. When writing
          JavaScript code, I mostly use React frameworks, but I can adapt to
          whatever tools are required. I&#39;m currently based in the US, but
          I&#39;m happy working remotely and have experience in remote teams.
          When I&#39;m not coding, you&#39;ll find me at the gym or catching up
          on some anime. I&#39;d love for you to check out my work.
        </Description>
        <Link href="/portfolio" passHref>
          <ButtonWrap>
            <Button
              animate={controls}
              initial="hidden"
              variants={buttonVariant}
            >
              go to portfolio
            </Button>
          </ButtonWrap>
        </Link>
      </ContainerTwo>
    </AboutWrap>
  );
}

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
const ImageContainer = styled(motion.div)`
  display: block;
`;

const ContainerTwo = styled.div`
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

const Title = styled(motion.h1)`
  letter-spacing: -0.023rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-top: 1.875rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 3.188rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 2.5rem;
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
  }
`;

const ButtonWrap = styled.a`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  text-decoration: none;
`;
