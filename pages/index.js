import Head from "next/head";
import ContactButton from "../components/atoms/ContactButton";
import About from "../components/organisms/About";
import HomeHero from "../components/organisms/HomeHero";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Jason Nembhard</title>
        <meta
          name="Jason Nembhard"
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero />
      <About />
      <Wrapper style={{ maxWidth: "1440px" }}>
        <ContactButton />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 1440px;
`;
