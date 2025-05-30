import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "@layouts/Main";
import SearchPage from "@components/search/index";
const index = () => {
  const router = useRouter();
  const query = router?.query?.q;
  return (
    <>
      <Head>
        <title>{query} | MyEcom</title>
      </Head>
      <MainLayout>
        <SearchPage />
      </MainLayout>
    </>
  );
};

export default index;
