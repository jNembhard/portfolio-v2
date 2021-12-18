import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import headshot from "../../public/assets/homepage/mobile/image-homepage-profile@2x.jpg";

export default function About() {
  return (
    <AboutWrap>
      <ImageContainer>
        <Image id="about" src={headshot} alt="headshot" />
      </ImageContainer>
      <Line />
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
      <Line />
      <ContainerThree>
        <Outro>Interested in doing a project together?</Outro>
        <Link href="/contact" passHref>
          <ButtonTwo>
            <a>contact me</a>
          </ButtonTwo>
        </Link>
      </ContainerThree>
    </AboutWrap>
  );
}

const AboutWrap = styled.div`
  margin: 0 32px;
`;
const ImageContainer = styled.div`
  margin-bottom: 32px;
`;

const ContainerTwo = styled.div`
  margin: 32px 0 51px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
`;

const Line = styled.hr`
  margin-bottom: 32px;
  border-color: ${({ theme }) => theme.colors.lightGrey};
`;

const Title = styled.h1`
  letter-spacing: -0.36px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 51px;
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

const ContainerThree = styled.div`
  margin: 115px 0 80px;
  text-align: center;
`;

const Outro = styled.h1`
  margin-bottom: 40px;
`;

const ButtonTwo = styled(Button)`
  width: 162px;
  text-transform: uppercase;
`;
