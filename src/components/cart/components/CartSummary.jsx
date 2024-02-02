import React from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const CartSummary = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full border p-5 shadow-sm rounded">
        <h2 className="text-lg font-semibold">Cart Summary</h2>
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
      <Button
        className="mt-2 w-full bg-[#014AAD]shadow-xl"
        borderRadius={0}
        fontWeight={500}
        color={"#fff"}
        backgroundColor={"#014AAD"}
        onClick={() => router.push("/checkout")}
      >
        Proceed to Checkout
        <ArrowForwardIcon ml={2} />
      </Button>
    </>
  );
};

export default CartSummary;
