"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/product";
const ResultsGrid = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router?.query?.q;
  const products = useSelector((state) => state.product.products);

  const fetchProducts = async () => {
    dispatch(getProducts(query))
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [query]);
  return (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default ResultsGrid;
