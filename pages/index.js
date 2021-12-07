import Head from "next/head";
import Image from "next/image";
import Header from "../components/molecules/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Jason Nembhard</title>
        <meta
          name="Jason Nembhard"
          content="A project portfolio created and maintained by Jason Nembhard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Homepage</h1>
    </div>
  );
}
