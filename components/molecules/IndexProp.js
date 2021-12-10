import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function IndexProp({ name, image, description }) {
  return (
    <IndexWrap>
      <ImageContainer>
        <Image
          src={image}
          alt={name}
          width={311}
          height={288}
          layout="responsive"
          quality={100}
        />
      </ImageContainer>
      <Container>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <ProjectButton>
          <Link href="/portfolioindex">
            <a>view project</a>
          </Link>
        </ProjectButton>
      </Container>
    </IndexWrap>
  );
}

const IndexWrap = styled.div`
  margin: 0 32px;
`;
const ImageContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 72px;
`;

const Title = styled.h1`
  margin-bottom: 24px;
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
  background-color: ${({ theme }) => theme.colors.veryLightGreyBG};
  text-transform: uppercase;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  }
`;
