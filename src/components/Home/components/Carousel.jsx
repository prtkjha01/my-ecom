"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Icon, createIcon } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCarouselProducts } from "@/redux/slices/product";
const Carousel = () => {
  const test = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const carouselProducts = useSelector(
    (state) => state.product?.carouselProducts
  );
  // console.log("carouselProducts", carouselProducts);
  const [carouselData, setCarouselData] = useState(carouselProducts || []);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateCarouselData = (index) => {
    const updatedData = carouselData.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setCarouselData(updatedData);
  };

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    updateCarouselData(index);
    test.current.scrollTo({
      left: index * test.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const newIndex =
      (activeIndex - 1 + carouselData.length) % carouselData.length;
    setActiveIndex(newIndex);
    updateCarouselData(newIndex);

    if (newIndex === carouselData.length - 1) {
      test.current.scrollTo({
        left: test.current.scrollWidth - test.current.clientWidth,
        behavior: "smooth",
      });
    } else {
      test.current.scrollTo({
        left: test.current.scrollLeft - test.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    const newIndex = (activeIndex + 1) % carouselData.length;
    setActiveIndex(newIndex);
    updateCarouselData(newIndex);

    if (newIndex === 0) {
      test.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      test.current.scrollTo({
        left: test.current.scrollLeft + test.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (activeIndex + 1) % carouselData.length;
      scrollToIndex(newIndex);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex, carouselData.length]);

  useEffect(() => {
    dispatch(getCarouselProducts());
  }, []);
  useEffect(() => {
    setCarouselData(carouselProducts);
  }, [carouselProducts]);
  return (
    <>
      <div className="carousel-container relative w-full">
        <div
          className="carousel-wrapper flex overflow-x-hidden lg:h-[600px] md:h-[500px] sm:h-[400px] h-[250px] w-full"
          ref={test}
        >
          {carouselData.map((carouselItem, index) => {
            return (
              <div
                key={carouselItem._id}
                className={`carousel-item bg-white min-w-full cursor-pointer`}
                onClick={() => router.push(`/product/${carouselItem._id}`)}
              >
                <img
                  src={carouselItem.images[0]}
                  className="lg:h-[600px] md:h-[500px] sm:h-[400px] h-[250px] w-full object-contain"
                  alt="product-image"
                />
              </div>
            );
          })}
        </div>
        {/* PAGINATION INDICATORS START */}
        <div className="pagination-container absolute bottom-0 pb-1 w-full bg-[#4b4b4b6b] flex justify-center items-center gap-[5px]">
          {carouselData.map((item, index) => {
            return (
              <div
                key={item._id}
                className="pagination-indicator cursor-pointer"
                onClick={() => scrollToIndex(index)}
              >
                <Icon
                  viewBox="0 0 200 200"
                  height={2}
                  width={2}
                  className={` ${
                    item.active && "border border-white"
                  }  rounded-full hover:border hover:border-white`}
                  color="white"
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </div>
            );
          })}
        </div>
        {/* PAGINATION INDICATORS END */}

        {/* NAVIGATION BUTTONS START */}
        <button
          className="absolute top-[45%] left-3 bg-[#4b4b4b6b] rounded-full shadow-lg"
          onClick={() => {
            scrollLeft();
          }}
        >
          <ChevronLeftIcon color="#fff" boxSize={10} />
        </button>
        <button
          className="absolute top-[45%] right-3 bg-[#4b4b4b6b] rounded-full shadow-lg"
          onClick={() => {
            scrollRight();
          }}
        >
          <ChevronRightIcon color="#fff" boxSize={10} />
        </button>
        {/* NAVIGATION BUTTONS END */}
      </div>
    </>
  );
};

export default Carousel;
