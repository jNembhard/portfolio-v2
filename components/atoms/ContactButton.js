import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Container>
      <Title>Interested in doing a project together?</Title>
      <Button>
        <Link href="/contact">
          <a>contact me</a>
        </Link>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 8px 32px 80px;
`;
const Title = styled.h1`
  letter-spacing: -0.36px;
  margin: 0 8px 40px;
`;

const Button = styled.button`
  width: 162px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: ${({ theme }) => theme.colors.veryLightGreyBG};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
