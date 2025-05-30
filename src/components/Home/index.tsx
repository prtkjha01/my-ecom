import React from "react";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Banner from "./components/Banner";
import Perks from "./components/Perks";

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <div className="home-content-wrapper mt-20 px-4 lg:px-10">
        <Categories />
        <PopularProducts />
      </div>
      <Banner />
      <div className="home-content-wrapper mt-48 mb-20 md:mb-48 px-4 lg:px-10">
        <Perks />
      </div>
    </div>
  );
};

export default Home;
