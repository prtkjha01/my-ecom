"use client";
import React from "react";
import { FaCheck, FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";
const OrderSuccess = () => {
  const router = useRouter();
  return (
    <div className="min-h-[calc(100vh-436px)] flex flex-col gap-8 justify-center items-center">
      <div className="flex items-center gap-4">
        <div className=" w-min p-3 bg-[#388e3c] rounded-full">
          <FaCheck size={50} color="#fff" />
        </div>
        <div className="text-2xl font-bold">
          Your Order has been placed successfully
        </div>
      </div>
      <div
        className="home-btn flex items-center text-[#014AAD] font-semibold cursor-pointer"
        onClick={() => router.push("/orders")}
      >
        <span className="hover:underline">View Your Orders</span>
        <span>
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
};

export default OrderSuccess;
