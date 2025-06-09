"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useGetCartQuery } from "@/redux/api/cart/cart.api";
import { getCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { CartItemsSkeleton } from "./components/CartItems";
import { CartSummarySkeleton } from "./components/CartSummary";

const CartItems = dynamic(() => import("./components/CartItems"), {
  loading: () => <CartItemsSkeleton />,
  ssr: false,
});

const CartSummary = dynamic(() => import("./components/CartSummary"), {
  loading: () => <CartSummarySkeleton />,
  ssr: false,
});

const Cart: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const token = getCookie("token");
  const router = useRouter();
  const { data: cartData, isLoading: loading } = useGetCartQuery(undefined, {
    skip: !token || !mounted,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!token && mounted) {
      router.push("/login?redirect=/cart");
    }
  }, [router, token, mounted]);

  if (!mounted) {
    return (
      <div className="p-4 sm:p-12">
        <div className="cart-container flex flex-col md:flex-row">
          <div className="left-container md:pr-10 md:w-[75%] lg:w-[80%]">
            <CartItemsSkeleton />
          </div>
          <div className="right-container w-full mt-10 md:mt-0 md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
            <CartSummarySkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-12">
      <div className="cart-container flex flex-col md:flex-row">
        <div className="left-container md:pr-10 md:w-[75%] lg:w-[80%]">
          {loading ? <CartItemsSkeleton /> : <CartItems variant={"CART"} />}
        </div>
        <div className="right-container w-full mt-10 md:mt-0 md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
          {loading ? <CartSummarySkeleton /> : <CartSummary />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
