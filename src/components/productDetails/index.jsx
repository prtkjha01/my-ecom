"use client";
import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { getProduct } from "@/redux/slices/product";
import { addToCart } from "@/redux/slices/cart";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ProductSpecifications from "./components/ProductSpecifications";
import ProductReviews from "./components/ProductReviews";
import FAQs from "./components/FAQs";
import DeliveryInfo from "./components/DeliveryInfo";
const index = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;
  const product = useSelector((state) => state?.product?.product);

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
    dispatch(getProduct(id));
  };
  useEffect(() => {
    if (id && typeof window !== "undefined") {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        products: [id],
      })
    )
      .then(() => {
        toast({
          title: "Product added to cart",
          status: "success",
          variant: "left-accent",
          position: "top-right",
          duration: 1500,
          isClosable: true,
          // containerStyle: {
          //   position: "absolute",
          //   top: "5rem",
          // },
        });
      })
      .catch((error) => {
        toast({
          title: error.message,
          status: "error",
          variant: "left-accent",
          position: "top-right",
          duration: 1500,
          isClosable: true,
          // containerStyle: {
          //   position: "absolute",
          //   top: "5rem",
          // },
        });
      });
  };

  return (
    <>
      <Head>
        <title>{product.brand + " " + product.product_name} | MyEcom</title>
      </Head>
      <div className="pt-8 px-4 md:px-12 lg:px-12 relative flex flex-col sm:flex-col md:flex-row lg:flex-row gap-12 bg-white">
        <div className="left-container w-full md:w-[500px] lg:w-[500px] md:sticky top-[112px] self-start md:h-[700px]">
          <ProductImage
            url={product.images && product.images.length && product.images[0]}
          />

          <div className="actions flex gap-2 mt-5">
            <Button className="w-full" borderRadius={0}>
              Buy Now
            </Button>
            <Button
              className="w-full"
              borderRadius={0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="right-container w-full">
          <div className="product-info">
            <ProductInfo
              productName={product.brand + " " + product.product_name}
              rating={product.rating}
              currencySymbol={product.currency_symbol}
              price={product.price}
              discount={product.discount}
              description={product.description || description}
            />
          </div>

          <div className="delivery-info mt-12">
            <DeliveryInfo />
          </div>

          <div className="specifications mt-20">
            <ProductSpecifications
              specifications={product.specifications || []}
            />
          </div>

          <div className="faqs mt-12">
            <FAQs faqs={product.faqs || []} />
          </div>

          <div className="reviews mt-12">
            <ProductReviews reviews={product.reviews || []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
