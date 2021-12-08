import Image from "next/image";
import styled from "styled-components";
import mobilehero from "../../public/assets/homepage/mobile/image-homepage-hero@2x.jpg";
import downarrow from "../../public/assets/icons/down-arrows.svg";

export default function HomeHero() {
  return (
    <>
      <ImageContainer>
        <Image src={mobilehero} layout="responsive" alt="Hero" />
      </ImageContainer>
      <TitleContainer>
        <Title>
          Hey, I&#39;m Jason Nembhard and I love building beautiful websites
        </Title>
        <Anchor href="#about">
          <Button>
            <Arrow>
              <Image src={downarrow} alt="" />
            </Arrow>
            About Me
          </Button>
        </Anchor>
      </TitleContainer>
    </>
  );
}

const ImageContainer = styled.div`
  margin: 0 32px 24px;
`;

const TitleContainer = styled.div`
  margin: 0 32px 96px;
`;

const Title = styled.h1`
  line-height: 42px;
  letter-spacing: -0.36px;
`;

const Button = styled.button`
  width: 200px;
  height: 48px;
  font-family: "Public Sans";
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.veryLightGreyBG};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const Arrow = styled.div`
  margin-left: -30px;
  margin-right: 38px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;
