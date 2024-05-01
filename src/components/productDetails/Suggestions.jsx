"use client";
import { Text } from "@chakra-ui/react";
import ProductCard from "../search/components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "@/redux/slices/product";
const Suggestions = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state?.product?.product?.data);
  const products = useSelector((state) => state?.product?.products?.data);

  useEffect(() => {
    if (product) {
      dispatch(getProductsByCategory(product.category));
    }
  }, [product]);

  return (
    <div className="px-4 lg:px-12 bg-white">
      <Text className="text-2xl font-bold mb-2 ">Suggestions</Text>
      <div className="product-row pl-[1px] py-6  flex overflow-x-scroll gap-3 lg:gap-4 ">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
