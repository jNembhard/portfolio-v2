import NextHead from "../../components/atoms/NextHead";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
  return (
    <div>
      <NextHead
        title="Portfolio"
        metadescription="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
      />
      <main>
        <PIndex />
      </main>
    </div>
  );
}
