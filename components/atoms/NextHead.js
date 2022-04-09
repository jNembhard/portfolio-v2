import Head from "next/head";

export default function NextHead({ title, metadescription }) {
  return (
    <Head>
      <title>Jason Nembhard | {title}</title>
      <meta name="description" content={metadescription} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
