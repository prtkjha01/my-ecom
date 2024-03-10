import { Icon } from "@chakra-ui/react";
import { MdLocalPhone } from "react-icons/md";
import React from "react";

const Address = ({ address }) => {
  return (
    <div
      key={address.id}
      className="p-3 relative hover:scale-105 transition duration-300 bg-white shadow"
    >
      <h2 className="text-xl font-[600]">{address.name}</h2>
      <p className="mt-2">
        {address.address_line_1}, {address.address_line_2},
      </p>
      <p>
        {address.city}, {address.state}, {address.country}
      </p>
      <p className="font-[500] flex items-center justify-between mt-3">
        <span className="flex items-center gap-1">
          <Icon as={MdLocalPhone} boxSize={4} />
          {address.mobile}
        </span>
        <span className="flex md:flex-col lg:flex-row font-[600] gap-5">
          <span>EDIT</span>
          <span className=" text-red-600">DELETE</span>
        </span>
      </p>
      <div className="tag absolute top-2 right-10 bg-slate-300 text-slate-600 text-sm font-[500] rounded-sm p-1">
        {address.type}
      </div>
      <input
        className="tag absolute top-2 right-2 h-5 w-5 cursor-pointer"
        type="checkbox"
        name=""
        id=""
      />
    </div>
  );
};

export default Address;
