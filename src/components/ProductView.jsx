import React, { useState } from "react";
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
const ProductView = ({ productDetails }) => {
  // var isRed = false;
  const [isRed, setIsRed] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}>
        {/**************************** PRODUCT IMAGE *************************************/}
        <div className={styles.imageWrapper}>
          <Image
            src={productDetails.images[0]}
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
            {productDetails.brand} {productDetails.name}{" "}
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
                productDetails.rating > 3.5
                  ? "green"
                  : productDetails.rating < 3.5 && productDetails.rating > 3
                  ? "yellow"
                  : "red"
              }
              variant="solid"
            >
              {productDetails.rating} <StarIcon />
            </Badge>
          </div>
          {/**************************** PRICE *************************************/}
          <div>
            <p className={`text-4xl font-bold pt-2 ${styles.price}`}>
              ₹ {productDetails.price + "   "}
              <span
                className={`text-xl font-normal line-through text-gray-400 pl-3 pb-0`}
              >
                {"₹"}
                {productDetails.price +
                  (productDetails.discount / 100) * productDetails.price}
              </span>
              <span className={`text-xl font-medium text-green-500 pl-4`}>
                {" " + productDetails.discount}% off
              </span>
            </p>
          </div>
          {/*************************** VARIANTS ************************************/}
          <div>
            <div className={`${styles.variantWrapper} mt-7`}>
              {productDetails.variants.map((variant, index) => {
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
                {productDetails.specifications.map((specification, index) => {
                  return (
                    <li
                      key={index}
                      className={`${styles.specification} text-left my-1`}
                    >
                      &bull; {specification}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/******************************* FAQs ************************************/}
          <div className={`${styles.faqWrapper} text-start `}>
            <h1 className={`${styles.faqHeading} text-2xl my-5 font-semibold `}>
              F.A.Qs
            </h1>
            <div className={`${styles.faq}`}>
              {productDetails.FAQ.map((faq, index) => {
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
              {productDetails.reviews.map((review, index) => {
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
                      {review.name} <span className="ml-3">{review.date}</span>
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
        <div className={`${styles.productWrapper} px-10 pb-10 scrollbar-hide`}>
          {productDetails.similarProducts.map((product, index) => {
            return (
              <div
                className={`${styles.similarProduct} scrollbar-hide`}
                key={index}
              >
                <Card maxW="sm " boxShadow="xl">
                  <CardBody p={0} borderRadius="lg">
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{product}</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces.
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
  );
};

export default ProductView;
