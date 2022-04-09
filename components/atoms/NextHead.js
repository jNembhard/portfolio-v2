import Head from "next/head";

export default function NextHead({ title, content }) {
  return (
    <Head>
      <title>Jason Nembhard | {title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
