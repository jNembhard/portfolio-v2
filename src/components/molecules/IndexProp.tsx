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
import * as Styled from "../../styles/styled-molecules/StyledIndexProp";
import { IPortfolioHome } from "../../interfaces/Portfolio";
import extractNumbers from "../../utils/extractNumbers";

export default function IndexProp(data: IPortfolioHome) {
  const { portfolioID, title, slug, images, description } = data;

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
        breakPoint1440 && extractNumbers(portfolioID) % 2 == 0,
        breakPoint1440 && extractNumbers(portfolioID) % 2 != 0,
        breakPoint1200 && extractNumbers(portfolioID) % 2 == 0,
        breakPoint1200 && extractNumbers(portfolioID) % 2 != 0,
        breakPoint767 && extractNumbers(portfolioID) % 2 == 0,
        breakPoint767 && extractNumbers(portfolioID) % 2 != 0,
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
      if (breakPoint767 && extractNumbers(portfolioID) % 2 == 0) {
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
    portfolioID,
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
        <Styled.ButtonWrapper ref={ref} href={`/portfolio/${slug}`}>
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
                priority={portfolioID === "portfolio-1" ? true : false}
                src={
                  process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
                  images.index.picture
                }
                width={size.width}
                height={size.height}
                quality={100}
                placeholder="blur"
                blurDataURL={images.index.blurDataUrl}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Styled.ScaleWrapper>
          </Styled.ButtonContainer>
        </Styled.ButtonWrapper>
      </Styled.ImageContainer>
      <Styled.Container ref={ref2}>
        <Styled.Title
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          {title}
        </Styled.Title>
        <Styled.Description
          animate={controls}
          initial="hidden"
          variants={descriptionVariant}
        >
          {description}
        </Styled.Description>
        <Styled.ButtonWrapper href={`/portfolio/${slug}`}>
          <Styled.ProjectButton
            animate={controls}
            initial="hidden"
            variants={buttonVariant}
          >
            view project
          </Styled.ProjectButton>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Styled.IndexWrap>
  );
}
