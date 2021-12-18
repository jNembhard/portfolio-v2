import Head from "next/head";
import Image from "next/image";
import PIndex from "../../components/organisms/PIndex";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio - Jason Nembhard</title>
        <meta name="Jason Nembhard" content="Jason Nembhard's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PIndex />
    </div>
  );
}
