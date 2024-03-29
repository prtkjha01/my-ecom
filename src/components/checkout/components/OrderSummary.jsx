import React from "react";
import CartItems from "@/components/cart/components/CartItems";
import OrderTotal from "./OrderTotal";
const OrderSummary = () => {
  return (
    <>
      <div className="order-summary-container flex flex-col md:flex-row">
        <div className="product-info md:pr-10 md:w-[75%] lg:w-[80%]">
          <CartItems variant={"ORDER_SUMMARY"} />
        </div>
        <div className="price-info w-full mt-10 md:mt-0 md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
          <OrderTotal />
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
