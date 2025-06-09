"use client";
import { Field, Form, Formik } from "formik";
import { Button, Input, Text, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import Image from "next/image";
import { useVerifyOtpMutation } from "@/redux/api/auth/auth.api";

interface VerifyOtpFormProps {
  email: string;
  onProgress: (step: number) => void;
}

interface FormValues {
  otp: string;
}

const VerifyOtpForm: React.FC<VerifyOtpFormProps> = ({
  email,
  onProgress: handleProgress,
}) => {
  const toast = useToast();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const validateOtp = (value: string) => {
    let error;
    if (!value) {
      error = "OTP is required";
    }
    return error;
  };

  const handleVerifyOtp = async (values: FormValues, actions: any) => {
    try {
      await verifyOtp({ email, otp: values.otp }).unwrap();
      actions.setSubmitting(false);
      handleProgress(3);
      toast({
        title: "Success",
        description: "OTP verified !",
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
        <Text className=" text-[#3A003D] font-[700] text-4xl">Verify OTP</Text>
      </header>
      <Formik<FormValues>
        initialValues={{
          otp: "",
        }}
        onSubmit={(values, actions) => {
          handleVerifyOtp(values, actions);
        }}
      >
        {(props) => (
          <Form>
            <Field name="otp" validate={validateOtp}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.otp && form.touched.otp}>
                  <FormLabel>OTP</FormLabel>
                  <Input {...field} placeholder="Enter OTP" />
                  <FormErrorMessage>{form.errors.otp}</FormErrorMessage>
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
              Verify OTP
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VerifyOtpForm;
