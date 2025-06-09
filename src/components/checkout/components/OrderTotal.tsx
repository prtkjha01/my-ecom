"use client";
import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useGetCartQuery } from "@/redux/api/cart/cart.api";
import { useGetProductQuery } from "@/redux/api/product/product.api";

interface OrderTotalProps {
  handleClick: (step: number) => void;
}

const OrderTotal: React.FC<OrderTotalProps> = ({ handleClick }) => {
  const router = useRouter();
  const { data: cartData } = useGetCartQuery(undefined, {
    skip: !!router.query.id,
  });
  const { data: productData } = useGetProductQuery(router.query?.id as string, {
    skip: !router.query.id,
  });

  const cart = cartData?.data;
  const product = productData?.data;

  return (
    <>
      <div className="w-full border p-5 shadow-sm rounded bg-white">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="cart-summary-details mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ {router.query.id ? product?.price : cart?.total_subtotal}</p>
          </div>

          <div className="flex justify-between mt-1">
            <p>Shipping</p>
            <p>₹ 0.00</p>
          </div>

          <div className="flex justify-between mt-1">
            <p>Discount</p>
            <p className="text-green-700"> - ₹ 0.00</p>
          </div>

          <div className="flex justify-between border-t border-gray-400 border-dashed mt-2 pt-1">
            <p>Total</p>
            <p>₹ {router.query.id ? product?.price : cart?.total_subtotal}</p>
          </div>
        </div>
      </div>

      <div className="offers w-full border p-5 shadow-sm rounded mt-4 bg-white opacity-50 cursor-not-allowed">
        <h2 className="text-lg font-semibold">
          Got a Promo Code ?{"(Coming Soon)"}
        </h2>
        <div className="offer-input relative mt-4">
          <input
            className="w-full border-b rounded-none outline-none border-slate-500 h-8 pr-14"
            disabled
            type="text"
          />
          <button className="absolute right-0 bottom-1 text-sm bg-slate-300 text-slate-900 p-1 px-2">
            Apply
          </button>
        </div>
      </div>
      <Button
        className="mt-4 w-full bg-[#014AAD]shadow-xl"
        borderRadius={0}
        fontWeight={600}
        color={"#fff"}
        backgroundColor={"#014AAD"}
        _hover={{ backgroundColor: "#729ad1" }}
        onClick={() => {
          handleClick(2);
        }}
      >
        Proceed to Payment
        <ArrowForwardIcon ml={2} />
      </Button>
    </>
  );
};

export default OrderTotal;
