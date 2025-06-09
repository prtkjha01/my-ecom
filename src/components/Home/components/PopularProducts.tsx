"use client";
import React from "react";
import { Text } from "@chakra-ui/react";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/product/product.api";

interface Product {
  _id: string;
  product_name: string;
  brand: string;
  images: string[];
  price: number;
  currency_symbol: string;
  rating?: number;
  active?: boolean;
}

const PopularProducts: React.FC = () => {
  const { data: productsData, isLoading } = useGetProductsQuery(
    { query: "" },
    { refetchOnMountOrArgChange: true }
  );

  const products = productsData?.data?.products || [];

  return (
    <section className="popluar-products mt-24">
      <Text className="categories-section-header text-start text-2xl font-[600]">
        Popular Products
      </Text>
      <div className="product-row mt-6 py-2 flex overflow-x-scroll gap-3 lg:gap-4 justify-between">
        {products.length > 0 && !isLoading
          ? products
              .slice(0, 20)
              .map((product: Product) => (
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
