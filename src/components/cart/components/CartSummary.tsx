"use client";
import { useRouter } from "next/router";
import { Button, Skeleton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useGetCartQuery } from "@/redux/api/cart/cart.api";

interface CartData {
  total_subtotal: number;
}

export const CartSummarySkeleton: React.FC = () => (
  <>
    <div className="w-full border p-5 shadow-sm rounded bg-white">
      <h2 className="text-lg font-semibold">
        <Skeleton height="20px" width="120px" />
      </h2>
      <div className="cart-summary-details mt-4">
        <Skeleton height="20px" width="100%" />
        <Skeleton height="20px" width="100%" mt={2} />
        <Skeleton height="20px" width="100%" mt={2} />
        <div className="flex justify-between border-t border-gray-400 border-dashed mt-2 pt-1">
          <Skeleton height="20px" width="100%" mt={2} />
        </div>
      </div>
    </div>
    <Skeleton height="40px" width="100%" shadow={"lg"} mt={2} />
  </>
);

const CartSummary: React.FC = () => {
  const router = useRouter();
  const { data: cartData } = useGetCartQuery();
  const cart = cartData?.data as CartData | undefined;

  return (
    <>
      <div className="w-full border p-5 shadow-sm rounded bg-white">
        <h2 className="text-lg font-semibold">Cart Summary</h2>
        <div className="cart-summary-details mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ {cart?.total_subtotal || 0}</p>
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
            <p>₹ {cart?.total_subtotal || 0}</p>
          </div>
        </div>
      </div>
      <Button
        className="mt-2 w-full bg-[#014AAD]shadow-xl"
        borderRadius={0}
        fontWeight={600}
        color={"#fff"}
        backgroundColor={"#014AAD"}
        _hover={{ backgroundColor: "#729ad1" }}
        onClick={() => router.push("/checkout")}
      >
        Proceed to Checkout
        <ArrowForwardIcon ml={2} />
      </Button>
    </>
  );
};

export default CartSummary;
