"use client";
import React from "react";
import {
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useRangeSlider,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
const Filters = () => {
  //   const { getTrackProps, getFilledTrackProps, getThumbProps, value } =
  //     useRangeSlider();
  const [value, setValue] = React.useState("1");
  const { val } = useRangeSlider({
    min: 100,
    max: 10000,
    defaultValue: [120, 2400],
    step: 500,
  });
  //   console.log(val);
  return (
    <div className="mt-5 px-5 ">
      <Text className="text-center font-[600]">FILTERS</Text>
      <div className="price-range">
        <div className="filter-header mb-2">Price Range</div>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[120, 2400]}
          min={100}
          max={10000}
          step={500}
          //   onChangeEnd={(val) => console.log("val", val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </div>
      <div className="discount mt-5">
        <div className="filter-header mb-2">Discount</div>
        <RadioGroup
          className="flex flex-col gap-1"
          onChange={setValue}
          value={value}
        >
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </RadioGroup>
      </div>
      <div className="assurance mt-5">
        <div className="filter-header mb-2">My Ecom Assured</div>
        <RadioGroup className="flex gap-2" onChange={setValue} value={value}>
          <Radio value="1">Yes</Radio>
          <Radio value="2">No</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Filters;
