import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "../../src/components/atoms/SEO";
import Carousel from "../../src/components/organisms/Carousel";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import createApolloClient from "../../src/utils/apollo-client";
import { GET_PORTFOLIOS } from "../../src/graphql/portfolioQueries";
import { IPortfolio } from "../../src/interfaces/Portfolio";
import { addPortfolioBlurDataUrls } from "../../src/lib/getBase64";

const StyledWrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient();

  const { data: portfolioData } = await client.query({
    query: GET_PORTFOLIOS,
    variables: { count: 11 },
  });

  const paths = portfolioData.portfolios.portfolio.map(
    (portfolio: IPortfolio) => ({
      params: { portfolio: portfolio.slug },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createApolloClient();

  const { data: portfolioData } = await client.query({
    query: GET_PORTFOLIOS,
    variables: { count: 11 },
  });

  const portfolios = portfolioData.portfolios.portfolio.find(
    (portfolio: IPortfolio) => portfolio.slug === params.portfolio
  );

  const updatedWithPortfolioBlurDataUrls = await addPortfolioBlurDataUrls(
    portfolios
  );
  return {
    props: {
      portfolio: updatedWithPortfolioBlurDataUrls,
    },
  };
};

const PortfolioIndex = ({ portfolio }) => {
  return (
    <div>
      <SEO
        title={portfolio.title}
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
