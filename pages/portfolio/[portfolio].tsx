import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "../../src/components/atoms/SEO";
import Carousel from "../../src/components/organisms/Carousel";
import { portfoliodata } from "../../src/data/portfoliodata";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const StyledWrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfoliodata.map((portfolio) => ({
    params: { portfolio: portfolio.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const portfolio = portfoliodata.find(
    (portfolio) => portfolio.slug === params.portfolio
  );
  return { props: { portfolio } };
};

const PortfolioIndex = ({ portfolio }) => {
  return (
    <div>
      <SEO
        title={portfolio.name}
        metadescription={portfolio.description}
        type="webapp"
      />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <StyledWrapper>
          <Carousel {...portfolio} />
        </StyledWrapper>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioIndex;
