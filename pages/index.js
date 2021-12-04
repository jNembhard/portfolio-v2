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

      <main>
        <Header />
        <h1>Just a test</h1>
        <p>Just a test</p>
      </main>

      <footer></footer>
    </div>
  );
}
