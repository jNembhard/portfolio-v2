import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function IndexProp({ id, name, image, description, slug }) {
  const breakPoint1280 = useMediaQuery(`(min-width: 1280px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  return (
    <IndexWrap
      style={
        breakPoint767 && id % 2 == 0
          ? { flexDirection: "unset" }
          : { flexDirection: "row-reverse" }
      }
    >
      <ImageContainer
        style={
          breakPoint767 && id % 2 == 0
            ? { paddingRight: "50px" }
            : breakPoint767 && id % 2 > 0
            ? { paddingLeft: "50px" }
            : { paddingRight: "unset", paddingLeft: "unset" }
        }
      >
        <Image
          src={image}
          alt={name}
          height={breakPoint1280 ? 500 : breakPoint767 ? 314 : 288}
          quality={100}
          width={breakPoint1280 ? 540 : breakPoint767 ? 339 : 311}
        />
      </ImageContainer>
      <Container>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Link href={`/portfolio/${slug}`} passHref>
          <ProjectButton>
            <a>view project</a>
          </ProjectButton>
        </Link>
      </Container>
    </IndexWrap>
  );
}

const IndexWrap = styled.div`
  margin: 0 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 80px 40px;
    margin: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 32px;
  position: relative;

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
  }
`;

const Title = styled.h1`
  margin-bottom: 24px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 30px;
  }
`;

const Description = styled.p`
  margin-bottom: 24px;
`;

const ProjectButton = styled.button`
  width: 175px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: white;
  text-transform: uppercase;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 50px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  }
`;
