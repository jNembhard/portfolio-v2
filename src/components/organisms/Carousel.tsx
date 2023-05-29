import Image from "next/image";
import Link from "next/link";
import ContactButton from "../atoms/ContactButton";
import arrowleft from "../../../public/assets/icons/arrow-left.svg";
import arrowright from "../../../public/assets/icons/arrow-right.svg";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  buttonVariant,
  buttonVariantTwo,
  greenVariant,
  imageVariant,
} from "../../animations/content";
import * as Styled from "../../styles/styled-organisms/StyledCarousel";

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
}: {
  name: string;
  detail: string;
  description: string;
  previewOne: string;
  previewTwo: string;
  previousSlug: string;
  previous: string;
  next: string;
  projBackground: string;
  nextSlug: string;
  subGreen: string;
  sourceOne: string;
  sourceTwo: string;
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
      <Styled.CarouselWrap>
        <Styled.ImageContainer>
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
        </Styled.ImageContainer>
        <Styled.Summary>
          <Styled.ContainerOne>
            <Styled.TitleSum>
              <Styled.TitleWrapper ref={ref}>
                <Styled.Title
                  animate={controls}
                  initial="hidden"
                  variants={titleVariant}
                >
                  {name}
                </Styled.Title>
              </Styled.TitleWrapper>
              <Styled.DesContainer
                animate={controls}
                initial="hidden"
                variants={descriptionVariant}
              >
                <Styled.Description>{description}</Styled.Description>
              </Styled.DesContainer>
            </Styled.TitleSum>
            <Styled.Skills
              title={name}
              animate={controls}
              initial="hidden"
              variants={greenVariant}
            >
              {subGreen}
            </Styled.Skills>
            <Styled.WebWrapper>
              <Link href={sourceOne} passHref>
                <Styled.ButtonWrap target="_blank" rel="noopener noreferrer">
                  <Styled.WebButton
                    animate={controls}
                    initial="hidden"
                    variants={buttonVariant}
                  >
                    visit website
                  </Styled.WebButton>
                </Styled.ButtonWrap>
              </Link>
              {sourceTwo && (
                <Link href={sourceTwo} passHref>
                  <Styled.ButtonWrap target="_blank" rel="noopener noreferrer">
                    <Styled.WebButton2
                      animate={controls}
                      initial="hidden"
                      variants={buttonVariantTwo}
                    >
                      view github
                    </Styled.WebButton2>
                  </Styled.ButtonWrap>
                </Link>
              )}
            </Styled.WebWrapper>
          </Styled.ContainerOne>
          <Styled.Background>
            <Styled.Subtitle
              animate={controls}
              initial="hidden"
              variants={titleVariant}
            >
              Project Background
            </Styled.Subtitle>
            <Styled.DesContainerTwo
              animate={controls}
              initial="hidden"
              variants={descriptionVariant}
            >
              <Styled.Description>{projBackground}</Styled.Description>
            </Styled.DesContainerTwo>
          </Styled.Background>
        </Styled.Summary>
        <Styled.ContainerThree ref={ref2}>
          <Styled.Subtitle
            animate={controls}
            initial="hidden"
            variants={titleVariant}
          >
            Static Previews
          </Styled.Subtitle>
          <Styled.OverflowHidden>
            <Styled.ImageContainerTwo
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
            </Styled.ImageContainerTwo>
          </Styled.OverflowHidden>
          <Styled.OverflowHidden>
            <Styled.ImageContainerTwo
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
            </Styled.ImageContainerTwo>
          </Styled.OverflowHidden>
        </Styled.ContainerThree>
        <Styled.ContainerFour>
          <Link href={previousSlug} passHref>
            <Styled.Previous>
              <Styled.LeftArrow src={arrowleft} alt="" />
              <Styled.LeftTitle>{previous}</Styled.LeftTitle>
              <Styled.Sub>Previous Project</Styled.Sub>
            </Styled.Previous>
          </Link>
          <Link href={nextSlug} passHref>
            <Styled.Next>
              <Styled.RightArrowWrap>
                <Styled.RightArrow src={arrowright} alt="" />
              </Styled.RightArrowWrap>
              <Styled.RightTitle>{next}</Styled.RightTitle>
              <Styled.SubTwo>Next Project</Styled.SubTwo>
            </Styled.Next>
          </Link>
        </Styled.ContainerFour>
      </Styled.CarouselWrap>
      <ContactButton />
    </>
  );
}
