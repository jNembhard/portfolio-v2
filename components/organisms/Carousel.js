import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
// import mobiledetail from "../../public/assets/detail/mobile/image-manage-hero@2x.jpg";
import ContactButton from "../atoms/ContactButton";
import arrowleft from "../../public/assets/icons/arrow-left.svg";
import arrowright from "../../public/assets/icons/arrow-right.svg";

export default function Carousel({
  name,
  detail,
  description,
  previewOne,
  previewTwo,
  previous,
  next,
  previousSlug,
  nextSlug,
}) {
  return (
    <>
      <CarouselWrap>
        <ImageContainer>
          <Image
            src={detail}
            width={311}
            height={140}
            layout="responsive"
            quality={100}
            alt="detail hero"
          />
        </ImageContainer>
        <ContainerOne>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Skills>
            Interaction Design / Front End Development HTML/CSS/JS
          </Skills>
          <WebButton>
            <Link href="/">
              <a>visit website</a>
            </Link>
          </WebButton>
        </ContainerOne>
        <Background>
          <Subtitle>Project Background</Subtitle>
          <Description>
            This project was a front-end challenge from Frontend Mentor.
            It&#39;s a platform that enables you to practice building websites
            to a design and project brief. Each challenge includes mobile and
            desktop designs to show how the website should look at different
            screen sizes. Creating these projects has helped me refine my
            workflow and solve real-world coding problems. I&#39;ve learned
            something new with each project, helping me to improve and adapt my
            style.
          </Description>
        </Background>
        <ContainerThree>
          <Subtitle>Static Previews</Subtitle>
          <ImageContainerTwo>
            <Image
              src={previewOne}
              width={313}
              height={197}
              layout="responsive"
              style="margin-bottom: 32px"
              quality={100}
              alt="static preview one"
            />
          </ImageContainerTwo>
          <ImageContainerTwo>
            <Image
              src={previewTwo}
              width={313}
              height={197}
              layout="responsive"
              style="margin-bottom: 32px"
              quality={100}
              alt="static preview two"
            />
          </ImageContainerTwo>
        </ContainerThree>
        <ContainerFour>
          <Link href={previousSlug} passHref>
            <Previous>
              <LeftArrow src={arrowleft} alt="" />
              <LeftTitle>{previous}</LeftTitle>
              <Sub>Previous Project</Sub>
            </Previous>
          </Link>
          <Link href={nextSlug} passHref>
            <Next>
              <Test>
                <RightArrow src={arrowright} alt="" />
              </Test>
              <RightTitle>{next}</RightTitle>
              <SubTwo>Next Project</SubTwo>
            </Next>
          </Link>
        </ContainerFour>
      </CarouselWrap>
      <ContactButton />
    </>
  );
}

const CarouselWrap = styled.div`
  margin: 0 32px 48px;
`;

const ContainerOne = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-top: 40px;
`;
const ImageContainer = styled.div``;

const ImageContainerTwo = styled(ImageContainer)`
  margin-bottom: 32px;
`;

const Title = styled.h1``;
const Description = styled.p``;
const Skills = styled.p`
  color: ${({ theme }) => theme.colors.desaturatedCyan};
  font-weight: bold;
  font-size: 13px;
`;
const WebButton = styled.button`
  width: 178px;
  height: 48px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 24px 0;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: ${({ theme }) => theme.colors.veryLightGreyBG};
  color: ${({ theme }) => theme.colors.darkBlue};

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
const Background = styled.div``;

const Subtitle = styled.h3``;

const ContainerThree = styled.div`
  margin-bottom: 64px;
`;

const ContainerFour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`;

const Previous = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 146px;
  border-left: 0;
  padding-top: 15px;
  color: inherit;
  text-decoration: none;
`;

const Next = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 50%;
  height: 146px;
  border-right: 0;
  padding-top: 15px;
  color: inherit;
  text-decoration: none;
`;

const LeftTitle = styled.h3`
  line-height: 36px;
  margin-bottom: -15px;
`;

const RightTitle = styled.h3`
  text-align: right;
  line-height: 36px;
  margin-bottom: -15px;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
`;

const SubTwo = styled(Sub)`
  text-align: right;
`;

const LeftArrow = styled(Image)``;
const RightArrow = styled(Image)``;

const Test = styled.div`
  width: 100%;
  text-align: right;
`;
