import React from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchContainer from "@/components/SearchContainer";

const search = () => {
  const router = useRouter();
  const query = router.query.q;
  console.log(query, typeof query);
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      <Navbar />
      <SearchContainer />
      <Footer />
    </div>
  );
};

export default search;
