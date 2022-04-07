import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  buttonVariant,
  imageVariant,
} from "../../animations/content";
import mobilehero from "../../public/assets/homepage/mobile/image-homepage-hero@2x.jpg";
import tablethero from "../../public/assets/homepage/tablet/image-homepage-hero@2x.jpg";
import desktophero from "../../public/assets/homepage/desktop/image-homepage-hero@2x.jpg";
import downarrow from "../../public/assets/icons/down-arrows.svg";

export default function HomeHero() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }
  });

  return (
    <HeroWrap>
      <OverflowHidden ref={ref}>
        <ImageContainer
          animate={controls}
          initial="hidden"
          variants={imageVariant}
        >
          <Image
            src={
              breakPoint1200
                ? desktophero
                : breakPoint767
                ? tablethero
                : mobilehero
            }
            width={breakPoint1200 ? 1110 : breakPoint767 ? 688 : 311}
            height={breakPoint767 ? 600 : 271}
            quality={100}
            layout="responsive"
            placeholder="blur"
            alt="Hero"
          />
        </ImageContainer>
      </OverflowHidden>
      <ContentContainer ref={ref2}>
        <TitleWrapper>
          <Title animate={controls} initial="hidden" variants={titleVariant}>
            Hey, I&#39;m Jason Nembhard and I love building beautiful websites
          </Title>
        </TitleWrapper>
        <Anchor href="#about">
          <Button animate={controls} initial="hidden" variants={buttonVariant}>
            <Arrow>
              <Image src={downarrow} alt="" />
            </Arrow>
            About Me
          </Button>
        </Anchor>
      </ContentContainer>
    </HeroWrap>
  );
}

const HeroWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: relative;
    width: 100%;
  }
`;

const OverflowHidden = styled.div`
  overflow: hidden;
  margin: 0 32px 24px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 41px 24px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 20px 80px 80px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 75px 165px 150px;
        max-width: 1110px;
      }
    }
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
`;

const ContentContainer = styled.div`
  margin: 0 32px 96px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    bottom: 0;
    left: 39px;
    background-color: white;
    margin: unset;
    max-width: 514px;
    max-height: 278px;
    margin-bottom: auto;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 243px;
      left: 80px;
      bottom: -1px;
      max-width: 445px;
      max-height: 357px;
      margin: unset;
      margin-left: auto;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 243px;
        left: 163px;
        bottom: -1px;
        max-width: 445px;
        max-height: 357px;
        margin: unset;
      }
    }
  }
`;

const TitleWrapper = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 56px 56px 20px 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 56px 56px 53px 0;
    }
  }
`;

const Title = styled(motion.h1)`
  line-height: 42px;
  letter-spacing: -0.36px;
`;

const Button = styled(motion.button)`
  width: 200px;
  height: 48px;
  font-family: "Public Sans", sans-serif;
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
