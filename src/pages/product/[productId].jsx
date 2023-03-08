import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductView from "@/components/ProductView";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();

  const productId = router.query.productId;

  const productDetails = {
    id: productId,
    name: "Airdopes 411 in ear Pro",
    brand: "boAt",
    images: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/177292c0-d3d8-4ee3-adfe-7c539f030252_600x.png?v=1625046016",
    ],
    price: 2000,
    rating: 4.5,
    discount: 20,
    variants: ["red", "blue", "green"],
    specifications: [
      "Active Noise cancellation",
      "500 mAh battery",
      "Google Assistant Compatible",
      "IPX4 water resistant",
    ],
    similarProducts: [
      "Product_1",
      "Product_2",
      "Product_3",
      "Product_4",
      "Product_5",
      "Product_6",
      "Product_7",
      "Product_8",
      "Product_9",
    ],
    FAQ: [
      {
        question: "How long do they last on a single charge",
        answer: "10 hours",
      },
      {
        question: "Are they compatible with iPhone",
        answer: "Yes these are compatible with all phones",
      },
    ],
    reviews: [
      {
        name: "Reviewer_1",
        title: "Amazing Product",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius mi in nisi pharetra, et commodo quam pretium. Vivamus ultrices dapibus elit, a vulputate tellus tempus eget.",
        rating: 5,
        date: "2 months ago",
      },
      {
        name: "Reviewer_2",
        title: "Absolute Perfection",
        comment:
          "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere enim ex, ut convallis nibh elementum sit amet",
        rating: 4.5,
        date: "1 month ago",
      },
      {
        name: "Udaas Lawda",
        title: "Waste of money",
        comment: "trash product, does not connect properly",
        rating: 1,
        date: "3 months ago",
      },
    ],
    category: "Tech",
  };

  return (
    <div>
      <Head>
        <title>{productId}</title>
      </Head>
      <Navbar />
      <ProductView productDetails={productDetails} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
