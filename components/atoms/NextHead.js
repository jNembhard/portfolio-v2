import Head from "next/head";

export default function NextHead({ title, metadescription }) {
  return (
    <Head>
      <title>{title} | Jason Nembhard</title>
      <meta name="description" content={metadescription} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
