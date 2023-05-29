import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  buttonVariant,
  imageVariant,
} from "../../animations/content";
import Link from "next/link";
import * as Styled from "../../styles/styled-molecules/StyledIndexProp";

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

  const initialMargin = {
    marginLeft: "7.813rem",
    marginRight: "7.813rem",
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const [size, setSize] = useState({ width: 540, height: 500 });
  const [margin, setMargin] = useState(initialMargin);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    let subscribe = true;

    const handleSubscribe = () => {
      if (breakPoint1200) {
        setSize({ width: 540, height: 500 });
      } else if (breakPoint767) {
        setSize({ width: 339, height: 314 });
      } else {
        setSize({ width: 311, height: 288 });
      }
    };

    const handleMargin = () => {
      if (breakPoint1200 && id % 2 == 0) {
        setMargin({ marginLeft: "7.813rem", marginRight: "0" });
      } else if (breakPoint1200 && id % 2 != 0) {
        setMargin({ marginLeft: "0", marginRight: "7.813rem" });
      } else if (breakPoint767 && id % 2 == 0) {
        setMargin({ marginLeft: "4.375rem", marginRight: "0" });
      } else if (breakPoint767 && id % 2 != 0) {
        setMargin({ marginLeft: "0", marginRight: "4.375rem" });
      } else {
        setMargin({ marginLeft: "0", marginRight: "0" });
      }
    };

    const handleFlex = () => {
      if (breakPoint767 && id % 2 == 0) {
        setDirection("row-reverse");
      } else {
        setDirection("row");
      }
    };

    if (inView) {
      controls.start("visibles");
    }
    if (inView2) {
      controls.start("visible");
    }

    if (subscribe) {
      handleSubscribe();
      handleMargin();
      handleFlex();
    }

    return () => {
      subscribe = false;
    };
  }, [id, inView, inView2, breakPoint1200, breakPoint767, controls]);

  return (
    <Styled.IndexWrap style={{ flexDirection: direction as "row-reverse" }}>
      <Styled.ImageContainer
        style={{
          marginLeft: margin.marginLeft,
          marginRight: margin.marginRight,
        }}
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
                <Styled.SpecialImage
                  priority={id === 1 ? true : false}
                  src={image}
                  width={size.width}
                  height={size.height}
                  quality={100}
                  layout="responsive"
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
