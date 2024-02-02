import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
const PopularProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "Product A",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 499,
      currency_symbol: "₹",
    },
    {
      id: 2,
      product_name: "Product B",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 899,
      currency_symbol: "₹",
    },
    {
      id: 3,
      product_name: "Product C",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 1299,
      currency_symbol: "₹",
    },
    {
      id: 4,
      product_name: "Product D",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 1799,
      currency_symbol: "₹",
    },
    {
      id: 5,
      product_name: "Product E",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 299,
      currency_symbol: "₹",
    },
    {
      id: 6,
      product_name: "Product F",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 1599,
      currency_symbol: "₹",
    },
    {
      id: 7,
      product_name: "Product G",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 899,
      currency_symbol: "₹",
    },
    {
      id: 8,
      product_name: "Product H",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 1299,
      currency_symbol: "₹",
    },
    {
      id: 9,
      product_name: "Product I",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      price: 249,
      currency_symbol: "₹",
    },
  ]);
  return (
    <section className="popluar-products mt-24">
      <Text className="categories-section-header text-start text-2xl font-[600]">
        Popular Products
      </Text>
      <div className="product-row mt-6 flex overflow-x-scroll gap-3 lg:gap-4 justify-between">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
