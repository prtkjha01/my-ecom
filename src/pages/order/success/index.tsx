import React from "react";
import Head from "next/head";
import MainLayout from "@layouts/Main";
import OrderSuccess from "@/components/order/OrderSuccess";
const index = () => {
  return (
    <>
      <Head>
        <title>MyEcom</title>
      </Head>
      <MainLayout>
        <OrderSuccess />
      </MainLayout>
    </>
  );
};

export default index;
