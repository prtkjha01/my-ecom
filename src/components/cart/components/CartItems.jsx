import React, { useState } from "react";
import { Input, Text, HStack, Button, useNumberInput } from "@chakra-ui/react";

const CartItem = ({ item, isLast, onRemove, variant }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 1,
      defaultValue: item.quantity,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div
      className={`cart-item flex justify-between items-center pb-2 py-1 sm:pr-10 mt-1 ${
        isLast && "border-b border-gray-200 "
      } `}
      key={item.id}
    >
      <div className="details w-full flex items-center gap-2 sm:gap-5">
        <div className="image-container ">
          <img
            src={item.product_image}
            className="h-150px w-[150px] sm:h-[180px] sm:min-w-[180px] object-cover"
            alt={item.product_name}
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
          <Text className="product-name font-medium">{item.product_name}</Text>
          <Text className="price-row flex mt-4 gap-2">
            <span className="discounted-price">
              {item.currency_symbol}
              {(item.price - item.price * item.discount * 0.01).toFixed(2)}
            </span>
            <span className="price line-through">
              {item.currency_symbol}
              {item.price}
            </span>
            <span className="discount text-green-600">
              {item.discount}% off
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
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product_name: "Widget A",
      price: 19.99,
      quantity: 2,
      discount: 5,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
    {
      id: 2,
      product_name: "Gadget B",
      price: 29.99,
      quantity: 1,
      discount: 0,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
    {
      id: 3,
      product_name: "Thingamajig C",
      price: 39.99,
      quantity: 3,
      discount: 10,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
    {
      id: 4,
      product_name: "Gizmo D",
      price: 49.99,
      quantity: 1,
      discount: 8,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
    {
      id: 5,
      product_name: "Doodad E",
      price: 59.99,
      quantity: 2,
      discount: 15,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
    {
      id: 6,
      product_name: "Contraption F",
      price: 69.99,
      quantity: 1,
      discount: 3,
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      currency_symbol: "₹",
    },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    setCartItems(updatedCartItems);
  };
  return (
    <>
      {variant === "CART" && (
        <h2 className="text-lg font-semibold mb-8">
          Your Cart {`(${cartItems.length})`}
        </h2>
      )}
      <div className="cart-items-list ">
        {cartItems.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            isLast={index !== cartItems.length - 1}
            onRemove={handleRemoveItem}
            variant={variant}
          />
        ))}
      </div>
    </>
  );
};

export default CartItems;
