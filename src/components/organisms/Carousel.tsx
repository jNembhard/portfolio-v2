import Image from "next/image";
import ContactButton from "../atoms/ContactButton";
import arrowleft from "../../../public/assets/icons/arrow-left.svg";
import arrowright from "../../../public/assets/icons/arrow-right.svg";
import { useEffect } from "react";
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
import { IPortfolio } from "../../interfaces/Portfolio";

export default function Carousel(portfolio: IPortfolio) {
  const {
    title,
    description,
    projBackground,
    images,
    previous,
    next,
    subGreen,
    sources,
  } = portfolio;

  const previousSlug = previous.toLowerCase();
  const nextSlug = next.toLocaleLowerCase();

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
            src={
              process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
              images.detailhero.picture
            }
            width={2220}
            height={1000}
            placeholder="blur"
            blurDataURL={images.detailhero.blurDataUrl}
            alt="detail hero"
            style={{
              width: "100%",
              height: "auto",
            }}
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
                  {title}
                </Styled.Title>
                <Styled.TabletSkills
                  animate={controls}
                  initial="hidden"
                  variants={greenVariant}
                >
                  {subGreen}
                </Styled.TabletSkills>
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
              title={title}
              animate={controls}
              initial="hidden"
              variants={greenVariant}
            >
              {subGreen}
            </Styled.Skills>
            <Styled.WebWrapper>
              <Styled.ButtonWrap
                href={sources.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Styled.WebButton
                  animate={controls}
                  initial="hidden"
                  variants={buttonVariant}
                >
                  visit website
                </Styled.WebButton>
              </Styled.ButtonWrap>
              {sources.github && (
                <Styled.ButtonWrap
                  href={sources.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Styled.WebButton2
                    animate={controls}
                    initial="hidden"
                    variants={buttonVariantTwo}
                  >
                    view github
                  </Styled.WebButton2>
                </Styled.ButtonWrap>
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
                src={
                  process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
                  images.preview.previewOne.picture
                }
                width={1278}
                height={868}
                placeholder="blur"
                blurDataURL={images.preview.previewOne.blurDataUrl}
                alt="static preview one"
                style={{
                  width: "100%",
                  height: "auto",
                }}
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
                src={
                  process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
                  images.preview.previewTwo.picture
                }
                width={1278}
                height={868}
                quality={100}
                placeholder="blur"
                blurDataURL={images.preview.previewTwo.blurDataUrl}
                alt="static preview two"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Styled.ImageContainerTwo>
          </Styled.OverflowHidden>
        </Styled.ContainerThree>
        <Styled.ContainerFour>
          <Styled.Previous href={previousSlug}>
            <Styled.LeftArrow src={arrowleft} alt="" />
            <Styled.LeftTitle>{previous}</Styled.LeftTitle>
            <Styled.Sub>Previous Project</Styled.Sub>
          </Styled.Previous>
          <Styled.Next href={nextSlug}>
            <Styled.RightArrowWrap>
              <Styled.RightArrow src={arrowright} alt="" />
            </Styled.RightArrowWrap>
            <Styled.RightTitle>{next}</Styled.RightTitle>
            <Styled.SubTwo>Next Project</Styled.SubTwo>
          </Styled.Next>
        </Styled.ContainerFour>
      </Styled.CarouselWrap>
      <ContactButton />
    </>
  );
}
