import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SignupForm.module.css";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logoTransparent from "../assets/logoTransparent.png";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/slices/auth";
// import { dispatch } from "@/redux/store";

let NextImage = Image;

const SignupForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [signUPInput, setSignUPInput] = useState({
    fName: "",
    lName: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });
  const cookies = document.cookie;
  console.log("cookies =>", cookies);
  const handleSignUp = () => {
    const signUpDetails = {
      name: `${signUPInput.fName.trim()} ${signUPInput.lName.trim()}`,
      age: parseInt(signUPInput.age),
      mobile: parseInt(signUPInput.mobile),
      email: signUPInput.email,
      password: signUPInput.password,
    };
    if (signUPInput.fName.length === 0) {
      alert("Please Enter a Valid Name");
    } else {
      signUpabc(signUpDetails);
    }
  };
  const signUpabc = (signUpDetails) => {
    console.log("inside Signup");
    console.log(signUpDetails);
    dispatch(signUp(signUpDetails));
    //.then(() => {
    router.push("/");
    //});
    // new Promise((resolve, reject) => {
    //   axios
    //     .post(
    //       `${process.env.NEXT_PUBLIC_SERVER_IP}/users/signUp`,
    //       signUpDetails
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       resolve(res);
    //       router.push("/");
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       reject(err);
    //     });
    // });
    // dispatch(signUp(signUpDetails));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(`${name} : ${value}`);
    setSignUPInput((prevState) => ({ ...prevState, [name]: value }));
    // console.log(e.target.value);
  };
  useEffect(() => {
    console.log("test");
    console.log("cookies", document.cookie);
  }, []);
  return (
    <Flex
      className={`${styles.signUpForm}`}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <div>
            <NextImage
              className={`${styles.logo}`}
              src={logoTransparent}
              alt="brand logo"
            />
          </div>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="fName"
                    value={signUPInput.fName}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lName"
                    value={signUPInput.lName}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="text"
                    name="age"
                    value={signUPInput.age}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="mobile">
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    type="text"
                    name="mobile"
                    value={signUPInput.mobile}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={signUPInput.email}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={signUPInput.password}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => {
                  console.log(signUPInput);
                }}
              >
                show filled details
              </Button>
              <Button
                loadingText="Submitting"
                size="lg"
                color={"white"}
                bg={"rgb(252, 88, 23)"}
                _hover={{
                  bg: "rgb(249, 77, 25)",
                }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignupForm;
