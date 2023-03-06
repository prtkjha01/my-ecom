import React from "react";
import styles from "../styles/ProductCard.module.css";
import {
  Box,
  Image,
  Button,
  IconButton,
  textDecoration,
  color,
} from "@chakra-ui/react";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({ name, index, description, price, handleClick, handleDelete}) => {
  var loadState = false;
  return (
    <Box _hover={{ bg: '#dedede' }}> 
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
          <Image
            className={styles.productImage}
            src="https://images.unsplash.com/photo-1677589205417-338f4d164cf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></Image>
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
        <div className={styles.buttonWrapper}>
          <IconButton
            size="sm"
            // className={styles.button}
            variant="outline"
            colorScheme="red"
            aria-label="Add to friends"
            icon={<DeleteIcon />}
            _hover={{bg: '#C73636' , color: "#fff" }}
            onClick={()=>handleDelete(index)}
          />
          <Button
            type="button"
            border="1px"
            variant="outline"
            borderColor="#3A003D"
            _hover={{ bg: "#3A003D", color: "#fff" }}
            // className={styles.button}
            size="sm"
            rightIcon={<ArrowForwardIcon />}
            isLoading={loadState}
            onClick={() => {
              handleClick(index);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default ProductCard;
