import Head from "next/head";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta
          name="Jason Nembhard - Portfolio"
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PIndex />
    </div>
  );
}
