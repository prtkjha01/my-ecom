import React from "react";
import { Button } from "@chakra-ui/react";
const Payment = () => {
  return (
    <>
      <div>
        <h2 className="heading">Payment</h2>
        <Button
          className="mt-2 w-full bg-[#014AAD]shadow-xl"
          borderRadius={0}
          fontWeight={500}
          color={"#fff"}
          backgroundColor={"#014AAD"}
          onClick={() => {}}
        >
          Complete Payment
        </Button>
      </div>
    </>
  );
};

export default Payment;
