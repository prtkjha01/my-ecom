import React from "react";

import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const CartSummary = () => {
  return (
    <>
      <div className="w-full border p-5 shadow-sm rounded">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="cart-summary-details mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ 0.00</p>
          </div>

          <div className="flex justify-between mt-1">
            <p>Shipping</p>
            <p>₹ 0.00</p>
          </div>

          <div className="flex justify-between mt-1">
            <p>Discount</p>
            <p className=" text-green-700"> - ₹ 0.00</p>
          </div>

          <div className="flex justify-between border-t border-gray-400 border-dashed mt-2 pt-1">
            <p>Total</p>
            <p>₹ 0.00</p>
          </div>
        </div>
      </div>

      <div className="offers w-full border p-5 shadow-sm rounded mt-4">
        <h2 className="text-lg font-semibold">Got a Promo Code ?</h2>
        <div className="offer-input relative mt-4">
          <input
            className="w-full border-b rounded-none outline-none border-slate-500 h-8 pr-14"
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
        fontWeight={500}
        color={"#fff"}
        backgroundColor={"#014AAD"}
        onClick={() => {}}
      >
        Proceed to Payment
        <ArrowForwardIcon ml={2} />
      </Button>
    </>
  );
};

export default CartSummary;
