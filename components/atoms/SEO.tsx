import Head from "next/head";

export default function SEO({
  title,
  metadescription,
  type,
}: {
  title: string;
  metadescription: string;
  type: string;
}) {
  return (
    <Head>
      <title>{title} | Jason Nembhard</title>
      <meta name="description" content={metadescription} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | Jason Nembhard`} />
      <meta property="og:description" content={metadescription} />
      <meta name="twitter:creator" content="Jason Nembhard" />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={`${title} | Jason Nembhard`} />
      <meta name="twitter:description" content={metadescription} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
