"use client";
import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/product";
const PopularProducts = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product?.products);
  const getProductsData = async () => {
    dispatch(getProducts({ query: "" }, "WITHOUT_FILTERS"));
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      getProductsData();
    }
  }, []);
  return (
    <section className="popluar-products mt-24">
      <Text className="categories-section-header text-start text-2xl font-[600]">
        Popular Products
      </Text>
      <div className="product-row mt-6 py-2 flex overflow-x-scroll gap-3 lg:gap-4 justify-between">
        {productsData?.length > 0 &&
          productsData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default PopularProducts;
