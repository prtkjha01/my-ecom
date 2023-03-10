import React, { useState, useEffect } from "react";
import styles from "../styles/ProductCard.module.css";
import {
  Box,
  Image,
  Button,
  ButtonGroup,
  IconButton,
  textDecoration,
  color,
} from "@chakra-ui/react";
import {
  TriangleUpIcon,
  TriangleDownIcon,
  ArrowForwardIcon,
  DeleteIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";

const ProductCard = ({
  name,
  env,
  index,
  description,
  price,
  showCounter,
  handleClick,
  handleDelete,
}) => {
  const counter = () => {
    const [count, setCount] = useState(1);
    if (env === "cart") {
      return (
        <div className={`${styles.counter}`}>
          <ButtonGroup
            size={{ base: "sm", md: "sm", lg: "sm" }}
            isAttached
            variant="outline"
          >
            <IconButton
              aria-label="decrease count"
              icon={<TriangleDownIcon />}
              onClick={() => {
                setCount(count <= 1 ? 1 : count - 1);
              }}
            />
            <Button>{count}</Button>
            <IconButton
              aria-label="increase count"
              icon={<TriangleUpIcon />}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </ButtonGroup>
        </div>
      );
    } else return "";
  };
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const delPositon = () => {
    return (
      <IconButton
        size={{ base: "sm", md: "sm", lg: "sm" }}
        // className={styles.button}
        variant="outline"
        colorScheme="red"
        aria-label="Delete"
        icon={<DeleteIcon />}
        _hover={{ bg: "#C73636", color: "#fff" }}
        onClick={() => handleDelete(index)}
      />
    );
  };
  var loadState = false;

  return (
    <Box className={styles.superContainer} _hover={{ bg: "#dedede" }}>
      <Box
        key={index}
        borderRadius=""
        className={styles.cardContainer}
        mb={2}
        p={2}
        borderBottomWidth="1px"
        // borderRightWidth={1}
        boxShadow=""
      >
        <div className={styles.imageContainer}>
          <a href={`/product/${name}`} target={"_blank"}>
            <Image
              className={styles.productImage}
              src="https://images.unsplash.com/photo-1677589205417-338f4d164cf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </a>
          {width < 768 ? delPositon() : ""}
        </div>
        <div className={styles.productInfo}>
          <p className={`${styles.productName} text-xl font-medium`}>{name}</p>
          <p className={`${styles.productDesc}`}>{description}</p>
          <p className={`${styles.productPrice} text-xl font-bold`}>
            ₹ {price}{" "}
            <span className={`${styles.incPrice} text-sm font-normal`}>
              ₹{parseInt(price) + 0.2 * parseInt(price)}
            </span>
          </p>
        </div>
        {/* {counter()} */}
        <div className={styles.buttonWrapper}>
          {width > 768 ? delPositon() : ""}
          {counter()}
          <Button
            type="button"
            border="1px"
            variant="outline"
            borderColor="#3A003D"
            _hover={{ bg: "#3A003D", color: "#fff" }}
            // className={styles.button}
            size={{ base: "sm", md: "sm", lg: "sm" }}
            rightIcon={<ArrowForwardIcon />}
            isLoading={loadState}
            onClick={() => {
              handleClick(index);
            }}
          >
            {env === "wishlist" ? `Add to Cart` : `Checkout`}
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default ProductCard;
