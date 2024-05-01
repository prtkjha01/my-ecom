"use client";
import React, { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "@/redux/slices/cart";
const index = () => {
  const [step, setStep] = useState(0);
  const [checkoutPayload, setCheckoutPayload] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart?.cart?.data);
  const handleClick = (step) => {
    setStep(step);
  };
  const handleAddressSelect = (selectedAddressId) => {
    setCheckoutPayload((prev) => ({
      ...prev,
      address: selectedAddressId,
    }));
    // console.log(checkoutPayload);
  };
  useEffect(() => {
    console.log(checkoutPayload);
  }, [checkoutPayload]);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    if (cart) {
      const checkoutProducts = cart.products?.map((product) => ({
        product: product.product._id,
        count: product.count,
      }));

      setCheckoutPayload((prev) => ({
        ...prev,
        products: checkoutProducts,
        total: cart.total_subtotal,
      }));
    }
  }, [cart]);
  return (
    <div className="p-4 sm:p-12">
      <div className="steps-wrapper">
        <Steps step={step} handleClick={handleClick} />
      </div>
      <div className="steps mt-4">
        {step === 0 && (
          <Addresses handleClick={handleClick} onSelect={handleAddressSelect} />
        )}
        {step === 1 && <OrderSummary type={"CART"} handleClick={handleClick} />}
        {step === 2 && <Payment payload={checkoutPayload} />}
      </div>
    </div>
  );
};

export default index;
