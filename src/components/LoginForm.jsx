import React, { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import logoTransparent from "../assets/logoTransparent.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/auth";
import { useRouter } from "next/router";
import { store } from "@/redux/store";
import styles from "../styles/LoginForm.module.css";

let NextImage = Image;
const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["auth_token"]);
  const { user } = useSelector((state) => state.auth);
  const [loginInput, setLoginInput] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleLogin = () => {
    console.log(loginInput);
    if (loginInput.email && loginInput.password) {
      dispatch(login(loginInput)).then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("user", user);
          console.log("user in getState()", store.getState().auth.user.token);
          setCookie("auth_token", store.getState().auth.user.token);
          console.log("cookies", cookies.auth_token?.payload);
          router.push("/");
        } else {
          alert("Someting went wrong");
        }
      });
    } else {
      alert("missing fileds");
    }
  };
  // const login = () => {};
  return (
    <Flex
      className={`${styles.loginForm}`}
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
          <Heading fontSize={"4xl"} color={"rgb(58, 0, 61)"}>
            Sign in to your account
          </Heading>
          <Text className={`${styles.text}`} fontSize={"lg"}>
            Don't have an account{" "}
            <Link href="/signup" color={"blue.400"}>
              Signup
            </Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"rgb(252, 88, 23)"}
                color={"white"}
                _hover={{
                  bg: "rgb(249, 77, 25)",
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
