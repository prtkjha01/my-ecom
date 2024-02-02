"use client";
import React, { useState } from "react";

const SortOptions = () => {
  const [sortOptions, setSortOptions] = useState([
    {
      id: 1,
      label: "Price Hight to Low",
      value: "PHTL",
      active: false,
    },
    {
      id: 2,
      label: "Price Low to High",
      value: "PLTH",
      active: false,
    },
    {
      id: 3,
      label: "Rating High to Low",
      value: "RHTL",
      active: false,
    },
    {
      id: 4,
      label: "Rating Low to High",
      value: "RHTL",
      active: false,
    },
  ]);
  const handleSort = (index) => {
    const updatedSortOptions = sortOptions.map((option, i) => ({
      ...option,
      active: i === index,
    }));

    setSortOptions(updatedSortOptions);
  };
  return (
    <div className="sort-widget flex gap-5 mt-2 mb-4">
      <div>sort by</div>
      <div className="sort-options gap-3 flex">
        {sortOptions.map((option, index) => (
          <div
            key={option.id}
            className={`cursor-pointer ${
              option.active ? " text-blue-600" : ""
            }`}
            onClick={(e) => {
              handleSort(index);
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
