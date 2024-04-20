"use client";
import { sortProducts } from "@/redux/slices/product";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

const ResultsGrid = () => {
  const products = useSelector((state) => state?.product?.products);

  return (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default ResultsGrid;
