import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import CarouselComp from "@/components/CarouselComp";
import Suggestions from "@/components/Suggestions";
import CategoryGrid from "@/components/CategoryGrid";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { dispatch } from "../redux/store";
import { testFunction, testFunction2, getProducts } from "../redux/slices/test";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hasData, setHasData] = useState(false);
  const dispatch = useDispatch();
  const { variable } = useSelector((state) => state?.test);
  const products = useSelector((state) => state.test.products?.data);
  // console.log("before", test);
  console.log("this is useSelectors response", products);
  // dispatch(testFunction);
  function fun() {
    console.log("i am clicked");
    dispatch(testFunction);
    // console.log("after", test);
  }
  function fun2() {
    dispatch(testFunction2);
  }
  async function getProductsFromStore() {
    await dispatch(getProducts);
    setHasData(true);
  }
  console.log("products", products);
  useEffect(() => {
    // let response = await axios.get("http://localhost:3000/products/getAll");
    // getProductsFromStore();
    // console.log(products);
  }, []);

  return (
    <>
      <Head>
        <title> My E - com </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Navbar />
          {/* <button onClick={fun} onMouseOver={fun2}>
            hello {variable}
          </button>
          {hasData &&
            products?.map((product) => {
              return <div key={product._id}>{product.name}</div>;
            })} */}
          <CarouselComp />
          <Suggestions />
          <CategoryGrid /> {/* <Test/> */} <Footer />
        </div>
      </main>
    </>
  );
}
