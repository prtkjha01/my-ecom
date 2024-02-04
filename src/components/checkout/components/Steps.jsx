"use client";
import React, { useState } from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const Stepss = ({ step, handleClick }) => {
  const steps = [
    { title: "Address", description: "Address" },
    { title: "Order Summary", description: "Order Summary" },
    { title: "Payment", description: "Payment" },
  ];
  // const { activeStep } = useSteps({
  //   index: step,
  //   count: steps.length,
  // });
  const [activeStep, setActiveStep] = useState(step);
  return (
    <>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <StepIndicator
                className={step.title === "Address" && "cursor-pointer"}
                onClick={() => {
                  if (step.title === "Address") {
                    handleClick(0);
                    setActiveStep(0);
                  }

                  console.log(activeStep);
                }}
              >
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle
                  fontSize={["10px", "12px", "14px", "16px"]}
                  className="w-[60px] md:w-max text-center"
                >
                  {step.title}
                </StepTitle>
                {/* <StepDescription>{step.description}</StepDescription> */}
              </Box>
            </div>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default Stepss;
