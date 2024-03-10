"use client";
import React, { useState } from "react";
import { Input, Text, HStack, Button, useNumberInput } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
const CartItem = ({ item: { product, count }, isLast, variant }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 1,
      defaultValue: count,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleRemove = () => {};

  return (
    <div
      className={`cart-item flex justify-between items-center shadow  sm:pr-10 mt-1 bg-white ${
        isLast && "border-b border-gray-200 "
      } `}
    >
      <div className="details w-full flex items-center gap-2 sm:gap-5">
        <div className="image-container ">
          <img
            src={product.images && product.images[0]}
            className="h-150px w-[150px] sm:h-[180px] sm:min-w-[180px] object-cover"
            alt={product.product_name}
          />
          <div
            className={`block sm:hidden mt-3 ${
              variant === "ORDER_SUMMARY" ? "hidden" : ""
            }`}
          >
            <HStack w={"150px"}>
              <Button {...inc}>+</Button>
              <Input {...input} />
              <Button {...dec}>-</Button>
            </HStack>
          </div>
        </div>

        <div className="text-container">
          <Text className="product-name font-medium">
            {product.product_name}
          </Text>
          <Text className="price-row flex mt-4 gap-2">
            <span className="discounted-price">
              {product.currency_symbol}
              {(
                product.price -
                product.price * product.discount * 0.01
              ).toFixed(2)}
            </span>
            <span className="price line-through">
              {product.currency_symbol}
              {product.price}
            </span>
            <span className="discount text-green-600">
              {product.discount}% off
            </span>
          </Text>
        </div>
      </div>
      <div
        className={`actions hidden sm:block justify-self-end ${
          variant === "ORDER_SUMMARY" ? "sm:hidden" : ""
        }`}
      >
        <Text className="quantity text-center mb-3">Quantity</Text>
        <HStack w={"150px"}>
          <Button {...inc}>+</Button>
          <Input {...input} />
          <Button {...dec}>-</Button>
        </HStack>
        <button
          className="w-full text-center mt-3 font-[500] text-sm text-[#c70000] "
          onClick={handleRemove}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};
const CartItems = ({ variant }) => {
  const cart = useSelector((state) => state?.cart?.cart);

  return (
    <>
      {variant === "CART" && (
        <h2 className="text-lg font-semibold mb-8">
          Your Cart {`(${cart?.products?.length})`}
        </h2>
      )}
      <div className="cart-items-list ">
        {cart?.products?.length > 0 ? (
          cart?.products.map((item, index) => (
            <CartItem
              key={item.product._id}
              item={item}
              isLast={index !== cart?.products.length - 1}
              variant={variant}
            />
          ))
        ) : (
          <div>Your Cart is empty.</div>
        )}
      </div>
    </>
  );
};

export default CartItems;
