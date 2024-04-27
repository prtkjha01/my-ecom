import Head from "next/head";
import MainLayout from "@layouts/Main";
import { useRouter } from "next/router";
import CategoryProducts from "@components/categoryProducts/index";
const index = () => {
  const router = useRouter();
  const category = router?.query?.category;

  return (
    <>
      <Head>
        <title>{category} | MyEcom</title>
      </Head>
      <MainLayout>
        <CategoryProducts />
      </MainLayout>
    </>
  );
};

export default index;
