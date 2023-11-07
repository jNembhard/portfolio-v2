import SEO from "../src/components/atoms/SEO";
import ContactButton from "../src/components/atoms/ContactButton";
import About from "../src/components/organisms/About";
import HomeHero from "../src/components/organisms/HomeHero";
import styled from "styled-components";
import { getAllBase64Urls } from "../src/lib/getBase64";
import { GetStaticProps } from "next";
import { homepageUrls } from "../src/utils/staticDataBlurUrls";

const StyledContactWrapper = styled.div`
  max-width: 90rem;
`;

export const getStaticProps: GetStaticProps = async () => {
  const blurUrls = await getAllBase64Urls(homepageUrls);

  return {
    props: {
      blurUrls: blurUrls,
    },
  };
};

type HomeProps = {
  blurUrls: string[];
};

export default function Home(props: HomeProps) {
  return (
    <>
      <SEO
        title="Home"
        metadescription="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        type="webapp"
      />
      <main>
        <HomeHero blurdata={props.blurUrls[0]} />
        <About blururls={props.blurUrls.slice(1, 4)} />
        <StyledContactWrapper>
          <ContactButton />
        </StyledContactWrapper>
      </main>
    </>
  );
}
