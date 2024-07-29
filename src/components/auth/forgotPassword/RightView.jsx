"use client";
import React, { useEffect, useState } from "react";
import SendOtpForm from "./SendOtpForm";
import VerifyOtpForm from "./VerifyOtpForm";
import ResetPasswordForm from "./ResetPasswordForm";
const RightView = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const handleProgress = (step) => setCurrentStep(step);
  const handleSetEmail = (newEmail) => setEmail(newEmail);
  return (
    <>
      {/* <button onClick={() => setCurrentStep((prev) => prev + 1)}>+</button> */}
      {currentStep === 1 && (
        <SendOtpForm onProgress={handleProgress} onOtp={handleSetEmail} />
      )}
      {currentStep === 2 && (
        <VerifyOtpForm email={email} onProgress={handleProgress} />
      )}
      {currentStep === 3 && <ResetPasswordForm email={email} />}
    </>
  );
};

export default RightView;
