import Head from "next/head";
import Image from "next/image";
import GetInTouch from "../components/molecules/GetInTouch";
import Email from "../components/organisms/Email";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Jason Nembhard</title>
        <meta
          name="Contact - Jason Nembhard"
          content="Contact Jason Nembhard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetInTouch />
      <Email />
    </div>
  );
}
