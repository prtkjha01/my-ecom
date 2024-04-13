"use client";
import React, { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";

const index = () => {
  const [step, setStep] = useState(0);
  const [checkoutPayload, setCheckoutPayload] = useState({});
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
  return (
    <div className="p-4 sm:p-12">
      {/* TO BE REMOVED */}
      {process.env.NEXT_PUBLIC_MODE === "DEV" && (
        <div className="step-handler-dev absolute right-2 top-[85px] flex gap-2">
          <button
            className="h-10 w-10 bg-slate-400 text-white rounded-full"
            onClick={() => setStep(0)}
          >
            1
          </button>
          <button
            className="h-10 w-10 bg-slate-400 text-white rounded-full"
            onClick={() => setStep(1)}
          >
            2
          </button>
          <button
            className="h-10 w-10 bg-slate-400 text-white rounded-full"
            onClick={() => setStep(2)}
          >
            3
          </button>
        </div>
      )}
      {/* TO BE REMOVED */}

      <div className="steps-wrapper">
        <Steps step={step} handleClick={handleClick} />
      </div>
      <div className="steps mt-4">
        {step === 0 && (
          <Addresses handleClick={handleClick} onSelect={handleAddressSelect} />
        )}
        {step === 1 && <OrderSummary handleClick={handleClick} />}
        {step === 2 && <Payment />}
      </div>
    </div>
  );
};

export default index;
