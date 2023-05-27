import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "../atoms/ContactButton";
import arrowleft from "../../public/assets/icons/arrow-left.svg";
import arrowright from "../../public/assets/icons/arrow-right.svg";
import { useEffect } from "react";
import { useMediaQuery } from "../../src/hooks/useMediaQuery";
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
} from "../../src/animations/content";

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
  margin: 0 2rem 3rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 5.875rem 2.5rem 5rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 5.875rem 5rem 7.188rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 5.875rem 10.313rem 7.188rem;
      }
    }
  }
`;

const ContainerOne = styled.div`
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    border-top: unset;
    border-bottom: unset;

    &:before {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
      width: 21.875rem;
    }

    &:after {
      content: "";
      display: block;
      position: -webkit-sticky;
      position: sticky;
      border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
      width: 21.875rem;
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 68.75rem;
`;

const OverflowHidden = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 2rem;
`;
const ImageContainerTwo = styled(motion.div)`
  max-width: 68.75rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 43.063rem;
  }
`;

const Summary = styled.div`
  margin-top: 2.5rem;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    margin-top: 7.188rem;
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
    max-height: 3.125rem;
  }
`;
const Title = styled(motion.h1)``;

const DesContainer = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 21.188rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 21.875rem;
    }
  }
`;

const DesContainerTwo = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 43rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 39.688rem;
    }
  }
`;

const Description = styled.p``;

const Skills = styled(motion.p)`
  color: ${({ theme }) => theme.colors.desaturatedCyan};
  font-weight: bold;
  font-size: 0.813rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: ${({ title }) =>
      title === "Summit"
        ? "-125px"
        : title === "Amazon Clone"
        ? "-125px"
        : "-150px"};
    padding-right: 24.438rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin-top: 1.438rem;
      padding-right: 7.813rem;
      width: 21.25rem;
    }
  }
`;

const WebWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 19.375rem;

  @media (min-width: 23.438rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WebButton = styled(motion.button)`
  width: 16.25rem;
  height: 3rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  margin: 0.75rem 0;
  box-shadow: none;
  border: 0.063rem solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;

  @media (min-width: 23.438rem) {
    width: 9.375rem;
    margin: 1.5rem 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
const Background = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: -1.875rem;
    margin-bottom: 11.25rem;
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
  margin-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-left: 29.063rem;
    max-width: 43.063rem;
    margin-top: -12.5rem;
  }
`;

const ContainerFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 69.375rem;
  }
`;

const Previous = styled.a`
  border: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 9.125rem;
  border-left: 0;
  padding-top: 0.938rem;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const Next = styled.a`
  border: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 9.125rem;
  border-right: 0;
  padding-top: 0.938rem;
  color: inherit;
  text-decoration: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const LeftTitle = styled.h3`
  line-height: 2.25rem;
  margin-bottom: -0.938rem;
`;

const RightTitle = styled.h3`
  text-align: right;
  line-height: 2.25rem;
  margin-bottom: -0.938rem;
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
