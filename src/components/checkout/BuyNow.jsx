"use client";
import React, { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "@/redux/slices/cart";
import product from "@/redux/slices/product";

const BuyNow = () => {
  const [step, setStep] = useState(0);
  const [checkoutPayload, setCheckoutPayload] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart?.cart?.data);
  const product = useSelector((state) => state.product?.product?.data);
  const handleClick = (step) => {
    setStep(step);
  };
  const handleAddressSelect = (selectedAddressId) => {
    setCheckoutPayload((prev) => ({
      ...prev,
      address: selectedAddressId,
    }));
  };
  useEffect(() => {
    console.log(checkoutPayload);
  }, [checkoutPayload]);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    if (cart && !product) {
      const checkoutProducts = cart.products?.map((product) => ({
        product: product.product._id,
        count: product.count,
      }));

      setCheckoutPayload((prev) => ({
        ...prev,
        products: checkoutProducts,
        total: cart.total_subtotal,
      }));
    } else if (product) {
      setCheckoutPayload((prev) => ({
        ...prev,
        products: [
          {
            product: product._id,
            count: 1,
          },
        ],
        total: product.price,
      }));
    }
  }, [cart, product]);
  return (
    <div className="p-4 sm:p-12">
      <div className="steps-wrapper">
        <Steps step={step} handleClick={handleClick} />
      </div>
      <div className="steps mt-4">
        {step === 0 && (
          <Addresses handleClick={handleClick} onSelect={handleAddressSelect} />
        )}
        {step === 1 && (
          <OrderSummary type={"BUY_NOW"} handleClick={handleClick} />
        )}
        {step === 2 && <Payment payload={checkoutPayload} />}
      </div>
    </div>
  );
};

export default BuyNow;
