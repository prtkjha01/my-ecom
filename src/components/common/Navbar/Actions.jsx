"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icon, Button } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getCookie, deleteCookie } from "@/utils/cookies";
const Actions = () => {
  const router = useRouter();
  const token = getCookie("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  
  return (
    <div className="flex items-center gap-7">
      <Icon
        className="cursor-pointer"
        as={MdOutlineShoppingCart}
        boxSize={6}
        onClick={() => router.push("/cart")}
      />
      <Icon className="cursor-pointer" as={AiOutlineHeart} boxSize={6} />
      {isLoggedIn ? (
        <div
          className="h-8 w-8 flex justify-center items-center rounded-full bg-[#014aad] text-white font-bold cursor-pointer"
          onClick={() => {
            deleteCookie("token");
            setIsLoggedIn(false);
            window.location.reload();
          }}
        >
          A
        </div>
      ) : (
        <Button
          bgColor={"#014aad"}
          textColor={"#fff"}
          size="sm"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Actions;
