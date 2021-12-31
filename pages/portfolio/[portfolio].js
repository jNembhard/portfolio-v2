import Head from "next/head";
import Carousel from "../../components/organisms/Carousel";
import { portfoliodata } from "../../data/portfoliodata";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
  const breakPoint1280 = useMediaQuery(`(min-width: 1280px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

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
        detail={
          breakPoint1280
            ? portfolio.images.detailhero.desktop
            : breakPoint767
            ? portfolio.images.detailhero.tablet
            : portfolio.images.detailhero.mobile
        }
        previewOne={
          breakPoint1280
            ? portfolio.images.preview.desktopOne
            : breakPoint767
            ? portfolio.images.preview.tabletOne
            : portfolio.images.preview.mobileOne
        }
        previewTwo={
          breakPoint1280
            ? portfolio.images.preview.desktopTwo
            : breakPoint767
            ? portfolio.images.preview.tabletTwo
            : portfolio.images.preview.mobileTwo
        }
        previous={portfolio.previous}
        next={portfolio.next}
        previousSlug={portfolio.previous.toLowerCase()}
        nextSlug={portfolio.next.toLowerCase()}
      />
    </div>
  );
}
