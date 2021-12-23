import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import headshotmobile from "../../public/assets/homepage/mobile/image-homepage-profile.jpg";
import headshotmobile2 from "../../public/assets/homepage/mobile/image-homepage-profile@2x.jpg";
import headshottablet from "../../public/assets/homepage/tablet/image-homepage-profile.jpg";
import headshottablet2 from "../../public/assets/homepage/tablet/image-homepage-profile@2x.jpg";
import headshotdesktop from "../../public/assets/homepage/desktop/image-homepage-profile.jpg";
import headshotdesktop2 from "../../public/assets/homepage/desktop/image-homepage-profile@2x.jpg";

export default function About() {
  const breakPoint1280 = useMediaQuery(`(min-width: 1280px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  return (
    <AboutWrap>
      <ImageContainer>
        <Image
          id="about"
          src={
            breakPoint1280
              ? headshotdesktop2
              : breakPoint767
              ? headshottablet2
              : headshotmobile
          }
          quality={100}
          alt="headshot"
        />
      </ImageContainer>
      <ContainerTwo>
        <Title>About Me</Title>
        <Description>
          I&#39;m a front-end developer that focuses on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript. When writing
          JavaScript code, I mostly use React, but I can adapt to whatever tools
          are required. I&#39;m currently based in the US, but I&#39;m happy
          working remotely and have experience in remote teams. When I&#39;m not
          coding, you&#39;ll find me outdoors. I love being out in nature
          whether that&#39;s going for a walk, run or cycling. I&#39;d love you
          to check out my work.
        </Description>
        <Link href="/portfolio" passHref>
          <Button>
            <a>go to portfolio</a>
          </Button>
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
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 32px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 95px 0 96px 0;
  }
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
    /* padding-top: 96px; */
    /* padding-bottom: 96px; */
  }
`;

const Title = styled.h1`
  letter-spacing: -0.36px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 51px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  width: 202px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: ${({ theme }) => theme.colors.veryLightGreyBG};
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  cursor: pointer;
  margin-bottom: 39px;

  &:hover {
    color: ${({ theme }) => theme.colors.veryLightGreyBG};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
