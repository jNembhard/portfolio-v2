import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  buttonVariant,
  imageVariant,
} from "../../animations/content";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function IndexProp({ id, name, image, description, slug }) {
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
    <IndexWrap
      style={
        breakPoint767 && id % 2 == 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "unset" }
      }
    >
      <ImageContainer
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
          <ButtonWrapper ref={ref}>
            <ButtonContainer
              animate={controls}
              initial="hidden"
              variants={imageVariant}
            >
              <ScaleWrapper
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  priority
                  src={image}
                  width={breakPoint1200 ? 540 : breakPoint767 ? 339 : 311}
                  height={breakPoint1200 ? 500 : breakPoint767 ? 314 : 288}
                  quality={100}
                  layout={breakPoint767 ? "" : "responsive"}
                  placeholder="blur"
                  blurDataURL={image}
                  alt={name}
                />
              </ScaleWrapper>
            </ButtonContainer>
          </ButtonWrapper>
        </Link>
      </ImageContainer>

      <Container ref={ref2}>
        <Title animate={controls} initial="hidden" variants={titleVariant}>
          {name}
        </Title>
        <Description
          animate={controls}
          initial="hidden"
          variants={descriptionVariant}
        >
          {description}
        </Description>
        <Link href={`/portfolio/${slug}`} passHref>
          <ButtonWrapper>
            <ProjectButton
              animate={controls}
              initial="hidden"
              variants={buttonVariant}
            >
              view project
            </ProjectButton>
          </ButtonWrapper>
        </Link>
      </Container>
    </IndexWrap>
  );
}

const IndexWrap = styled.div`
  margin: 0 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 80px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 930px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 1015px;
      }
    }
  }
`;

const ButtonContainer = styled(motion.div)``;

const ScaleWrapper = styled(motion.div)``;

const ImageContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 72px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-bottom: unset;
    max-width: 281px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 350px;
    }
  }
`;

const Title = styled(motion.h1)`
  margin-bottom: 24px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 30px;
  }
`;

const Description = styled(motion.p)`
  margin-bottom: 24px;
`;

const ProjectButton = styled(motion.button)`
  width: 175px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: white;
  text-transform: uppercase;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 50px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  }
`;

const ButtonWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;
