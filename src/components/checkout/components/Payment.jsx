"use client";
import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
const Payment = () => {
  const cart = useSelector((state) => state?.cart?.cart);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_LOCAL}/order`,
      {
        amount: cart?.total_subtotal,
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data.data;
    // console.log(result.data.data);
    const options = {
      key: "rzp_test_lgqTsaqH49g4LM", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "My Ecom",
      description: "Test Transaction",
      order_id: order_id,
      handler: async (response) => handlePayment(response, order_id),
      // async function (response) {
      //   const payload = {
      //     orderCreationId: order_id,
      //     razorpayPaymentId: response.razorpay_payment_id,
      //     razorpayOrderId: response.razorpay_order_id,
      //     razorpaySignature: response.razorpay_signature,
      //   };

      //   const result = await axios.post(
      //     `${process.env.NEXT_PUBLIC_SERVER_LOCAL}/order/payment-success`,
      //     payload
      //   );

      //   console.log(result.data);
      //   // alert(result.data.message);
      // },

      theme: {
        color: "#014aad",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const handlePayment = async (response, orderId) => {
    const payload = {
      orderCreationId: orderId,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpayOrderId: response.razorpay_order_id,
      razorpaySignature: response.razorpay_signature,
    };

    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_LOCAL}/order/payment-success`,
      payload
    );

    console.log(result.data);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 gap-4">
        <h2 className="heading">Payment</h2>
        <Button
          className="w-min mt-20"
          borderRadius={0}
          fontWeight={600}
          color={"#fff"}
          backgroundColor={"#014AAD"}
          _hover={{ backgroundColor: "#729ad1" }}
          onClick={displayRazorpay}
        >
          Complete Payment
        </Button>
      </div>
    </>
  );
};

export default Payment;
