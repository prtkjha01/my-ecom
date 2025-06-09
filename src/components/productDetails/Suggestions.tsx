"use client";
import React from "react";
import { Text, Skeleton } from "@chakra-ui/react";
import ProductCard, {
  ProductCardSkeleton,
} from "../search/components/ProductCard";
import { useGetProductsByCategoryQuery } from "@/redux/api/product/product.api";
import { useGetProductQuery } from "@/redux/api/product/product.api";
import { Product } from "@/types/product";
import { useRouter } from "next/router";

const Suggestions: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: productData } = useGetProductQuery(id as string);
  const product = productData?.data;

  const { data: productsData, isLoading } = useGetProductsByCategoryQuery(
    {
      category: product?.category || "",
      page: 1,
      limit: 100,
    },
    {
      skip: !product?.category,
      refetchOnMountOrArgChange: true,
    }
  );

  const products = productsData?.data?.products || [];

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
