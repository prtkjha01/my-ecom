import { Router, useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Product Details for {productId}</div>;
};

export default ProductDetails;
