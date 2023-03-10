import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import CarouselComp from "@/components/CarouselComp";
import Suggestions from "@/components/Suggestions";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My E-com</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Navbar />
          <CarouselComp/>
          <Suggestions/>
          <CategoryGrid/>
          {/* <Test/> */}
          <Footer/>
        </div>
      </main>
    </>
  );
}
