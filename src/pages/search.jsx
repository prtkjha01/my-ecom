import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchContainer from "@/components/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/search";

const search = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.q;
  console.log(query, typeof query);
  async function getProductsFromStore() {
    await dispatch(getProducts);
  }
  // useEffect(() => {
  //   getProductsFromStore();
  // }, []);

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
