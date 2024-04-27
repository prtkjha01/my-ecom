import React from "react";
import Head from "next/head";
import LeftView from "@/components/auth/LeftView";
import SignupForm from "@/components/auth/signup/SignupForm";
const index = () => {
  return (
    <>
      <Head>
        <title> Get Started</title>
      </Head>
      <div className="flex items-center">
        <div className="left-view hidden sm:hidden lg:flex justify-center items-center bg-[#3A003D] text-orange-500 min-h-screen w-full px-5 ">
          <LeftView />
        </div>
        <div className="right-view bg-white min-h-screen w-full flex justify-center items-center">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default index;
