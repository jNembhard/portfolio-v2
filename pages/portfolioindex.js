import Head from "next/head";
import Carousel from "../components/organisms/Carousel";

export default function PortfolioIndex() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta name="Jason Nembhard" content="Jason Nembhard's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
    </div>
  );
}
