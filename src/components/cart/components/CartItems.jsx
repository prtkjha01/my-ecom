"use client";
import { useState } from "react";
import {
  Input,
  Text,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useNumberInput,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  removeFromCart,
  updateProductQuantity,
} from "@/redux/slices/cart";

export const CartItemsSkeleton = () =>
  [1, 2, 3, 4].map((i) => (
    <div
      key={i}
      className="cart-item flex items-center shadow gap-2 pr-2 sm:pr-10 mt-1 bg-white"
    >
      <Skeleton
        height={["150px", "180px", "180px", "180px"]}
        minWidth={["150px", "180px", "180px", "180px"]}
      />
      <SkeletonText width="100%" noOfLines={3} spacing="2" skeletonHeight="4" />
    </div>
  ));
const CartItem = ({ item: { product, count }, isLast, variant }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 1,
      defaultValue: count,
    });
  const [productQuantity, setProductQuantity] = useState(count);
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleRemove = () => {
    dispatch(removeFromCart(product._id))
      .then(() => {
        dispatch(getCart());
        onClose();
        toast({
          title: "Product removed !",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: error.message,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  };

  const handleProductQuantityUpdate = (type) => {
    dispatch(
      updateProductQuantity({
        id: product._id,
        count: type === "INCREMENT" ? productQuantity + 1 : productQuantity - 1,
      })
    )
      .then(() => {
        dispatch(getCart());
      })
      .catch((error) => {
        toast({
          title: error.message,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  };

  return (
    <div
      className={`cart-item flex justify-between items-center shadow  sm:pr-10 mt-1 bg-white ${
        isLast && "border-b border-gray-200 "
      } `}
    >
      <div className="details w-full flex  items-center gap-2 sm:gap-5">
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
            <HStack w={"150px"} mb={2}>
              <Button
                {...dec}
                onClick={() => {
                  handleProductQuantityUpdate("DECREMENT");
                }}
              >
                -
              </Button>
              <Input {...input} />
              <Button
                {...inc}
                onClick={() => {
                  handleProductQuantityUpdate("INCREMENT");
                }}
              >
                +
              </Button>
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
          <Button
            {...dec}
            onClick={() => {
              handleProductQuantityUpdate("DECREMENT");
            }}
          >
            -
          </Button>
          <Input {...input} />
          <Button
            {...inc}
            onClick={() => {
              handleProductQuantityUpdate("INCREMENT");
            }}
          >
            +
          </Button>
        </HStack>

        <button
          className="w-full text-center mt-3 font-[500] text-sm text-[#c70000] "
          onClick={onOpen}
        >
          REMOVE
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove {product.product_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to remove this product from cart ?
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" ml={3} onClick={handleRemove}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
const CartItems = ({ variant }) => {
  const cart = useSelector((state) => state?.cart?.cart?.data);

  return (
    <>
      {variant === "CART" && (
        <h2 className="text-lg font-semibold mb-8">
          Your Cart {`(${cart?.products?.length || 0})`}
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
