import SEO from "../../components/atoms/SEO";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
  return (
    <div>
      <SEO
        title="Portfolio"
        metadescription="Jason Nembhard has a wide array of web and software development skills for you to leverage. Check out his latest projects."
      />
      <main>
        <PIndex />
      </main>
    </div>
  );
}
