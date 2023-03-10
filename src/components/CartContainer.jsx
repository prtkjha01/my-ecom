import React, { useState } from "react";
import styles from "../styles/CartContainer.module.css";
import ProductCard from "./ProductCard";
const CartContainer = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      name: "product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
    {
      id: 2,
      name: "product 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
    {
      id: 3,
      name: "product 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
    {
      id: 4,
      name: "product 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
    {
      id: 5,
      name: "product 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
    {
      id: 6,
      name: "product 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sem urna. Sed vehicula scelerisque lacus ac auctor. Etiam finibus lectus ac venenatis ultricies",
      price: "2500",
    },
  ]);
  const fun = (i) => {
    console.log("inside fun!");
    const temp = cartProducts.map((ekObject, index) => {
      if (index === i) {
        console.log("index matched!");
        ekObject.price++;
        return ekObject;
      } else {
        console.log("other indices", index);
        return ekObject;
      }
    });
    // temp[i].price += 1;
    setCartProducts(temp);
  };
  const handleDelete = (index) => {
    setCartProducts([
      ...cartProducts.slice(0, index),
      ...cartProducts.slice(index + 1, cartProducts.length),
    ]);
    // console.log(wishlistProducts);
  };
  return (
    <div className={styles.cartWrapper}>
      <div>
        {cartProducts.map((product, index) => {
          return (
            <ProductCard
              key={index}
              env={"cart"}
              name={product.name}
              description={product.description}
              price={product.price}
              index={index}
              handleClick={fun}
              handleDelete={handleDelete}
              showCounter={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartContainer;
