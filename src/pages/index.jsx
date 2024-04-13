import Head from "next/head";
import { Inter } from "@next/font/google";
import MainLayout from "@layouts/Main";
import Homepage from "@components/Home/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> My E-com </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>
      <main>
        <MainLayout>
          <Homepage />
        </MainLayout>
      </main>
    </>
  );
}
