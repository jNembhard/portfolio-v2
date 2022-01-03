import Head from "next/head";
import Image from "next/image";
import GetInTouch from "../components/molecules/GetInTouch";
import Email from "../components/organisms/Email";
import styled from "styled-components";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Jason Nembhard</title>
        <meta
          name="Contact - Jason Nembhard"
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <GetInTouch />
        <Email />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 1170px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 1440px;
      }
    }
  }
`;
