import Head from "next/head";
import MainLayout from "@layouts/Main";
import Orders from "@components/orders/Orders";
const index = () => {
  return (
    <>
      <Head>
        <title>Orders | MyEcom</title>
      </Head>
      <MainLayout>
        <Orders />
      </MainLayout>
    </>
  );
};

export default index;
