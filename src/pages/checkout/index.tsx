import Head from "next/head";
import MainLayout from "@layouts/Main";
import Checkout from "@components/checkout/index";
const index = () => {
  return (
    <>
      <Head>
        <title>Checkout | MyEcom</title>
      </Head>
      <MainLayout>
        <Checkout />
      </MainLayout>
    </>
  );
};

export default index;
