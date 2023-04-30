import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image_ from "next/image";
import styles from "../styles/SearchContainer.module.css";
import {
  Box,
  Badge,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  Spinner,
  Image,
  IconButton,
  Divider,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import { StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdAccountCircle } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import FilterContainer from "./FilterContainer";
import MyEcomAssured from "../assets/MyEcomAssured.png";
import logoTransparent from "../assets/logoTransparent.png";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/search";

let NextImage = Image_;
const SearchContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isRed, setIsRed] = useState(false);
  const [hasData, setHasData] = useState(false);

  async function getProductsFromStore() {
    await dispatch(getProducts);
    setHasData(true);
  }
  const { products } = useSelector((state) => state.search);
  // console.log("this is useSelectors response", products);

  useEffect(() => {
    getProductsFromStore();
  }, []);
  return (
    <div className={`${styles.superContainer}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.sidebar}`}>
          <FilterContainer />
        </div>

        {/************************************** GRID CONTAINER ****************************************/}

        <div>
          {!hasData && (
            <Center>
              <Spinner
                mt={10}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}
          <Grid
            p={8}
            className={styles.grid}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
          >
            {hasData &&
              products?.data.map((product, index) => {
                return (
                  /**************************************CARD****************************************/
                  <Card
                    key={product._id}
                    className={`${styles.list}`}
                    w="100%"
                    //  h="80"
                    borderRadius="none"
                    bg="#fff"
                    boxShadow={`xl`}
                    _hover={{
                      // backgroundColor: "green",
                      // width: "400px",
                      boxShadow: "1000px #808080",
                      background: "#ededed",
                      // borderRadius: "5px",
                      transform: "scale(1.1,1.1)",
                      // margin: "0 10px",
                      // zIndex: 1,
                      // border: "5px solid red",
                    }}
                  >
                    <Image
                      h={300}
                      // w={250}
                      className={`${styles.productImage} text-center`}
                      src={product.images[0]}
                      // "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/177292c0-d3d8-4ee3-adfe-7c539f030252_600x.png?v=1625046016"
                      onClick={() => {
                        router.push(`/product/${product._id}`);
                      }}
                      // borderRadius="lg"
                    />
                    <CardBody className={`${styles.productDetails}`}>
                      <div className={`${styles.productName}`}>
                        <p className={`text-base font-semibold text-start`}>
                          {product.brand + " " + product.name}
                        </p>
                        <IconButton
                          variant="ghost"
                          colorScheme="black"
                          boxSize={4}
                          aria-label="add to wishlist"
                          fontSize="20px"
                          icon={
                            isRed === false ? (
                              <AiOutlineHeart />
                            ) : (
                              <AiFillHeart color="red" />
                            )
                          }
                          onClick={() => {
                            setIsRed(!isRed);
                          }}
                        />
                      </div>
                      {/****************************** RATING*************************************/}
                      <div className={`${styles.badgeContainer} `}>
                        <Badge
                          colorScheme={
                            product.rating > 4
                              ? "green"
                              : product.rating < 3.9 && product.rating > 3
                              ? "yellow"
                              : "red"
                          }
                          variant="solid"
                        >
                          {product.rating} <StarIcon />
                        </Badge>
                      </div>
                      <div className={`${styles.assuranceContainer}`}>
                        <NextImage
                          height={25}
                          // width={300}
                          src={MyEcomAssured}
                          alt="assurance logo"
                        />
                      </div>
                      <div className={`mt-5 ${styles.priceContainer}`}>
                        <p
                          className={`text-2xl font-bold pt-2 ${styles.price}`}
                        >
                          ₹ {product.price + "   "}
                          <span
                            className={`text-base font-normal line-through text-gray-400 pl-3 pb-0`}
                          >
                            {"₹"}
                            {product.price +
                              (product.discount / 100) * product.price}
                          </span>
                          <span
                            className={`text-base font-medium text-green-500 pl-4`}
                          >
                            {" " + product.discount}% off
                          </span>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
{
  /* <Box
  key={index}
  className={`${styles.list}`}
  w="100%"
  //  h="80"
  bg="#fff"
  boxShadow={`xl`}
  _hover={{
    // backgroundColor: "green",
    // width: "400px",
    boxShadow: "500px #808080",
    margin: "0 10px",
    // zIndex: 1,
    // border: "5px solid red",
  }}
>
  hello
</Box>; */
}
