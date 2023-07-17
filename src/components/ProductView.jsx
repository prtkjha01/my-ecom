import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  Input,
  Icon,
  IconButton,
  Stack,
  Heading,
  Center,
  Spinner,
  Divider,
  ButtonGroup,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdAccountCircle } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../styles/ProductView.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/slices/product";
import { useRouter } from "next/router";

const ProductView = ({ productDetails }) => {
  // var isRed = false;
  const router = useRouter();
  // console.log(router.query.productId);
  const [isRed, setIsRed] = useState(false);
  const [hasData, setHasData] = useState(false);
  const dispatch = useDispatch();
  async function getProductFromStore(id) {
    await dispatch(getProduct(id));
    setHasData(true);
  }
  const { product } = useSelector((state) => state.product);
  console.log("product", product);
  useEffect(() => {
    if (router.asPath !== router.route) {
      getProductFromStore(router.query.productId);
    }
    // const id = router.query.productId;
    // console.log("id", id);
  }, [router]);

  return (
    <div>
      {!hasData ? (
        <Center style={{ minHeight: "65vh" }}>
          <Spinner
            mt={10}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.container1}>
            {/**************************** PRODUCT IMAGE *************************************/}
            <div className={styles.imageWrapper}>
              <Image
                src={product.data.images?.length ? product.data.images[0] : ""}
                h={{ base: "300px", md: "500px", lg: "500px" }}
                w={{ base: "300px", md: "500px", lg: "500px" }}
                m={{ base: 7, md: 7, lg: 10 }}
              />
            </div>
            <Box
              pt={10}
              pl={{ base: 10, md: 10, lg: 20 }}
              className={`${styles.detailsWrapper} `}
            >
              {/**************************** TITLE *************************************/}
              <p className={`text-lg font-semibold`}>
                {product.data.brand} {product.data.name}
                <IconButton
                  variant="ghost"
                  colorScheme="black"
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
                {/* <span>{isRed ? "yes" : ""}</span> */}
              </p>
              {/**************************** RATING *************************************/}
              <div>
                <Badge
                  colorScheme={
                    product.data.rating > 3.5
                      ? "green"
                      : product.data.rating < 3.5 && product.data.rating > 3
                      ? "yellow"
                      : "red"
                  }
                  variant="solid"
                >
                  {product.data.rating} <StarIcon />
                </Badge>
              </div>
              {/**************************** PRICE *************************************/}
              <div>
                <p className={`text-4xl font-bold pt-2 ${styles.price}`}>
                  ₹ {product.data.price + "   "}
                  <span
                    className={`text-xl font-normal line-through text-gray-400 pl-3 pb-0`}
                  >
                    {"₹"}
                    {product.data.price +
                      (product.data.discount / 100) * product.data.price}
                  </span>
                  <span className={`text-xl font-medium text-green-500 pl-4`}>
                    {" " + product.data.discount}% off
                  </span>
                </p>
              </div>
              {/*************************** VARIANTS ************************************/}
              <div>
                <div className={`${styles.variantWrapper} mt-7`}>
                  {product.data.variants?.length &&
                    product.data.variants?.map((variant, index) => {
                      return (
                        <div key={index}>
                          <Button
                            colorScheme="black"
                            size="sm"
                            variant="outline"
                            //   borderRadius="100%"
                            _hover={{
                              backgroundColor: "#EDF2F7",
                              // borderRadius: "70%",
                            }}
                            _focus={{
                              backgroundColor: "#808080",
                              color: "#fff",
                            }}
                            _active={{
                              backgroundColor: "#EDF2F7",
                            }}
                          >
                            {variant}
                          </Button>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={`${styles.category} text-md font-medium`}>
                category: {productDetails.category}
              </div>
              {/*************************** BUY NOW & ADD TO CART ************************************/}
              <div className={`${styles.buttonWrapper} my-10`}>
                <Button
                  className={`${styles.orderButtons} mr-2`}
                  colorScheme="orange"
                  variant="outline"
                >
                  Buy Now
                </Button>
                <Button
                  className={`${styles.orderButtons} ml-2`}
                  colorScheme="orange"
                  variant="solid"
                >
                  Add to Cart
                </Button>
              </div>
              {/*************************** DELIVERY CHECK ************************************/}
              <div>
                <h1>Enter your pincode to check availability</h1>
                <div className={`${styles.inputWrapper} mt-5`}>
                  <i>
                    <Icon boxSize={6} as={MdLocationOn} />
                  </i>
                  <Input variant="flushed" placeholder="Pincode" type="text" />
                  <IconButton
                    className={`${styles.submit}`}
                    variant="ghost"
                    colorScheme="black"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<ArrowForwardIcon />}
                  />
                </div>
              </div>
              {/*************************** SPECIFICATIONS ************************************/}
              <div className={`mt-10`}>
                <h2 className={`text-2xl font-bold text-left`}>Features</h2>
                <div className={`${styles.specificationsWrapper}`}>
                  <ul>
                    {product.data.specifications?.map(
                      (specification, index) => {
                        return (
                          <li
                            key={index}
                            className={`${styles.specification} text-left my-1`}
                          >
                            &bull; {specification}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              {/******************************* FAQs ************************************/}
              <div className={`${styles.faqWrapper} text-start `}>
                <h1
                  className={`${styles.faqHeading} text-2xl my-5 font-semibold `}
                >
                  F.A.Qs
                </h1>
                <div className={`${styles.faq}`}>
                  {product.data.FAQ?.map((faq, index) => {
                    return (
                      <div key={index} className={`my-2`}>
                        <p className={`${styles.faqQuestion} font-bold`}>
                          Q. {faq.question} ?
                        </p>
                        <p className={`${styles.faqAnswer} font-semibold`}>
                          {" "}
                          <ArrowForwardIcon /> {faq.answer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/******************************* REVIEWS ************************************/}
              <div className={`${styles.reviewWrapper} text-start `}>
                <h1
                  className={`${styles.reviewHeading} text-2xl my-5 font-semibold `}
                >
                  Reviews
                </h1>
                <div className={`${styles.reviews}`}>
                  {product.data.reviews?.map((review, index) => {
                    return (
                      <div key={index} className={`my-5`}>
                        <p className={`${styles.reviewer} font-bold my-1`}>
                          {/* <Icon boxSize={4} as={MdAccountCircle} /> */}
                          {review.title}{" "}
                          <Badge
                            colorScheme={
                              review.rating > 3.5
                                ? "green"
                                : review.rating < 3.5 && review.rating > 3
                                ? "yellow"
                                : "red"
                            }
                            variant="solid"
                            borderRadius="lg"
                          >
                            {review.rating}
                            <span className={`${styles.badge}`}>
                              <StarIcon boxSize={2} />
                            </span>
                          </Badge>
                        </p>
                        <p className={`${styles.faqAnswer} font-normal`}>
                          {review.comment}
                        </p>
                        <p className={`text-xs font-thin my-1`}>
                          {review.name}{" "}
                          <span className="ml-3">{review.date}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Box>
          </div>
          {/*************************** SIMILAR PRODUCTS ************************************/}
          <div className={`${styles.container2} mt-20 `}>
            <h1 className={`text-3xl font-bold text-start ml-10 mb-10`}>
              Similar Products
            </h1>
            <div
              className={`${styles.productWrapper} px-10 py-10 scrollbar-hide`}
            >
              {productDetails.similarProducts.map((product, index) => {
                return (
                  <div
                    className={`${styles.similarProduct} scrollbar-hide`}
                    key={index}
                  >
                    <Card
                      maxW="sm "
                      boxShadow="xl"
                      borderRadius="xl"
                      _hover={{ transform: "scale(1.1,1.1)" }}
                    >
                      <CardBody p={0}>
                        <Image
                          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          alt="Green double couch with wooden legs"
                          borderTopRadius="xl"
                        />

                        <Stack mt="6" spacing="3">
                          <Heading size="md">{product}</Heading>
                          <Text>
                            This sofa is perfect for modern tropical spaces,
                            baroque inspired spaces.
                          </Text>
                          <Text color="blue.600" fontSize="2xl">
                            $450
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;
