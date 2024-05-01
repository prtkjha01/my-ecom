import React from "react";
import { useRouter } from "next/router";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import myEcomAssured from "@assets/MyEcomAssured.png";
import RatingBadge from "@/components/common/RatingBadge";
export const ProductCardSkeleton = () => (
  <div className="bg-white sm:min-w-52 shadow hover:scale-105 transition duration-300 cursor-pointer">
    <Skeleton height="150px" width="100%" />
    {/* <div className="h-[150px]  w-full  " alt="product-image" /> */}
    <div className="product-details px-4 py-2">
      <div className="product-name mb-4">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="4" />
      </div>
      <Skeleton height="20px" width="40px" />
      <div className="product-price flex gap-2 mt-2">
        <Skeleton height="20px" width="100%" />
        <Skeleton height="20px" width="100%" />
        <Skeleton height="20px" width="100%" />
      </div>
      <Skeleton height="27px" width="100px" mt={2} />
    </div>
  </div>
);
const ProductCard = ({ product }) => {
  const {
    _id,
    product_name,
    brand,
    images,
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
        className="bg-white sm:min-w-52 shadow hover:scale-105 transition duration-300 cursor-pointer"
        onClick={() => router.push("/product/" + _id)}
      >
        <img
          src={images && images[0]}
          className="h-[150px]  w-full  object-contain"
          alt="product-image"
        />
        <div className="product-details px-4 py-2">
          <div className="product-name mb-4">
            {brand} {product_name}
          </div>

          <RatingBadge rating={rating} />
          <div className="product-price flex gap-2 mt-2">
            <span className="">
              {currency_symbol}
              {parseInt(price - price * (discount / 100))}
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
