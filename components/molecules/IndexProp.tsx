import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  buttonVariant,
  imageVariant,
} from "../../src/animations/content";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import * as Styled from "../molecules/molecule-styled/StyledIndexProp";

export default function IndexProp({
  id,
  name,
  image,
  description,
  slug,
}: {
  id: number;
  name: string;
  image: string;
  description: string;
  slug: string;
}) {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }
  });

  return (
    <Styled.IndexWrap
      style={
        breakPoint767 && id % 2 == 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "unset" }
      }
    >
      <Styled.ImageContainer
        style={
          breakPoint1200 && id % 2 == 0
            ? { marginLeft: "125px" }
            : breakPoint1200 && id % 2 != 0
            ? { marginRight: "125px" }
            : breakPoint767 && id % 2 == 0
            ? { marginLeft: "70px" }
            : breakPoint767 && id % 2 != 0
            ? { marginRight: "70px" }
            : { marginRight: "unset" }
        }
      >
        <Link href={`/portfolio/${slug}`} passHref>
          <Styled.ButtonWrapper ref={ref}>
            <Styled.ButtonContainer
              animate={controls}
              initial="hidden"
              variants={imageVariant}
            >
              <Styled.ScaleWrapper
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  priority
                  src={image}
                  width={breakPoint1200 ? 540 : breakPoint767 ? 339 : 311}
                  height={breakPoint1200 ? 500 : breakPoint767 ? 314 : 288}
                  quality={100}
                  layout={breakPoint767 ? "intrinsic" : "responsive"}
                  placeholder="blur"
                  blurDataURL={image}
                  alt={name}
                />
              </Styled.ScaleWrapper>
            </Styled.ButtonContainer>
          </Styled.ButtonWrapper>
        </Link>
      </Styled.ImageContainer>

      <Styled.Container ref={ref2}>
        <Styled.Title
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          {name}
        </Styled.Title>
        <Styled.Description
          animate={controls}
          initial="hidden"
          variants={descriptionVariant}
        >
          {description}
        </Styled.Description>
        <Link href={`/portfolio/${slug}`} passHref>
          <Styled.ButtonWrapper>
            <Styled.ProjectButton
              animate={controls}
              initial="hidden"
              variants={buttonVariant}
            >
              view project
            </Styled.ProjectButton>
          </Styled.ButtonWrapper>
        </Link>
      </Styled.Container>
    </Styled.IndexWrap>
  );
}
