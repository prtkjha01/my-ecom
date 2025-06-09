"use client";
import React, { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import { useGetProductQuery } from "@/redux/api/product/product.api";
import { useRouter } from "next/router";

interface CheckoutPayload {
  address?: string;
  products?: Array<{
    product: string;
    count: number;
  }>;
  total?: number;
}

interface Product {
  _id: string;
  price: number;
}

const BuyNow: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;
  const [step, setStep] = useState<number>(0);
  const [checkoutPayload, setCheckoutPayload] = useState<CheckoutPayload>({});
  const { data: productData } = useGetProductQuery(id as string, {
    skip: !id,
  });
  const product = productData?.data;

  const handleClick = (step: number) => {
    setStep(step);
  };

  const handleAddressSelect = (selectedAddressId: string) => {
    setCheckoutPayload((prev) => ({
      ...prev,
      address: selectedAddressId,
    }));
  };

  useEffect(() => {
    if (product) {
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
  }, [product]);

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
