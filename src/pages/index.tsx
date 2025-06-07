import Head from "next/head";
import Script from "next/script";
import MainLayout from "@/layouts/Main";
import Homepage from "@/components/Home/index";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> My E-com </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="lazyOnload"
      />
      <main>
        <MainLayout>
          <Homepage />
        </MainLayout>
      </main>
    </>
  );
};

export default Home;
