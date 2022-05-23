import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "../atoms/ContactButton";
import arrowleft from "../../public/assets/icons/arrow-left.svg";
import arrowright from "../../public/assets/icons/arrow-right.svg";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  lineVariant,
  descriptionVariant,
  buttonVariant,
  buttonVariantTwo,
  greenVariant,
  imageVariant,
} from "../../animations/content";

export default function Carousel({
  name,
  detail,
  description,
  previewOne,
  previewTwo,
  previous,
  next,
  previousSlug,
  projBackground,
  nextSlug,
  subGreen,
  sourceOne,
  sourceTwo,
}) {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls.start("visibles");
    }
  });

  return (
    <>
      <CarouselWrap>
        <ImageContainer>
          <Image
            priority
            src={detail}
            width={breakPoint1200 ? 1110 : breakPoint767 ? 689 : 311}
            height={breakPoint1200 ? 500 : breakPoint767 ? 310 : 140}
            layout="responsive"
            quality={100}
            placeholder="blur"
            blurDataURL={detail}
            alt="detail hero"
          />
        </ImageContainer>
        <Summary>
          <ContainerOne>
            <TitleSum>
              <TitleWrapper ref={ref}>
                <Title
                  animate={controls}
                  initial="hidden"
                  variants={titleVariant}
                >
                  {name}
                </Title>
              </TitleWrapper>
              <DesContainer
                animate={controls}
                initial="hidden"
                variants={descriptionVariant}
              >
                <Description>{description}</Description>
              </DesContainer>
            </TitleSum>
            <Skills
              title={name}
              animate={controls}
              initial="hidden"
              variants={greenVariant}
            >
              {subGreen}
            </Skills>
            <WebWrapper>
              <Link href={sourceOne} passHref>
                <ButtonWrap target="_blank" rel="noopener noreferrer">
                  <WebButton
                    animate={controls}
                    initial="hidden"
                    variants={buttonVariant}
                  >
                    visit website
                  </WebButton>
                </ButtonWrap>
              </Link>
              {sourceTwo && (
                <Link href={sourceTwo} passHref>
                  <ButtonWrap target="_blank" rel="noopener noreferrer">
                    <WebButton2
                      animate={controls}
                      initial="hidden"
                      variants={buttonVariantTwo}
                    >
                      view github
                    </WebButton2>
                  </ButtonWrap>
                </Link>
              )}
            </WebWrapper>
          </ContainerOne>
          <Background>
            <Subtitle
              animate={controls}
              initial="hidden"
              variants={titleVariant}
            >
              Project Background
            </Subtitle>
            <DesContainerTwo
              animate={controls}
              initial="hidden"
              variants={descriptionVariant}
            >
              <Description>{projBackground}</Description>
            </DesContainerTwo>
          </Background>
        </Summary>
        <ContainerThree ref={ref2}>
          <Subtitle animate={controls} initial="hidden" variants={titleVariant}>
            Static Previews
          </Subtitle>
          <OverflowHidden>
            <ImageContainerTwo
              animate={controls}
              initial="hidden"
              variants={imageVariant}
            >
              <Image
                src={previewOne}
                width={breakPoint1200 ? 635 : breakPoint767 ? 689 : 311}
                height={breakPoint1200 ? 400 : breakPoint767 ? 434 : 196}
                layout="responsive"
                quality={100}
                placeholder="blur"
                blurDataURL={previewOne}
                alt="static preview one"
              />
            </ImageContainerTwo>
          </OverflowHidden>
          <OverflowHidden>
            <ImageContainerTwo
              animate={controls}
              initial="hidden"
              variants={imageVariant}
            >
              <Image
                src={previewTwo}
                width={breakPoint1200 ? 635 : breakPoint767 ? 689 : 311}
                height={breakPoint1200 ? 400 : breakPoint767 ? 434 : 196}
                layout="responsive"
                quality={100}
                placeholder="blur"
                blurDataURL={previewTwo}
                alt="static preview two"
              />
            </ImageContainerTwo>
          </OverflowHidden>
        </ContainerThree>
        <ContainerFour>
          <Link href={previousSlug} passHref>
            <Previous>
              <LeftArrow src={arrowleft} alt="" />
              <LeftTitle>{previous}</LeftTitle>
              <Sub>Previous Project</Sub>
            </Previous>
          </Link>
          <Link href={nextSlug} passHref>
            <Next>
              <Test>
                <RightArrow src={arrowright} alt="" />
              </Test>
              <RightTitle>{next}</RightTitle>
              <SubTwo>Next Project</SubTwo>
            </Next>
          </Link>
        </ContainerFour>
      </CarouselWrap>
      <ContactButton />
    </>
  );
}

const CarouselWrap = styled.div`
  margin: 0 32px 48px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 94px 40px 80px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 94px 80px 115px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 94px 165px 115px;
      }
    }
  }
`;

const ContainerOne = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    border-top: unset;
    border-bottom: unset;

    &:before {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
      width: 350px;
    }

    &:after {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
      width: 350px;
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 1100px;
`;

const OverflowHidden = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 32px;
`;
const ImageContainerTwo = styled(motion.div)`
  max-width: 1100px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 689px;
  }
`;

const Summary = styled.div`
  margin-top: 40px;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    margin-top: 115px;
  }
`;

const TitleSum = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: unset;
    }
  }
`;

const TitleWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 50px;
  }
`;
const Title = styled(motion.h1)``;

const DesContainer = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 339px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 350px;
    }
  }
`;

const DesContainerTwo = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 688px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 635px;
    }
  }
`;

const Description = styled.p``;

const Skills = styled(motion.p)`
  color: ${({ theme }) => theme.colors.desaturatedCyan};
  font-weight: bold;
  font-size: 13px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: ${({ title }) =>
      title === "Summit"
        ? "-125px"
        : title === "Amazon Clone"
        ? "-125px"
        : "-150px"};
    padding-right: 391px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin-top: 23px;
      padding-right: 125px;
      width: 340px;
    }
  }
`;

const WebWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 310px;

  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WebButton = styled(motion.button)`
  width: 260px;
  height: 48px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 12px 0;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;

  @media (min-width: 375px) {
    width: 150px;
    margin: 24px 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
const Background = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: -30px;
    margin-bottom: 180px;
  }
`;

const WebButton2 = styled(WebButton)`
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  color: ${({ theme }) => theme.colors.lightGrey};

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const ButtonWrap = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Subtitle = styled(motion.h3)``;

const ContainerThree = styled.div`
  margin-bottom: 64px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-left: 465px;
    max-width: 689px;
    margin-top: -200px;
  }
`;

const ContainerFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 1110px;
  }
`;

const Previous = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 146px;
  border-left: 0;
  padding-top: 15px;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const Next = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 146px;
  border-right: 0;
  padding-top: 15px;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const LeftTitle = styled.h3`
  line-height: 36px;
  margin-bottom: -15px;
`;

const RightTitle = styled.h3`
  text-align: right;
  line-height: 36px;
  margin-bottom: -15px;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
`;

const SubTwo = styled(Sub)`
  text-align: right;
`;

const LeftArrow = styled(Image)``;
const RightArrow = styled(Image)``;

const Test = styled.div`
  width: 100%;
  text-align: right;
`;
