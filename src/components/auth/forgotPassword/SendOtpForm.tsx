"use client";
import { Field, Form, Formik } from "formik";
import { Button, Input, Text, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import Image from "next/image";
import { useSendOtpMutation } from "@/redux/api/auth/auth.api";

interface SendOtpFormProps {
  onProgress: (step: number) => void;
  onOtp: (email: string) => void;
}

interface FormValues {
  email: string;
}

const SendOtpForm: React.FC<SendOtpFormProps> = ({
  onProgress: handleProgress,
  onOtp: setEmail,
}) => {
  const toast = useToast();
  const [sendOtp, { isLoading }] = useSendOtpMutation();

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

  const handleSendOtp = async (values: FormValues, actions: any) => {
    try {
      await sendOtp({ email: values.email }).unwrap();
      actions.setSubmitting(false);
      setEmail(values.email);
      handleProgress(2);
      toast({
        title: "Success",
        description: "OTP sent successfully !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
          Forgot Password ?
        </Text>
      </header>
      <Formik<FormValues>
        initialValues={{
          email: "",
        }}
        onSubmit={(values, actions) => {
          handleSendOtp(values, actions);
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
                  <Input
                    {...field}
                    placeholder="Enter the email to recieve OTP"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
              Send OTP
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendOtpForm;
