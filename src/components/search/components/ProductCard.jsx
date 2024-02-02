import React from "react";
import { useRouter } from "next/router";

import myEcomAssured from "@assets/MyEcomAssured.png";
import RatingBadge from "@/components/common/RatingBadge";
const ProductCard = ({ product }) => {
  const {
    id,
    product_name,
    product_image,
    product_category,
    price,
    currency_symbol,
    rating,
    discount,
    is_assured,
  } = product;

  const router = useRouter();
  return (
    <>
      <div
        className="bg-white shadow hover:scale-105 transition duration-300 cursor-pointer"
        onClick={() => router.push("/product/" + id)}
      >
        <img
          src={product_image}
          className="h-[150px]  w-full  object-cover"
          alt="product-image"
        />
        <div className="product-details px-4 py-2">
          <div className="product-name mb-4">{product_name}</div>

          <RatingBadge rating={rating} />
          <div className="product-price flex gap-2 mt-2">
            <span className="">
              {currency_symbol}
              {price - price * (discount / 100)}
            </span>
            <span className="line-through">
              {currency_symbol}
              {price}
            </span>
            <span className="text-[#388e3c] font-[500]">{discount}% off</span>
          </div>
          {is_assured && (
            <img
              src={myEcomAssured.src}
              className=" h-7 mt-2"
              alt="assured-png"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
