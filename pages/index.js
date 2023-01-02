import SEO from "../components/atoms/SEO";
import ContactButton from "../components/atoms/ContactButton";
import About from "../components/organisms/About";
import HomeHero from "../components/organisms/HomeHero";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        metadescription="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        type="webapp"
      />
      <main>
        <HomeHero />
        <About />
        <ContactWrapper style={{ maxWidth: "1440px" }}>
          <ContactButton />
        </ContactWrapper>
      </main>
    </div>
  );
}

const ContactWrapper = styled.div`
  max-width: 1440px;
`;
