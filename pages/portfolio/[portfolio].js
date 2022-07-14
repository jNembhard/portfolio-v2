import SEO from "../../components/atoms/SEO";
import Carousel from "../../components/organisms/Carousel";
import { portfoliodata } from "../../data/portfoliodata";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

export async function getStaticPaths() {
  const paths = portfoliodata.map((portfolio) => ({
    params: { portfolio: portfolio.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const portfolio = portfoliodata.find(
    (portfolio) => portfolio.slug === params.portfolio
  );
  return { props: { portfolio } };
}

export default function PortfolioIndex({ portfolio }) {
  return (
    <div>
      <SEO title={portfolio.name} metadescription={portfolio.description} />
      <AnimatePresence
        exitBeforeEnter
        // onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Wrapper>
          <Carousel
            name={portfolio.name}
            description={portfolio.description}
            detail={portfolio.images.detailhero.desktop}
            previewOne={portfolio.images.preview.desktopOne}
            previewTwo={portfolio.images.preview.desktopTwo}
            previous={portfolio.previous}
            next={portfolio.next}
            sourceOne={portfolio.sources.website}
            sourceTwo={portfolio.sources.github}
            projBackground={portfolio.projBackground}
            subGreen={portfolio.subGreen}
            previousSlug={portfolio.previous.toLowerCase()}
            nextSlug={portfolio.next.toLowerCase()}
          />
        </Wrapper>
      </AnimatePresence>
    </div>
  );
}

const Wrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
