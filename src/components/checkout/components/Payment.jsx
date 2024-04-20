"use client";
import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "@/redux/slices/order";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useRouter } from "next/router";

const Payment = ({ payload }) => {
  const cart = useSelector((state) => state?.cart?.cart);
  const product = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const [codLoading, setCodLoading] = React.useState(false);
  const [onlineLoading, setOnlineLoading] = React.useState(false);
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
    setOnlineLoading(true);
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
        amount: router.query.id ? product.price : cart?.total_subtotal,
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data.data;

    const options = {
      key: "rzp_test_lgqTsaqH49g4LM", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "My Ecom",
      description: "Test Transaction",
      order_id: order_id,
      handler: async (response) => handlePayment(response, order_id),
      theme: {
        color: "#014aad",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const handlePayment = async (response, orderId) => {
    const orderPayload = {
      ...payload,
      payment_method: "ONLINE",
      expected_delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      razorpay_data: {
        order_creation_id: orderId,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
      },
    };

    handleOrder("ONLINE", orderPayload);
  };
  const handleCod = () => {
    const orderPayload = {
      ...payload,
      payment_method: "COD",
      expected_delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    };
    handleOrder("COD", orderPayload);
  };
  const handleOrder = (type, payload) => {
    type === "COD" ? setCodLoading(true) : setOnlineLoading(true);
    dispatch(placeOrder(payload))
      .then(() => {
        type === "COD" ? setCodLoading(true) : setOnlineLoading(true);
        toast({
          title: "Order Placed",
          description: "Your order has been placed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/order/success");
      })
      .catch((error) => {
        type === "COD" ? setCodLoading(true) : setOnlineLoading(true);
        toast({
          title: error.message,
          status: "error",
          variant: "left-accent",
          position: "top-right",
          duration: 1500,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 gap-4">
        <h2 className="heading text-2xl font-semibold">
          Select a payment method 🧐
        </h2>
        <div className="flex flex-col items-center justify-between mt-20 gap-8">
          <Button
            w={280}
            p={10}
            borderRadius={0}
            fontWeight={600}
            backgroundColor={"inherit"}
            border={"1px solid #014AAD"}
            color={"#014AAD"}
            _hover={{ backgroundColor: "#cae0ff" }}
            isLoading={codLoading}
            leftIcon={<FaMoneyBill size={20} />}
            onClick={handleCod}
          >
            Cash on Delivery
          </Button>
          <Button
            w={280}
            p={10}
            borderRadius={0}
            fontWeight={600}
            color={"#fff"}
            backgroundColor={"#014AAD"}
            _hover={{ backgroundColor: "#729ad1" }}
            isLoading={onlineLoading}
            leftIcon={<MdOutlinePayment size={20} />}
            onClick={displayRazorpay}
          >
            Online
          </Button>
        </div>
      </div>
    </>
  );
};

export default Payment;
