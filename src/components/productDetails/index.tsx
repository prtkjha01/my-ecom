"use client";
import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { Button, Skeleton } from "@chakra-ui/react";
import { useGetProductQuery } from "@/redux/api/product/product.api";
import {
  useAddToCartMutation,
  useGetCartQuery,
} from "@/redux/api/cart/cart.api";
import { getCookie } from "@/utils/cookies";
import ProductImage, { ProductImageSkeleton } from "./components/ProductImage";
import ProductInfo, { ProductInfoSkeleton } from "./components/ProductInfo";
import ProductSpecifications, {
  ProductSpecificationsSkeleton,
} from "./components/ProductSpecifications";
import ProductReviews, {
  ProductReviewsSkeleton,
} from "./components/ProductReviews";
import FAQs, { FAQsSkeleton } from "./components/FAQs";
import DeliveryInfo from "./components/DeliveryInfo";

const Index: React.FC = () => {
  const toast = useToast();
  const token = getCookie("token");
  const router = useRouter();
  const { id } = router.query;

  const { data: productData, isLoading: loading } = useGetProductQuery(
    id as string
  );
  const product = productData?.data;
  const [addToCart, { isLoading: addToCartLoading }] = useAddToCartMutation();
  const { refetch: refetchCart } = useGetCartQuery();

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam at ut
  recusandae sequi.`;

  const handleAddToCart = async () => {
    if (!product?._id) return;

    if (token) {
      try {
        await addToCart({
          product_id: product._id,
          quantity: 1,
        }).unwrap();
        await refetchCart();
        toast({
          title: "Product added to cart",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      } catch (error: any) {
        toast({
          title: error.message || "Failed to add to cart",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
    } else {
      router.push(`/login?redirect=/product/${product._id}`);
    }
  };

  const handleBuyNow = () => {
    if (!product?._id) return;

    if (token) {
      router.push(`/checkout/${product._id}`);
    } else {
      router.push(`/login?redirect=/checkout/${product._id}`);
    }
  };

  return (
    <>
      <Head>
        <title>
          {product ? `${product?.brand} ${product.product_name}` : "Product"} |
          MyEcom
        </title>
      </Head>
      <div className="pt-8 px-4 md:px-12 lg:px-12 relative flex flex-col sm:flex-col md:flex-row lg:flex-row gap-12 bg-white">
        <div className="left-container w-full md:w-[500px] lg:w-[500px] md:sticky top-[112px] self-start md:h-[700px]">
          {loading ? (
            <ProductImageSkeleton />
          ) : (
            <ProductImage url={product?.images?.[0] || ""} />
          )}

          {loading ? (
            <div className="actions flex gap-2 mt-5">
              <Skeleton height="40px" width="100%" />
              <Skeleton height="40px" width="100%" />
            </div>
          ) : (
            <div className="actions flex gap-2 mt-5">
              <Button
                className="w-full"
                borderRadius={0}
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              <Button
                className="w-full"
                borderRadius={0}
                onClick={handleAddToCart}
              >
                {addToCartLoading ? (
                  <div className="loader black" />
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>
          )}
        </div>

        <div className="right-container w-full">
          <div className="product-info">
            {loading ? (
              <ProductInfoSkeleton />
            ) : (
              <ProductInfo
                productName={
                  product ? `${product.brand} ${product.product_name}` : ""
                }
                rating={product?.rating || 0}
                currencySymbol={product?.currency_symbol || "$"}
                price={product?.price || 0}
                discount={0}
                description={product?.description || ""}
              />
            )}
          </div>

          <div className="delivery-info mt-12">
            {loading ? (
              <Skeleton height="40px" width="250px" />
            ) : (
              <DeliveryInfo />
            )}
          </div>

          <div className="specifications mt-20">
            {loading ? (
              <ProductSpecificationsSkeleton />
            ) : (
              <ProductSpecifications
                specifications={product?.specifications || []}
              />
            )}
          </div>

          <div className="faqs mt-12">
            {loading ? <FAQsSkeleton /> : <FAQs faqs={product?.faqs || []} />}
          </div>

          <div className="reviews mt-12">
            {loading ? (
              <ProductReviewsSkeleton />
            ) : (
              <ProductReviews reviews={product?.reviews || []} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
