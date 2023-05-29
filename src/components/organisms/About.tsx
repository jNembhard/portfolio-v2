import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImageData } from "next/image";
import Link from "next/link";
import {
  titleVariant,
  lineVariant,
  descriptionVariant,
  imageVariant,
  buttonVariant,
} from "../../animations/content";
import headshotmobile2 from "../../../public/assets/homepage/mobile/image-homepage-jason-profile.jpg";
import headshottablet2 from "../../../public/assets/homepage/tablet/image-homepage-jason-profile.jpg";
import headshotdesktop2 from "../../../public/assets/homepage/desktop/image-homepage-jason-profile.jpg";
import * as Styled from "../../styles/styled-organisms/StyledAbout";

export default function About() {
  const breakPoint1200 = useMediaQuery("(min-width: 1200px)");
  const breakPoint767 = useMediaQuery("(min-width: 767px)");

  const initialStates = {
    widthInitial: breakPoint1200 ? 540 : breakPoint767 ? 281 : 311,
    heightInitial: breakPoint1200 ? 600 : breakPoint767 ? 600 : 346,
    imageInitial: breakPoint1200
      ? headshotdesktop2
      : breakPoint767
      ? headshottablet2
      : headshotmobile2,
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [image, setImage] = useState<StaticImageData>(
    initialStates.imageInitial
  );

  useEffect(() => {
    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }

    let handleImage = () => {
      breakPoint1200
        ? setImage(headshotdesktop2)
        : breakPoint767
        ? setImage(headshottablet2)
        : setImage(headshotmobile2);
    };

    handleImage();
  }, [inView, inView2, breakPoint1200, breakPoint767, controls]);

  return (
    <Styled.AboutWrap ref={ref}>
      <Styled.OverflowHidden>
        <Styled.ImageContainer
          animate={controls}
          initial="hidden"
          variants={imageVariant}
        >
          <Styled.NextImage
            id="about"
            src={image}
            quality={100}
            placeholder="blur"
            alt="headshot"
          />
        </Styled.ImageContainer>
      </Styled.OverflowHidden>
      <Styled.ContainerTwo
        ref={ref2}
        animate={controls}
        initial="hidden"
        variants={lineVariant}
      >
        <Styled.Title
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          About Me
        </Styled.Title>
        <Styled.Description
          animate={controls}
          initial="hidden"
          variants={descriptionVariant}
        >
          I&#39;m a front-end developer that focuses on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript. When writing
          JavaScript code, I mostly use React frameworks, but I can adapt to
          whatever tools are required. I&#39;m currently based in the US, but
          I&#39;m happy working remotely and have experience in remote teams.
          When I&#39;m not coding, you&#39;ll find me at the gym or catching up
          on some anime. I&#39;d love for you to check out my work.
        </Styled.Description>
        <Link href="/portfolio" passHref>
          <Styled.ButtonWrap>
            <Styled.Button
              animate={controls}
              initial="hidden"
              variants={buttonVariant}
            >
              go to portfolio
            </Styled.Button>
          </Styled.ButtonWrap>
        </Link>
      </Styled.ContainerTwo>
    </Styled.AboutWrap>
  );
}
