import { useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  titleVariant,
  lineVariant,
  descriptionVariant,
  imageVariant,
  buttonVariant,
} from "../../animations/content";

import * as Styled from "../../styles/styled-organisms/StyledAbout";

export default function About({ blururls }: { blururls: string[] }) {
  const breakPoint1200 = useMediaQuery("(min-width: 1200px)");
  const breakPoint767 = useMediaQuery("(min-width: 767px)");

  const headshotmobile2 =
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
    "assets/homepage/mobile/image-homepage-jason-profile.jpg";
  const headshottablet2 =
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
    "assets/homepage/tablet/image-homepage-jason-profile.jpg";
  const headshotdesktop2 =
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
    "assets/homepage/desktop/image-homepage-jason-profile.jpg";

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
  const [image, setImage] = useState(initialStates.imageInitial);

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
          <Image
            id="about"
            src={
              process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
              "assets/homepage/desktop/image-homepage-jason-profile.jpg"
            }
            width={540}
            height={600}
            quality={100}
            placeholder="blur"
            blurDataURL={blururls[2]}
            alt="headshot"
            style={{
              width: "100%",
              height: "auto",
            }}
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
        <Styled.ButtonLink href="/portfolio">
          <Styled.Button
            animate={controls}
            initial="hidden"
            variants={buttonVariant}
          >
            go to portfolio
          </Styled.Button>
        </Styled.ButtonLink>
      </Styled.ContainerTwo>
    </Styled.AboutWrap>
  );
}
