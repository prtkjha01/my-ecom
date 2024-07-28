import Head from "next/head";
import LeftView from "@/components/auth/LeftView";
import RightView from "@/components/auth/forgotPassword/RightView";
const index = () => {
  return (
    <>
      <Head>
        <title> Forgot Password </title>
      </Head>
      <div className="flex items-center">
        <div className="left-view hidden lg:flex  justify-center items-center bg-[#3A003D] text-orange-500 h-screen w-full px-5 ">
          <LeftView />
        </div>
        <div className="right-view bg-white h-screen w-full flex justify-center items-center">
          <RightView />
        </div>
      </div>
    </>
  );
};

export default index;
