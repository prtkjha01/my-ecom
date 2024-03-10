import Head from "next/head";
import MainLayout from "@layouts/Main";
import ProductDetails from "@components/productDetails/index";
import Suggestions from "@/components/productDetails/Suggestions";
const index = () => {
  return (
    <>
      <MainLayout>
        <ProductDetails />
        <Suggestions />
      </MainLayout>
    </>
  );
};

export default index;
