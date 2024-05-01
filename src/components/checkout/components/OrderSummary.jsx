"use client";
import React, { useEffect } from "react";
import CartItems from "@/components/cart/components/CartItems";
import OrderTotal from "./OrderTotal";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "@/redux/slices/cart";
import { getProduct } from "@/redux/slices/product";
import { useRouter } from "next/router";
const OrderSummary = ({ handleClick, type }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const moveToPayment = () => {
  //   handleClick(2);
  // };
  const product = useSelector((state) => state.product?.product?.data);
  useEffect(() => {
    type === "CART"
      ? dispatch(getCart())
      : dispatch(getProduct(router.query?.id));
  }, []);
  return (
    <>
      <div className="order-summary-container flex flex-col md:flex-row">
        <div className="product-info md:pr-10 md:w-[75%] lg:w-[80%]">
          {type === "CART" ? (
            <CartItems variant={"ORDER_SUMMARY"} />
          ) : (
            <div className="flex items-center gap-3">
              <img
                src={
                  product.images && product.images.length && product.images[0]
                }
                className="product-image h-[250px] w-full sm:h-[250px] sm:w-full md:h-[250px] md:w-[250px] lg:h-[250px] lg:w-[250px] object-contain"
                alt={product.product_name}
              />
              <div>
                <h1 className="product-name text-2xl font-medium">
                  {product.brand} {product.product_name}
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="price-info w-full mt-10 md:mt-0 md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
          <OrderTotal handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
