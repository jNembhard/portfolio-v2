import SEO from "../../components/atoms/SEO";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
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
}
