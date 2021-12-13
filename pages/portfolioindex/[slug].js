import Head from "next/head";
import Carousel from "../../components/organisms/Carousel";
import { portfolio_data } from "../../data/portfolio_data";

export const getStaticPaths = async () => {
  const paths = Object.keys(portfolio_data).map((projectSlug) => ({
    params: { slug: projectSlug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const project = portfolio_data[params.slug];
  return { props: { project: project } };
};

export default function PortfolioIndex() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta name="Jason Nembhard" content="Jason Nembhard's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel
        name={project.name}
        description={project.description}
        previewOne={project.images.preview.mobileOne}
        previewTwo={project.images.preview.mobileTwo}
        previous={project.previous}
        next={project.next}
        baseSlug={`/portfolioindex/[slug]`}
        previousSlug={`/portfolioindex/${project.previous.toLowerCase()}`}
        nextSlug={`/portfolioindex/${project.next.toLowerCase()}`}
      />
    </div>
  );
}
