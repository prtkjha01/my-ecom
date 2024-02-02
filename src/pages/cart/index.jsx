import Head from "next/head";
import MainLayout from "@layouts/Main";
import React from "react";
import Cart from "@components/cart/index";
const index = () => {
  return (
    <>
      <Head>
        <title>Cart | My Ecom</title>
      </Head>
      <MainLayout>
        <Cart />
      </MainLayout>
    </>
  );
};

export default index;
