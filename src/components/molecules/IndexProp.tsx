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
import { IIndexProp } from "../../models/Portfolio";

export default function IndexProp(data: IIndexProp) {
  const { id, name, slug, images, description } = data;

  const breakPoint1440 = useMediaQuery(`(min-width: 1440px)`);
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
      const breakPoints = [
        breakPoint1440 && id % 2 == 0,
        breakPoint1440 && id % 2 != 0,
        breakPoint1200 && id % 2 == 0,
        breakPoint1200 && id % 2 != 0,
        breakPoint767 && id % 2 == 0,
        breakPoint767 && id % 2 != 0,
      ];

      switch (true) {
        case breakPoints[0]:
          setMargin({ marginLeft: "7.813rem", marginRight: "0" });
          break;
        case breakPoints[1]:
          setMargin({ marginLeft: "0", marginRight: "7.813rem" });
          break;
        case breakPoints[2]:
          setMargin({ marginLeft: "5.625rem", marginRight: "0" });
          break;
        case breakPoints[3]:
          setMargin({ marginLeft: "0", marginRight: "5.625rem" });
          break;
        case breakPoints[4]:
          setMargin({ marginLeft: "4.375rem", marginRight: "0" });
          break;
        case breakPoints[5]:
          setMargin({ marginLeft: "0", marginRight: "4.375rem" });
          break;
        default:
          setMargin({ marginLeft: "0", marginRight: "0" });
          break;
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
  }, [
    id,
    inView,
    inView2,
    breakPoint1440,
    breakPoint1200,
    breakPoint767,
    controls,
  ]);

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
                  src={images.index.desktop}
                  width={size.width}
                  height={size.height}
                  quality={100}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={images.index.desktop}
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
