"use client";
import React, { useState } from "react";
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
import logo from "@assets/logo.png";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "@/redux/slices/auth";
import { useRouter } from "next/router";

const SignupForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);
  const toast = useToast();
  const validateEmail = (value) => {
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

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  };

  const validateMobile = (value) => {
    let error;
    if (!value) {
      error = "Mobile is required";
    }
    if (value.length > 10) {
      error = "Enter a valid mobile number";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  };

  const validateConfirmedPassword = (value, { password }) => {
    let error;
    if (!value) {
      error = "Password is required";
    } else if (value !== password) {
      error = "Passwords do not match";
    }
    return error;
  };
  const handleRegister = (values, actions) => {
    const payload = { ...values };
    delete payload.confirmedPassword;
    // console.log(payload);

    dispatch(register(payload))
      .then(() => {
        actions.setSubmitting(false);
        toast({
          title: "Successfully Registered !",
          status: "success",
          variant: "left-accent",
          position: "top-right",
          duration: 1500,
          isClosable: true,
        });
        router.push("/login");
      })
      .catch(() => {
        actions.setSubmitting(false);
        toast({
          title: error.message,
          status: "error",
          variant: "left-accent",
          position: "top-right",
          duration: 1500,
          isClosable: true,
        });
      });
  };
  return (
    <div className="p-4  md:px-48 lg:px-28 w-full">
      <header className="login-form-header flex flex-col items-center gap-3 mb-10">
        <img src={logo.src} className="brand h-16 w-16" alt="brand-logo" />
        <Text className=" text-[#3A003D] font-[700] text-4xl">
          Get Started with MyEcom
        </Text>
      </header>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          password: "",
          confirmedPassword: "",
        }}
        onSubmit={(values, actions) => {
          handleRegister(values, actions);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="Enter your Name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="mobile" validate={validateMobile}>
              {({ field, form }) => (
                <FormControl
                  className="mt-4"
                  isInvalid={form.errors.mobile && form.touched.mobile}
                >
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                  <FormErrorMessage>{form.errors.mobile}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  className="mt-4"
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Enter your email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
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

            <Field
              name="confirmedPassword"
              validate={(value) =>
                validateConfirmedPassword(value, props.values)
              }
            >
              {({ field, form }) => (
                <FormControl
                  className="mt-4"
                  isInvalid={
                    form.errors.confirmedPassword &&
                    form.touched.confirmedPassword
                  }
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      {...field}
                      type={show2 ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <InputRightElement width="2.5rem">
                      {show2 ? (
                        <LuEye
                          onClick={handleClick2}
                          className="cursor-pointer"
                          color="#9CA3AF"
                        />
                      ) : (
                        <LuEyeOff
                          onClick={handleClick2}
                          className="cursor-pointer"
                          color="#9CA3AF"
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmedPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <div className="login-redirect mt-8">
              <Text align={"end"}>
                Already have an account?{" "}
                <span
                  className="text-[#014aad] cursor-pointer hover:underline"
                  onClick={() => router.push("/login")}
                >
                  Login
                </span>
              </Text>
            </div>
            <Button
              mt={8}
              className="w-full"
              colorScheme="telegram"
              isLoading={props.isSubmitting}
              type="submit"
            >
              SignUp
            </Button>
          </Form>
        )}
      </Formik>
      <div className="or-container flex items-center my-3 gap-3">
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
        <div className="or">or</div>
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
      </div>
      <Button className="w-full">
        <span>
          <img
            src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
            className=" h-5 w-5 mix-blend-multiply mr-2"
            alt="google-icon"
          />
        </span>
        Login With Google
      </Button>
    </div>
  );
};

export default SignupForm;
