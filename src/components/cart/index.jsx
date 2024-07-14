"use client";
import React, { useEffect } from "react";
import CartItems, { CartItemsSkeleton } from "./components/CartItems";
import CartSummary, { CartSummarySkeleton } from "./components/CartSummary";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "@/redux/slices/cart";
import { getCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
const index = () => {
  const token = getCookie("token");
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart?.cart?.isLoading);
  useEffect(() => {
    if (token) {
      dispatch(getCart());
    } else {
      router.push("/login?redirect=/cart");
    }
  }, []);
  return (
    <div className="p-4 sm:p-12">
      <div className="cart-container flex flex-col md:flex-row ">
        <div className="left-container md:pr-10 md:w-[75%] lg:w-[80%]">
          {loading ? <CartItemsSkeleton /> : <CartItems variant={"CART"} />}
        </div>
        <div className="right-container w-full mt-10 md:mt-0  md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
          {loading ? <CartSummarySkeleton /> : <CartSummary />}
        </div>
      </div>
    </div>
  );
};

export default index;
