"use client";
import React, { useEffect } from "react";
import { sortProducts } from "@/redux/slices/product";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/product";
import { useRouter } from "next/router";
const ResultsGrid = () => {
  const router = useRouter();
  const products = useSelector((state) => state?.product?.products?.data);
  const loading = useSelector((state) => state?.product?.products?.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.q) {
      dispatch(getProducts({ query: router.query.q }, "WITHOUT_FILTERS"));
    }
  }, [router.query.q]);
  return loading ? (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <ProductCardSkeleton key={item} />
      ))}
    </div>
  ) : products.length === 0 ? (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-428px)]">
      <img
        src="https://app.lssquare.com/static/media/empty_product_banner.c076afe7.png"
        alt=""
      />
      <h1 className="text-3xl font-bold">No Products Found</h1>
    </div>
  ) : (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ResultsGrid;
