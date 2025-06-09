"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Filters from "./components/Filters";
import ResultsGrid from "./components/ResultsGrid";
import SortOptions from "./components/SortOptions";
import { IoIosOptions } from "react-icons/io";

interface Product {
  _id: string;
  product_name: string;
  brand: string;
  images: string[];
  price: number;
  currency_symbol: string;
  rating?: number;
  active?: boolean;
}

interface SortOption {
  id: number;
  label: React.ReactElement;
  value: string;
  active: boolean;
}

interface SearchPageProps {
  products: Product[];
  isLoading: boolean;
  error?: any;
  priceRange: [number, number];
  isAssured: string;
  discount: string;
  sortOptions: SortOption[];
  onPriceRangeChange: (val: [number, number]) => void;
  onAssuredChange: (val: string) => void;
  onDiscountChange: (val: string) => void;
  onClearFilter: () => void;
  onSort: (index: number) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({
  products,
  isLoading,
  error,
  priceRange,
  isAssured,
  discount,
  sortOptions,
  onPriceRangeChange,
  onAssuredChange,
  onDiscountChange,
  onClearFilter,
  onSort,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="filters hidden sm:block md:block lg:block w-[20%]  shadow-lg">
          <Filters
            priceRange={priceRange}
            isAssured={isAssured}
            discount={discount}
            onPriceRangeChange={onPriceRangeChange}
            onAssuredChange={onAssuredChange}
            onDiscountChange={onDiscountChange}
            onClearFilter={onClearFilter}
          />
        </div>
        <div className="search-results w-full sm:w-[80%] md:w-[80%] lg:w-[80%] p-4 ">
          <div className="flex justify-between items-center mb-4">
            <SortOptions sortOptions={sortOptions} onSort={onSort} />

            <div className="filter-btn block sm:hidden">
              <IoIosOptions size={20} onClick={onOpen} />
            </div>
          </div>
          <ResultsGrid
            products={products}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Filters
              priceRange={priceRange}
              isAssured={isAssured}
              discount={discount}
              onPriceRangeChange={onPriceRangeChange}
              onAssuredChange={onAssuredChange}
              onDiscountChange={onDiscountChange}
              onClearFilter={onClearFilter}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchPage;
