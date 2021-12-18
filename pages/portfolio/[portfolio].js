import Head from "next/head";
import Carousel from "../../components/organisms/Carousel";
import { portfoliodata } from "../../data/portfoliodata";

export async function getStaticPaths() {
  const paths = portfoliodata.map((portfolio) => ({
    params: { portfolio: portfolio.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const portfolio = portfolio.find(
    (portfolio) => portfolio.name === params.portfolio
  );

  return { props: { portfolio } };
}

export default function PortfolioIndex({ portfolio }) {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta name="Jason Nembhard" content="Jason Nembhard's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel
        name={portfolio.name}
        description={portfolio.description}
        previewOne={portfolio.images.preview.mobileOne}
        previewTwo={portfolio.images.preview.mobileTwo}
        previous={portfolio.previous}
        next={portfolio.next}
        baseSlug={`portfolio/[portfolio]`}
        previousSlug={`/${portfolio.previous.toLowerCase()}`}
        nextSlug={`/${portfolio.next.toLowerCase()}`}
      />
    </div>
  );
}
