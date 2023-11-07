import createApolloClient from "../../src/utils/apollo-client";
import SEO from "../../src/components/atoms/SEO";
import PIndex from "../../src/components/organisms/PIndex";

import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { GET_PORTFOLIOS_MAIN } from "../../src/graphql/portfolioQueries";
import { IPortfolioHome } from "../../src/interfaces/Portfolio";
import { addPortfolioIndexBlurDataUrls } from "../../src/lib/getBase64";

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient();

  const { data: portfolioData } = await client.query({
    query: GET_PORTFOLIOS_MAIN,
    variables: { count: 10 },
  });

  const updatedWithPortfolioBlurDataUrls = await addPortfolioIndexBlurDataUrls(
    portfolioData.portfolios.portfolio
  );

  return {
    props: {
      portfolios: updatedWithPortfolioBlurDataUrls,
    },
  };
};

type PortfolioProps = {
  portfolios: IPortfolioHome[];
};

const Portfolio: NextPage = (props: PortfolioProps) => {
  return (
    <>
      <SEO
        title="Portfolio"
        metadescription="Jason Nembhard has a wide array of web and software development skills for you to leverage. Check out my latest projects."
        type="webapp"
      />
      <main>
        <PIndex portfolios={props.portfolios} />
      </main>
    </>
  );
};

export default Portfolio;
