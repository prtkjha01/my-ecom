"use client";
import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/product";
const PopularProducts = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product?.products?.data);
  const loading = useSelector((state) => state.product?.products?.isLoading);
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
        {productsData?.length > 0 && !loading
          ? productsData
              .slice(0, 20)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <ProductCardSkeleton key={item} />
            ))}
      </div>
    </section>
  );
};

export default PopularProducts;
