import Image from "next/image";
import styled from "styled-components";
import { useEffect } from "react";
import { useMediaQuery } from "../../src/hooks/useMediaQuery";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  buttonVariant,
  imageVariant,
} from "../../src/animations/content";
import mobilehero from "../../public/assets/homepage/mobile/image-homepage-hero-mobile@2x.jpg";
import tablethero from "../../public/assets/homepage/tablet/image-homepage-hero-tablet@2x.jpg";
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
  margin: 0 2rem 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 2.563rem 1.5rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 1.25rem 5rem 5rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 4.688rem 10.313rem 9.375rem;
        max-width: 69.375rem;
      }
    }
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
`;

const ContentContainer = styled.div`
  margin: 0 2rem 6rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    bottom: 0;
    left: 2.438rem;
    background-color: white;
    margin: unset;
    max-width: 32.125rem;
    max-height: 17.375rem;
    margin-bottom: auto;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 15.188rem;
      left: 5rem;
      bottom: -0.063rem;
      max-width: 27.813rem;
      max-height: 22.313rem;
      margin: unset;
      margin-left: auto;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 15.188rem;
        left: 10.188rem;
        bottom: -0.063rem;
        max-width: 27.813rem;
        max-height: 22.313rem;
        margin: unset;
      }
    }
  }
`;

const TitleWrapper = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 3.5rem 3.5rem 1.25rem 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 3.5rem 3.5rem 3.313rem 0;
    }
  }
`;

const Title = styled(motion.h1)`
  line-height: 2.625rem;
  letter-spacing: -0.023rem;
`;

const Button = styled(motion.button)`
  width: 12.5rem;
  height: 3rem;
  font-family: "Public Sans", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
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
  margin-left: -1.875rem;
  margin-right: 2.375rem;
`;

const Anchor = styled.a`
  text-decoration: none;
`;
