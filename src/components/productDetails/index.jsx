"use client";
// import { useState, useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ProductSpecifications from "./components/ProductSpecifications";
import ProductReviews from "./components/ProductReviews";
import FAQs from "./components/FAQs";
import DeliveryInfo from "./components/DeliveryInfo";
const index = () => {
  const specifications = [
    "Lorem ipsum dolor",
    "Amet consectetur adipiscing",
    "Sed do eiusmod",
    "Incididunt ut labore",
    "Et dolore magna",
  ];
  const reviews = [
    {
      id: "_h8j8lpr2n",
      rating: "3.2",
      heading: "Sit amet consectetur adipiscing",
      description:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis fugiat nulla pariatur.",
      date: "2013-05-22",
      reviewer: "David Taylor",
    },
    {
      id: "_y5q3cn9kl",
      rating: "2.9",
      heading: "Dolor sit amet consectetur",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2011-11-18",
      reviewer: "Alice Williams",
    },
    {
      id: "_u2t1x7p4e",
      rating: "4.1",
      heading: "Adipiscing elit sed do",
      description:
        "Dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      date: "2020-08-04",
      reviewer: "Emma Smith",
    },
    {
      id: "_v4r6m2q7f",
      rating: "1.8",
      heading: "Labore et dolore magna",
      description:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum. Dolor sit amet consectetur adipiscing elit.",
      date: "2017-02-10",
      reviewer: "John Doe",
    },
    {
      id: "_p9s0w3j8l",
      rating: "3.7",
      heading: "Tempor incididunt ut labore",
      description:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Qui officia deserunt mollit anim id est laborum.",
      date: "2019-09-01",
      reviewer: "Olivia Johnson",
    },
  ];
  const faqs = [
    {
      question: "Quis nostrud exercitation ullamco?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Cupidatat non proident, sunt in culpa?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Voluptate velit esse cillum dolore?",
      answer:
        "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      question: "Ut enim ad minim veniam quis?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Consectetur adipiscing elit, sed do?",
      answer:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const url =
    "https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png";

  const product_name =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, repellat.";
  const currency_symbol = "₹";
  const price = 1000;
  const discount = 20;
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

  return (
    <div className="pt-8 px-4 md:px-12 lg:px-12 relative flex flex-col sm:flex-col md:flex-row lg:flex-row gap-12 bg-white">
      <div className="left-container md:sticky top-[112px] self-start md:h-[700px]">
        <ProductImage url={url} />

        <div className="actions flex gap-2 mt-5">
          <Button className="w-full" borderRadius={0}>
            Buy Now
          </Button>
          <Button className="w-full" borderRadius={0}>
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="right-container w-full">
        <div className="product-info">
          <ProductInfo
            productName={product_name}
            currencySymbol={currency_symbol}
            price={price}
            discount={discount}
            description={description}
          />
        </div>

        <div className="delivery-info mt-12">
          <DeliveryInfo />
        </div>

        <div className="specifications mt-20">
          <ProductSpecifications specifications={specifications} />
        </div>

        <div className="faqs mt-12">
          <FAQs faqs={faqs} />
        </div>

        <div className="reviews mt-12">
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default index;
