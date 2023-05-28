import SEO from "../../src/components/atoms/SEO";
import PIndex from "../../src/components/organisms/PIndex";
import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <SEO
        title="Portfolio"
        metadescription="Jason Nembhard has a wide array of web and software development skills for you to leverage. Check out my latest projects."
        type="webapp"
      />
      <main>
        <PIndex />
      </main>
    </div>
  );
};

export default Portfolio;
