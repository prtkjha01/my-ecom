"use client";
import { sortProducts } from "@/redux/slices/product";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const SortOptions = () => {
  const dispatch = useDispatch();
  const [sortOptions, setSortOptions] = useState([
    {
      id: 1,
      label: <span>Price &uarr;</span>,
      // "Price ⬆️",
      value: "PHTL",
      active: false,
    },
    {
      id: 2,
      label: <span>Price &darr;</span>,
      value: "PLTH",
      active: false,
    },
    {
      id: 3,
      label: <span>Rating &uarr;</span>,
      value: "RHTL",
      active: false,
    },
    {
      id: 4,
      label: <span>Rating &darr;</span>,
      value: "RLTH",
      active: false,
    },
  ]);
  const products = useSelector((state) => state?.product?.products?.data);
  const handleSort = (index) => {
    const updatedSortOptions = sortOptions.map((option, i) => ({
      ...option,
      active: i === index,
    }));

    setSortOptions(updatedSortOptions);
  };
  return (
    <div className="sort-widget flex gap-5 ">
      <div className="font-bold text-xs sm:text-sm md:text-sm lg:text-sm">
        sort by
      </div>
      <div className="sort-options gap-3 flex">
        {sortOptions.map((option, index) => (
          <div
            key={option.id}
            className={`cursor-pointer ${
              option.active ? " text-blue-600" : ""
            } font-bold text-xs sm:text-sm md:text-sm lg:text-sm`}
            onClick={(e) => {
              handleSort(index);
              dispatch(sortProducts(products, option.value));
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortOptions;
