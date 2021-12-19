import styled from "styled-components";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Container>
      <Title>Interested in doing a project together?</Title>
      <Line />
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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;
const Title = styled.h1`
  letter-spacing: -0.36px;
  margin: 0 8px 40px;
`;

const Line = styled.hr`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: inherit;
    margin: 0 32px;
    width: 113px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 0;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 48px;
  font-size: 12px;
  letter-spacing: 2px;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: ${({ theme }) => theme.colors.veryLightGreyBG};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-transform: uppercase;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 200px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
