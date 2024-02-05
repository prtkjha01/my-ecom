"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Icon, createIcon } from "@chakra-ui/react";
const Carousel = () => {
  const test = useRef(null);
  const [carouselData, setCarouselData] = useState([
    {
      id: 1,
      color: "red",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131240/my-ecom/clothing/Adidas_Yeazy_Ultraboost_qqi9ei.png",
      active: true,
    },
    {
      id: 2,
      color: "green",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131491/my-ecom/fitness/Optimum_Nutrition_Gold_Standard_Whey_wsejax.png",
      active: false,
    },
    {
      id: 3,
      color: "blue",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131190/my-ecom/clothing/Varsity_Jacket_xneucg.png",
      active: false,
    },
    {
      id: 4,
      color: "yellow",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131463/my-ecom/fitness/1RM_JK-500_Power_Rack_r5mmca.png",
      active: false,
    },
    {
      id: 5,
      color: "purple",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131494/my-ecom/fitness/C4_Pre_Workout_ft47n9.png",
      active: false,
    },
    {
      id: 6,
      color: "orange",

      image:
        "https://res.cloudinary.com/debwkutxb/image/upload/v1707131239/my-ecom/clothing/Nike_Air_Jordan_Travis_Scott_rijxfw.png",
      active: false,
    },
  ]);
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
                key={carouselItem.id}
                className={`carousel-item bg-white min-w-full`}
              >
                <img
                  src={carouselItem.image}
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
                key={item.id}
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
