"use client";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import logo from "@assets/logo.png";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/redux/slices/auth";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.user.isLoggedIn);
  const handleClick = () => setShow(!show);
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
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  };
  const handleLogin = (values, actions) => {
    dispatch(login(values))
      .then(() => {
        actions.setSubmitting(false);

        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        actions.setSubmitting(false);
      });
  };
  const handleGoogleLoginSuccess = (response) => {
    console.log(response);
  };
  const handleGoogleLoginFailure = (response) => {
    console.log(response);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_LOCAL);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="p-4 md:p-48 lg:p-28 w-full">
      <header className="login-form-header flex flex-col items-center gap-3 mb-10">
        <img src={logo.src} className="brand h-16 w-16" alt="brand-logo" />
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
              {({ field, form }) => (
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
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={8}
              className="w-full"
              colorScheme="telegram"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <div className="or-container flex items-center my-3 gap-3">
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
        <div className="or">or</div>
        <div className="separator bg-gray-200 h-[2px] w-full"></div>
      </div>
      <Button type="button" className="w-full" onClick={() => signIn("google")}>
        <span>
          <img
            src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
            className=" h-5 w-5 mix-blend-multiply mr-2"
            alt="google-icon"
          />
        </span>
        Login With Google
      </Button>
      {/* <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <Button className="w-full" onClick={renderProps.onClick}>
            <span>
              <img
                src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
                className=" h-5 w-5 mix-blend-multiply mr-2"
                alt="google-icon"
              />
            </span>
            Login With Google
          </Button>
        )}
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy="single_host_origin"
        isSignedIn
      /> */}
    </div>
  );
};

export default index;
