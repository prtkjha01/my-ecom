"use client";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useRouter } from "next/router";
import Image from "next/image";
import { useResetPasswordMutation } from "@/redux/api/auth/auth.api";

interface ResetPasswordFormProps {
  email: string;
}

interface FormValues {
  password: string;
  confirmedPassword: string;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ email }) => {
  const router = useRouter();
  const toast = useToast();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  };

  const validateConfirmedPassword = (
    value: string,
    { password }: { password: string }
  ) => {
    let error;
    if (!value) {
      error = "Password is required";
    } else if (value !== password) {
      error = "Passwords do not match";
    }
    return error;
  };

  const handleResetPassword = async (values: FormValues, actions: any) => {
    try {
      await resetPassword({ email, password: values.password }).unwrap();
      actions.setSubmitting(false);
      toast({
        title: "Success",
        description: "Password Changed successfully !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/login");
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
          Reset Password ?
        </Text>
      </header>
      <Formik<FormValues>
        initialValues={{
          password: "",
          confirmedPassword: "",
        }}
        onSubmit={(values, actions) => {
          handleResetPassword(values, actions);
        }}
      >
        {(props) => (
          <Form>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: any) => (
                <FormControl
                  className="mt-4"
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>New Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      {...field}
                      type={show ? "text" : "password"}
                      placeholder="Enter New password"
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
              validate={(value: string) =>
                validateConfirmedPassword(value, props.values)
              }
            >
              {({ field, form }: any) => (
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
                      placeholder="Enter password"
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

            <Button
              mt={8}
              className="w-full"
              backgroundColor={"#014aad"}
              borderRadius={0}
              isLoading={isLoading}
              colorScheme="blue"
              spinner={<div className="loader" />}
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
