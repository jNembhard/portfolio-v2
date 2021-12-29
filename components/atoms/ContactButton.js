import styled from "styled-components";
import Link from "next/link";

export default function ContactButton() {
  return (
    <Container>
      <Title>Interested in doing a project together?</Title>
      <Line />

      <Link href="/contact" passHref>
        <Button>
          <a>contact me</a>
        </Button>
      </Link>
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
    @media ${({ theme }) => theme.breakpoints.desktop} {
      display: flex;
      align-items: center;
      text-align: left;
      margin: 0 165px 150px;
    }
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

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 534px;
    }
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
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-transform: uppercase;
  cursor: pointer;

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
