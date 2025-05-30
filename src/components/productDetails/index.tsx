"use client";
import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button, Skeleton } from "@chakra-ui/react";
import { getProduct } from "@/redux/slices/product";
import { addToCart, getCart } from "@/redux/slices/cart";
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
import { AppDispatch, RootState } from "@/redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  product_name: string;
  brand: string;
  images: string[];
  price: number;
  currency_symbol: string;
  rating?: number;
  active?: boolean;
}

const Index: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  const token = getCookie("token");
  const router = useRouter();
  const { id } = router.query;
  const product = useSelector(
    (state: RootState) => state?.product?.product?.data
  ) as Product | null;
  const loading = useSelector(
    (state: RootState) => state?.product?.product?.isLoading
  );
  const addToCartLoading = useSelector(
    (state: RootState) => state?.cart?.addToCart?.isLoading
  );
  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam at ut
  recusandae sequi, hic soluta velit magnam, facere quis nulla ea debitis
  perferendis quaerat sit numquam odio tempora harum porro esse deleniti
  consequatur omnis repellat eveniet. Esse tempora provident minus
  consequuntur. Deserunt voluptatibus sed labore laboriosam aliquid
  reiciendis qui beatae. Laborum in atque ipsam recusandae ducimus
  architecto quibusdam similique nam. Veritatis neque deleniti quis
  dolorem ratione magni. Facere numquam odit corporis animi, laboriosam
  laudantium pariatur accusantium fugiat doloremque laborum eius possimus
  inventore! Dolorum quaerat nulla exercitationem, a maiores perferendis
  ut quae soluta ipsum? Dignissimos magnam quaerat optio temporibus
  veritatis dicta.`;

  const fetchProduct = async () => {
    if (typeof id === "string") {
      try {
        await dispatch(getProduct(id)).unwrap();
      } catch (error: any) {
        toast({
          title: error.message,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
    }
  };
  useEffect(() => {
    if (id && typeof window !== "undefined") {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = async () => {
    if (!product?._id) return;

    if (token) {
      try {
        await dispatch(
          addToCart({
            product_id: product._id,
            quantity: 1,
          })
        ).unwrap();
        await dispatch(getCart()).unwrap();
        toast({
          title: "Product added to cart",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      } catch (error: any) {
        toast({
          title: error.message,
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

  if (!product && !loading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {product ? `${product.brand} ${product.product_name}` : "Product"} |
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
                description={description}
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
              <ProductSpecifications specifications={[]} />
            )}
          </div>

          <div className="faqs mt-12">
            {loading ? <FAQsSkeleton /> : <FAQs faqs={[]} />}
          </div>

          <div className="reviews mt-12">
            {loading ? (
              <ProductReviewsSkeleton />
            ) : (
              <ProductReviews reviews={[]} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
