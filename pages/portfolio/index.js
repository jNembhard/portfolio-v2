import Head from "next/head";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Jason Nembhard | Portfolio</title>
        <meta
          name="description"
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <PIndex />
      </main>
    </div>
  );
}
