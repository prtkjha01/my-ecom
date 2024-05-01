import React, { useState } from "react";
import { Text, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const ProductCardSkeleton = () => (
  <div className="product-card min-w-[128px] md:min-w-[165px] lg:min-w-[200px] h-full border bg-white cursor-pointer hover:scale-105 transition-all duration-300">
    <div className="product-image">
      <Skeleton height={["112px", "165px", "200px"]} width="100%" />
    </div>
    <div className="product-details p-2">
      <SkeletonText noOfLines={3} spacing="2" skeletonHeight="3" />
    </div>
  </div>
);
const ProductCard = ({ product }) => {
  const router = useRouter();
  const { _id, product_name, brand, images, price, currency_symbol } = product;
  return (
    <div
      className="product-card min-w-[128px] md:min-w-[165px] lg:min-w-[200px] h-full border bg-white cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => router.push("/product/" + _id)}
    >
      <div className="product-image">
        <img
          src={images && images[0]}
          className=" w-full h-28 md:h-[165px] lg:h-[200px] object-cover"
        />
      </div>
      <div className="product-details p-2">
        <Text className="product-name min-h-12 text-sm md:text-base lg:text-base">
          {brand + " " + product_name}
        </Text>
        <Text className="product-price text-sm md:text-base lg:text-base">
          {currency_symbol}
          {price}
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
