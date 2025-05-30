"use client";
import React, { useEffect } from "react";
import { Text, Skeleton } from "@chakra-ui/react";
import ProductCard, {
  ProductCardSkeleton,
} from "../search/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "@/redux/slices/product";
import { AppDispatch, RootState } from "@/redux/store";
import { Product } from "@/types/product";

const Suggestions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const product = useSelector(
    (state: RootState) => state?.product?.product?.data
  );
  const products = useSelector(
    (state: RootState) => state?.product?.products?.data
  );
  const isLoading = useSelector(
    (state: RootState) => state?.product?.products?.isLoading
  );

  useEffect(() => {
    if (product?.category) {
      dispatch(getProductsByCategory(product.category));
    }
  }, [product, dispatch]);

  return (
    <div className="px-4 lg:px-12 bg-white">
      {isLoading ? (
        <Skeleton height="32px" width="120px" mb={2} />
      ) : (
        <Text className="text-2xl font-bold mb-2 ">Suggestions</Text>
      )}
      <div className="product-row pl-[1px] py-6  flex overflow-x-scroll gap-3 lg:gap-4 ">
        {products.length > 0 && !isLoading
          ? products.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : [1, 2, 3, 4, 5, 6].map((key) => <ProductCardSkeleton key={key} />)}
      </div>
    </div>
  );
};

export default Suggestions;
