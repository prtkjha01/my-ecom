"use client";
import React, { useState } from "react";
import Steps from "./components/Steps";
import Addresses from "./components/Addresses";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";

const index = () => {
  const [step, setStep] = useState(1);
  const handleClick = (step) => {
    setStep(step);
  };

  return (
    <div className="p-4 sm:p-12">
      {/* TO BR REMOVED */}
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
      {/* TO BR REMOVED */}

      <div className="steps-wrapper">
        <Steps step={step} handleClick={handleClick} />
      </div>
      <div className="steps mt-4">
        {step === 0 && <Addresses />}
        {step === 1 && <OrderSummary />}
        {step === 2 && <Payment />}
      </div>
    </div>
  );
};

export default index;
