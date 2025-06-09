"use client";
import { useState, useEffect } from "react";
import {
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Radio,
  RadioGroup,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetProductsQuery } from "@/redux/api/product/product.api";

interface FiltersProps {
  priceRange: [number, number];
  isAssured: string;
  discount: string;
  onPriceRangeChange: (val: [number, number]) => void;
  onAssuredChange: (val: string) => void;
  onDiscountChange: (val: string) => void;
  onClearFilter: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  priceRange,
  isAssured,
  discount,
  onPriceRangeChange,
  onAssuredChange,
  onDiscountChange,
  onClearFilter,
}) => {
  const router = useRouter();
  const [filters, setFilters] = useState<{
    min_price?: number;
    max_price?: number;
    min_discount?: number;
    max_discount?: number;
    is_assured?: boolean;
  }>({});

  const { refetch } = useGetProductsQuery(
    {
      query: (router.query.q as string) || "",
      ...filters,
    },
    {
      skip: !router.query.q,
      refetchOnMountOrArgChange: true,
    }
  );

  const handlePriceRange = (val: [number, number]) => {
    onPriceRangeChange(val);
    handleFiltering();
  };

  const handleSetAssured = (val: string) => {
    onAssuredChange(val === "true" ? "false" : "true");
  };

  const handleDiscount = (val: string) => {
    onDiscountChange(val);
  };

  useEffect(() => {
    handleFiltering();
  }, [discount, isAssured]);

  const handleFiltering = () => {
    let newFilters: {
      min_price?: number;
      max_price?: number;
      min_discount?: number;
      max_discount?: number;
      is_assured?: boolean;
    } = {};
    if (priceRange.length === 2) {
      newFilters = {
        ...newFilters,
        min_price: priceRange[0],
        max_price: priceRange[1],
      };
    }
    if (discount && discount.length) {
      switch (discount) {
        case "LT_20":
          newFilters = {
            ...newFilters,
            min_discount: 0,
            max_discount: 20,
          };
          break;
        case "20_40":
          newFilters = {
            ...newFilters,
            min_discount: 20,
            max_discount: 40,
          };
          break;
        case "MT_40":
          newFilters = {
            ...newFilters,
            min_discount: 40,
            max_discount: 100,
          };
          break;
        default:
          break;
      }
    }
    if (isAssured) {
      newFilters = {
        ...newFilters,
        is_assured: isAssured === "true",
      };
    }
    setFilters(newFilters);
  };

  useEffect(() => {
    if (router.query.q) {
      refetch();
    }
  }, [filters, router.query.q, refetch]);

  return (
    <div className="mt-5 px-5 ">
      <Text className="text-center font-[600]">FILTERS</Text>
      <div className="price-range">
        <div className="filter-header mb-2">Price Range</div>
        <RangeSlider
          aria-label={["min", "max"]}
          max={10000}
          min={0}
          value={priceRange}
          onChange={(val) => onPriceRangeChange(val as [number, number])}
          step={500}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <Tooltip label={priceRange[0]} placement="top">
            <RangeSliderThumb boxSize={6} index={0} />
          </Tooltip>
          <Tooltip label={priceRange[1]} placement="top">
            <RangeSliderThumb boxSize={6} index={1} />
          </Tooltip>
        </RangeSlider>
      </div>
      <div className="discount mt-5">
        <div className="filter-header mb-2">Discount</div>
        <RadioGroup
          className="flex flex-col gap-1"
          defaultValue="LT_20"
          value={discount}
          onChange={onDiscountChange}
        >
          <Radio value="LT_20">{"< "}20%</Radio>
          <Radio value="20_40">20 % - 40%</Radio>
          <Radio value="MT_40">{" >"}40% </Radio>
        </RadioGroup>
      </div>
      <div className="assurance mt-5">
        <div className="filter-header mb-2">My Ecom Assured</div>
        <RadioGroup
          className="flex gap-2"
          defaultValue="false"
          value={isAssured}
          onChange={handleSetAssured}
        >
          <Radio value={"true"}>Yes</Radio>
          <Radio value={"false"}>No</Radio>
        </RadioGroup>
      </div>
      <div className="clear mt-5">
        <Button
          className="btn btn-primary"
          width={"100%"}
          borderRadius={0}
          onClick={onClearFilter}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filters;
