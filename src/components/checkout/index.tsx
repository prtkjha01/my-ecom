"use client";
import { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import { OrderPayload } from "@/redux/api/order/order.types";
import { useGetCartQuery } from "@/redux/api/cart/cart.api";

const Checkout: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [checkoutPayload, setCheckoutPayload] = useState<OrderPayload>({
    address_id: "",
    payment_method: "",
  });
  const { data: cartData } = useGetCartQuery();
  const cart = cartData?.data;
  console.log(cart);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const handleAddressSelect = (selectedAddressId: string) => {
    setCheckoutPayload((prev) => ({
      ...prev,
      address_id: selectedAddressId,
    }));
  };

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

  useEffect(() => {
    console.log("checkoutPayload", checkoutPayload);
  }, [checkoutPayload]);

  return (
    <div className="p-4 sm:p-12">
      <div className="steps-wrapper">
        <Steps step={step} handleClick={handleStepChange} />
      </div>
      <div className="steps mt-4">
        {step === 0 && (
          <Addresses
            handleClick={handleStepChange}
            onSelect={handleAddressSelect}
          />
        )}
        {step === 1 && (
          <OrderSummary type={"CART"} handleClick={handleStepChange} />
        )}
        {step === 2 && <Payment payload={checkoutPayload} />}
      </div>
    </div>
  );
};

export default Checkout;
