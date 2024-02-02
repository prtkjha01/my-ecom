import React from "react";
import Head from "next/head";
import LeftView from "@/components/auth/LeftView";
import LoginForm from "@components/auth/login/LoginForm";
const index = () => {
  return (
    <>
      <Head>
        <title> Login to MyEcom </title>
      </Head>
      <div className="flex items-center">
        <div className="left-view hidden sm:hidden lg:flex justify-center items-center bg-[#3A003D] text-orange-500 h-screen w-full px-5 ">
          <LeftView />
        </div>
        <div className="right-view h-screen w-full flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default index;
