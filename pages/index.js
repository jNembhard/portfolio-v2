import Head from "next/head";
import ContactButton from "../components/atoms/ContactButton";
import About from "../components/organisms/About";
import HomeHero from "../components/organisms/HomeHero";

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
      <HomeHero />
      <About />
      <ContactButton />
    </div>
  );
}
