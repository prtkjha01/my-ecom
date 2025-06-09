"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Icon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  PopoverFooter,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { getCookie, deleteCookie } from "@/utils/cookies";
import { getCart } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import { useGetCurrentUserQuery } from "@/redux/api/user/user.api";

interface User {
  name: string;
  [key: string]: any;
}

interface Cart {
  products?: Array<{
    product: {
      _id: string;
      [key: string]: any;
    };
    count: number;
  }>;
  [key: string]: any;
}

const Actions: React.FC = () => {
  const router = useRouter();
  const token = getCookie("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const { data: userData } = useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      dispatch(getCart());
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    deleteCookie("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  const user = userData?.data as User | null;
  const cart = useSelector(
    (state: RootState) => state?.cart?.cart?.data
  ) as Cart | null;

  return (
    <div className="flex items-center gap-7">
      <div className="relative">
        <Icon
          className="cursor-pointer"
          as={MdOutlineShoppingCart}
          boxSize={6}
          onClick={() => router.push("/cart")}
        />
        {cart?.products && cart.products.length > 0 && (
          <span className="absolute top-[-5px] right-[-4px] bg-red-500 text-[10px] font-semibold text-white rounded-full w-[13px] h-[13px] flex justify-center items-center">
            {cart.products.length}
          </span>
        )}
      </div>

      {isLoggedIn ? (
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-[#014aad] text-white font-bold cursor-pointer">
              {user && user?.name?.charAt(0).toUpperCase()}
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton top={"1rem"} />
            <PopoverHeader className="name font-bold" py={4}>
              Welcome {user?.name}
            </PopoverHeader>
            <PopoverBody>
              <div
                className="orders cursor-pointer flex items-center gap-2 font-semibold"
                onClick={() => router.push("/orders")}
              >
                <FaBox /> Orders
              </div>
            </PopoverBody>
            <PopoverFooter>
              <div
                className="Logout cursor-pointer flex items-center gap-2 "
                onClick={handleLogout}
              >
                <TbLogout2 />
                <span className=" text-black hover:underline">Logout</span>
              </div>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
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
