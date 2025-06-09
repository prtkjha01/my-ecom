"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import VerifyOtpForm from "./VerifyOtpForm";
import ResetPasswordForm from "./ResetPasswordForm";
const RightView = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const handleProgress = (step: number) => setCurrentStep(step);
  const handleSetEmail = (newEmail: string) => setEmail(newEmail);
  return (
    <>
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
