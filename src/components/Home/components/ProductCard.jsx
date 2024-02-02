import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card min-w-[128px] md:min-w-[165px] lg:min-w-[200px] h-full">
      <div className="product-image">
        <img
          src={product.product_image}
          className=" w-full h-28 md:h-[165px] lg:h-[200px] object-cover"
        />
      </div>
      <div className="product-details">
        <Text className="product-name text-sm md:text-base lg:text-base">
          {product.product_name}
        </Text>
        <Text className="product-price text-sm md:text-base lg:text-base">
          {product.currency_symbol}
          {product.price}
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
