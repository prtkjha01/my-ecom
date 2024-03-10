import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Icon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <div className="product-card w-full flex justify-between border border-gray-200 rounded bg-white p-4">
      <div className="left-content flex gap-2 relative">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] rounded-lg absolute top-[10px] left-[10px]"
          name=""
          id=""
        />
        <img
          src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=3411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[180px]"
          alt=""
        />
        <div className="details">
          <div className="text-[19px] font-[600]">Brand</div>
          <div className="">Product Name</div>
          <div className="text-[15px]  text-slate-400">Seller</div>
          <div className="my-2 flex gap-3">
            <Select
              className="!text-[12px]"
              w={120}
              sx={{
                paddingLeft: "10px",
                height: "25px",
                fontWeight: "600",
                borderRadius: "0",
                border: "none",
                backgroundColor: "#f4f4f4",
              }}
              placeholder="Size: Onesize"
            >
              <option value="option1">Option 1</option>
            </Select>
            <Select
              className="!text-[12px]"
              w={"80px"}
              sx={{
                paddingLeft: "10px",
                height: "25px",
                fontWeight: "600",
                borderRadius: "0",
                border: "none",
                backgroundColor: "#f4f4f4",
              }}
              placeholder="Qty: 1"
            >
              <option value="option1">Option 1</option>
            </Select>
          </div>
          <div className="flex items-center">
            <span className="font-[600]">₹1,899</span>
            <span className="line-through font-[400] text-gray-400 ml-2">
              ₹2,299
            </span>
            <span className="ml-4 text-orange-400">400 OFF</span>
          </div>
          <div className="text-sm font-semibold">Not returnable</div>
        </div>
      </div>
      <div className="right-content">
        <Icon as={RxCross2} boxSize={8} />
      </div>
    </div>
  );
};

const index = () => {
  return (
    <div className=" w-[700px] bg-white m-4 p-5">
      <div className="header flex  justify-between items-center px-3">
        <div className="selection-info flex gap-3">
          <input
            type="checkbox"
            className="w-[20px] h-full-[25px]"
            name=""
            id=""
          />
          <p className="text-lg font-[600]">0 ITEMS SELECTED</p>
        </div>
        <div className="actions  flex justify-between gap-3">
          <div className="remove-btn font-[600] text-sm text-gray-400">
            REMOVE
          </div>
          <div className="separator w-[2px] bg-gray-300"></div>
          <div className="wishlist-btn font-[600] text-sm text-gray-400">
            MOVE TO WISHLIST
          </div>
        </div>
      </div>
      <div className="products flex flex-col gap-2 mt-5">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default index;
