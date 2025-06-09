"use client";
import React from "react";

interface SortOption {
  id: number;
  label: React.ReactElement;
  value: string;
  active: boolean;
}

interface SortOptionsProps {
  sortOptions: SortOption[];
  onSort: (index: number) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortOptions, onSort }) => {
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
            onClick={() => onSort(index)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortOptions;
