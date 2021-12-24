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
          content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <About />
      <ContactButton />
    </div>
  );
}
