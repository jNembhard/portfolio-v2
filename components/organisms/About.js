import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import headshotmobile2 from "../../public/assets/homepage/mobile/image-homepage-profile@2x.jpg";
import headshottablet2 from "../../public/assets/homepage/tablet/image-homepage-profile@2x.jpg";
import headshotdesktop2 from "../../public/assets/homepage/desktop/image-homepage-profile@2x.jpg";

export default function About() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  return (
    <AboutWrap>
      <ImageContainer>
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
          <a>
            <Button>go to portfolio</Button>
          </a>
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
const ImageContainer = styled.div`
  display: block;
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

const Title = styled.h1`
  letter-spacing: -0.36px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-top: 30px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 51px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  font-family: "Public Sans";
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
  color: inherit;
  text-decoration: none;
`;
