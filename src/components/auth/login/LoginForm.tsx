"use client";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useLoginMutation } from "@/redux/api/auth/auth.api";
import { setCookie } from "@/utils/cookies";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [login] = useLoginMutation();

  const handleClick = () => setShow(!show);

  const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(value);
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!isValidEmail) {
      error = "Please enter a valid email";
    }
    return error;
  };

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  };

  const handleLogin = async (values: LoginFormValues, actions: any) => {
    try {
      const response = await login(values).unwrap();
      setCookie("token", response?.data?.token);
      actions.setSubmitting(false);

      if (typeof window !== "undefined") {
        window.location.href = (redirect as string) || "/";
      }
    } catch (error: any) {
      actions.setSubmitting(false);
      toast({
        title: "Error",
        description: error?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="p-4 md:p-48 lg:p-28 w-full">
      <header className="login-form-header flex flex-col items-center gap-3 mb-10">
        <Image src="/png/logo.png" height={64} width={64} alt="brand-logo" />
        <Text className=" text-[#3A003D] font-[700] text-4xl">
          Login to MyEcom
        </Text>
      </header>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          handleLogin(values, actions);
        }}
      >
        {(props) => (
          <Form>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Enter your email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: any) => (
                <FormControl
                  className="mt-4"
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      {...field}
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <InputRightElement width="2.5rem">
                      {show ? (
                        <LuEye
                          onClick={handleClick}
                          className="cursor-pointer"
                          color="#9CA3AF"
                        />
                      ) : (
                        <LuEyeOff
                          onClick={handleClick}
                          className="cursor-pointer"
                          color="#9CA3AF"
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <div className="forgot-password-redirect flex justify-end mt-2">
              <Text
                color={"#014aad"}
                w={"max-content"}
                className=" cursor-pointer hover:underline"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </Text>
            </div>
            <Button
              mt={8}
              className="w-full"
              backgroundColor={"#014aad"}
              borderRadius={0}
              isLoading={props.isSubmitting}
              colorScheme="blue"
              spinner={<div className="loader" />}
              type="submit"
            >
              Login
            </Button>
            <div className="signup-redirect mt-8">
              <Text align={"center"}>
                Don't have an account?{" "}
                <span
                  className="text-[#014aad] cursor-pointer hover:underline"
                  onClick={() => router.push("/signup")}
                >
                  Signup
                </span>
              </Text>
            </div>
          </Form>
        )}
      </Formik>
      <div className="or-container items-center my-3 gap-3 hidden">
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
        <div className="or">or</div>
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
      </div>
      <Button type="button" className="w-full" display={"none"} isDisabled>
        <span>
          <img
            src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
            className=" h-5 w-5 mix-blend-multiply mr-2 "
            alt="google-icon"
          />
        </span>
        Login With Google
      </Button>
    </div>
  );
};

export default LoginForm;
