import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  buttonVariant,
  imageVariant,
} from "../../animations/content";
import mobilehero from "../../../public/assets/homepage/mobile/image-homepage-hero-mobile@2x.jpg";
import tablethero from "../../../public/assets/homepage/tablet/image-homepage-hero-tablet@2x.jpg";
import desktophero from "../../../public/assets/homepage/desktop/image-homepage-hero@2x.jpg";
import downarrow from "../../../public/assets/icons/down-arrows.svg";
import * as Styled from "../../styles/styled-organisms/StyledHomeHero";

export default function HomeHero() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [width, setWidth] = useState(1110);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }

    if (breakPoint1200) {
      setWidth(1110);
      setHeight(600);
    } else if (breakPoint767) {
      setWidth(688);
      setHeight(600);
    } else {
      setWidth(311);
      setHeight(271);
    }
  }, [inView, inView2, breakPoint1200, breakPoint767, controls, height, width]);

  return (
    <Styled.HeroWrap>
      <Styled.OverflowHidden ref={ref}>
        <Styled.ImageContainer
          animate={controls}
          initial="hidden"
          variants={imageVariant}
        >
          <Styled.NextImage
            src={
              breakPoint1200
                ? desktophero
                : breakPoint767
                ? tablethero
                : mobilehero
            }
            width={width}
            height={height}
            quality={100}
            placeholder="blur"
            alt="Hero"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Styled.ImageContainer>
      </Styled.OverflowHidden>
      <Styled.ContentContainer ref={ref2}>
        <Styled.TitleWrapper>
          <Styled.Title
            animate={controls}
            initial="hidden"
            variants={titleVariant}
          >
            Hey, I&#39;m Jason Nembhard and I love building beautiful websites
          </Styled.Title>
        </Styled.TitleWrapper>
        <Styled.Anchor href="#about">
          <Styled.Button
            animate={controls}
            initial="hidden"
            variants={buttonVariant}
          >
            <Styled.Arrow>
              <Image src={downarrow} alt="" />
            </Styled.Arrow>
            About Me
          </Styled.Button>
        </Styled.Anchor>
      </Styled.ContentContainer>
    </Styled.HeroWrap>
  );
}
