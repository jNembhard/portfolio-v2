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
  margin: 0 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    margin: 0 40px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 100px 150px 80px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 260px 150px 165px;
      }
    }
  }
`;

const OverflowHidden = styled.div`
  overflow: hidden;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 95px 0 96px 0;
    max-width: 540px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 100px 80px 70px 0;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 95px 125px 96px 0;
      }
    }
  }
`;
const ImageContainer = styled(motion.div)`
  display: block;
`;

const ContainerTwo = styled.div`
  margin: 32px 0 51px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 96px 40px 96px 46px;
    max-width: 339px;
    max-height: 100%;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 350px;
      height: 600px;
      margin: 100px 0 0 0;
      padding: 50px 0 -10px;
    }
  }
`;

const Title = styled(motion.h1)`
  letter-spacing: -0.36px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-top: 30px;
  }
`;

const Description = styled(motion.p)`
  font-size: 16px;
  margin-bottom: 51px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 40px;
  }
`;

const Button = styled(motion.button)`
  font-family: "Public Sans", sans-serif;
  width: 202px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  cursor: pointer;
  margin-bottom: 39px;
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
