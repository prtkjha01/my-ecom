import Head from "next/head";
import MainLayout from "@layouts/Main";

const index = () => {
  return (
    <>
      <Head>
        <title>Orders | MyEcom</title>
      </Head>
      <MainLayout>Index</MainLayout>
    </>
  );
};

export default index;
