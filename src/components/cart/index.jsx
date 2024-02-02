import React from "react";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";
const index = () => {
  return (
    <div className="p-4 sm:p-12">
      <div className="cart-container flex flex-col md:flex-row ">
        <div className="left-container md:pr-10 md:w-[75%] lg:w-[80%]">
          <CartItems variant={"CART"} />
        </div>
        <div className="right-container w-full mt-10 md:mt-0  md:w-[25%] lg:w-[20%] md:sticky top-[128px] self-start">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default index;
