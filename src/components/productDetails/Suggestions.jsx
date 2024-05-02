"use client";
import { Text, Skeleton } from "@chakra-ui/react";
import ProductCard, {
  ProductCardSkeleton,
} from "../search/components/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "@/redux/slices/product";

const Suggestions = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state?.product?.product?.data);
  const products = useSelector((state) => state?.product?.products?.data);
  const loading = useSelector((state) => state?.product?.products?.loading);
  useEffect(() => {
    if (product) {
      dispatch(getProductsByCategory(product.category));
    }
  }, [product]);

  return (
    <div className="px-4 lg:px-12 bg-white">
      {loading ? (
        <Skeleton height="32px" width="120px" mb={2} />
      ) : (
        <Text className="text-2xl font-bold mb-2 ">Suggestions</Text>
      )}
      <div className="product-row pl-[1px] py-6  flex overflow-x-scroll gap-3 lg:gap-4 ">
        {products.length > 0 && !loading
          ? products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : [1, 2, 3, 4, 5, 6].map((key) => <ProductCardSkeleton key={key} />)}
      </div>
    </div>
  );
};

export default Suggestions;
