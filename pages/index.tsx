import SEO from "../src/components/atoms/SEO";
import ContactButton from "../src/components/atoms/ContactButton";
import About from "../src/components/organisms/About";
import HomeHero from "../src/components/organisms/HomeHero";
import styled from "styled-components";

const StyledContactWrapper = styled.div`
  max-width: 90rem;
`;

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
        <StyledContactWrapper>
          <ContactButton />
        </StyledContactWrapper>
      </main>
    </div>
  );
}
