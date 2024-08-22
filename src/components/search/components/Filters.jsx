"use client";
import { useState, useEffect } from "react";
import {
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useRangeSlider,
  Radio,
  RadioGroup,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getProducts } from "@/redux/slices/product";
import { useRouter } from "next/router";
const Filters = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [isAssured, setIsAssured] = useState("");
  const [discount, setDiscount] = useState("");
  const [filters, setFilters] = useState({});
  const { val } = useRangeSlider({
    min: 0,
    max: 10000,
    defaultValue: [120, 2400],
    step: 500,
  });
  const handlePriceRange = (val) => {
    setPriceRange([val[0], val[1]]);
    handleFiltering();
  };
  const handleSetAssured = (val) => {
    setIsAssured((prev) => (prev === "true" ? "false" : "true"));
  };

  const handleDiscount = (val) => {
    setDiscount(val);
  };
  useEffect(() => {
    handleFiltering();
  }, [discount, isAssured]);
  const handleClearFilter = () => {
    setPriceRange([0, 10000]);
    setIsAssured("");
    setDiscount("");
    setFilters({});
  };
  const handleFiltering = () => {
    let newFilters = {};
    if (priceRange.length == 2) {
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
        is_assured: isAssured,
      };
    }
    setFilters(newFilters);
  };
  useEffect(() => {
    getProducts({ query: router?.query?.q || "" }, "WITHOUT_FILTERS");
  }, []);
  useEffect(() => {
    dispatch(
      getProducts({ query: router?.query?.q || "", ...filters }, "WITH_FILTERS")
    );
  }, [filters]);
  return (
    <div className="mt-5 px-5 ">
      <Text className="text-center font-[600]">FILTERS</Text>
      <div className="price-range">
        <div className="filter-header mb-2">Price Range</div>
        <RangeSlider
          aria-label={["min", "max"]}
          max={10000}
          min={0}
          value={[priceRange[0], priceRange[1]]}
          onChange={(val) => setPriceRange(val)}
          step={500}
          onChangeEnd={handlePriceRange}
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
          onChange={handleDiscount}
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
          onClick={() => {
            handleClearFilter();
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filters;
