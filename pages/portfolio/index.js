import Head from "next/head";
import PIndex from "../../components/organisms/PIndex";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta
          name="Jason Nembhard - Portfolio"
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <PIndex />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
