import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartContainer from "@/components/CartContainer";
const cart = () => {
  return (
    <div>
      <Head>
        <title>cart</title>
      </Head>
      <Navbar />
      <CartContainer />
      <Footer />
    </div>
  );
};

export default cart;
