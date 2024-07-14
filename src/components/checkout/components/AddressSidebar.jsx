import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import {
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  RadioGroup,
  Radio,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses, createAddress } from "@/redux/slices/address";
const AddressSidebar = ({ onClose }) => {
  const dispatch = useDispatch();
  const validateName = (value) => (!value ? "Name is required" : null);
  const validateMobile = (value) => (!value ? "Mobile is required" : null);
  const validateAddressLine1 = (value) =>
    !value ? "Address line 1 is required" : null;
  const validateCity = (value) => (!value ? "City is required" : null);
  const validateState = (value) => (!value ? "State is required" : null);
  const validatePincode = (value) => (!value ? "Pincode is required" : null);
  const validateCountry = (value) => (!value ? "Country is required" : null);
  const validateType = (value) => (!value ? "Type is required" : null);

  const handleSubmit = (values, actions) => {
    dispatch(createAddress(values))
      .then(() => {
        actions.setSubmitting(false);
        dispatch(getAddresses());
        actions.resetForm();
        onClose();
      })
      .catch((error) => {
        actions.setSubmitting(false);
        throw new Error(error);
      });
  };
  return (
    <>
      <DrawerOverlay />
      <DrawerContent position={"relative"}>
        <DrawerCloseButton top={"1rem"} />
        <DrawerHeader className="!font-[700]">Add New Address</DrawerHeader>

        <Formik
          initialValues={{
            name: "",
            mobile: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
            type: null,
          }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {(props) => (
            <Form>
              {/* h={"calc(100vh - 134px)"} */}
              <DrawerBody h={"calc(100vh - 134px)"} pb={"120px"}>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                      isRequired
                    >
                      <FormLabel>Name</FormLabel>
                      <Input {...field} placeholder="Enter name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="mobile" validate={validateMobile}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.mobile && form.touched.mobile}
                      isRequired
                    >
                      <FormLabel>Mobile Number</FormLabel>
                      <Input {...field} placeholder="Enter mobile" />
                      <FormErrorMessage>{form.errors.mobile}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="address_line_1" validate={validateAddressLine1}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={
                        form.errors.address_line_1 &&
                        form.touched.address_line_1
                      }
                      isRequired
                    >
                      <FormLabel>Address Line 1</FormLabel>
                      <Input {...field} placeholder="Enter Address Line 1" />
                      <FormErrorMessage>
                        {form.errors.address_line_1}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="address_line_2">
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={
                        form.errors.address_line_2 &&
                        form.touched.address_line_2
                      }
                    >
                      <FormLabel>Address Line 2</FormLabel>
                      <Input {...field} placeholder="Enter Address Line 2" />
                    </FormControl>
                  )}
                </Field>

                <Field name="city" validate={validateCity}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.city && form.touched.city}
                      isRequired
                    >
                      <FormLabel>City</FormLabel>
                      <Input {...field} placeholder="Enter City" />
                      <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="state" validate={validateState}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.state && form.touched.state}
                      isRequired
                    >
                      <FormLabel>State</FormLabel>
                      <Input {...field} placeholder="Enter State" />
                      <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="pincode" validate={validatePincode}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.pincode && form.touched.pincode}
                      isRequired
                    >
                      <FormLabel>Pincode</FormLabel>
                      <Input {...field} placeholder="Enter Pincode" />
                      <FormErrorMessage>{form.errors.pincode}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="country" validate={validateCountry}>
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.country && form.touched.country}
                      isRequired
                    >
                      <FormLabel>Country</FormLabel>
                      <Input {...field} placeholder="Enter Country" />
                      <FormErrorMessage>{form.errors.country}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="type">
                  {({ field, form }) => (
                    <FormControl
                      className="mt-2"
                      isInvalid={form.errors.type && form.touched.type}
                      isRequired
                    >
                      <FormLabel>Type</FormLabel>
                      <RadioGroup>
                        <HStack spacing="24px">
                          <Radio {...field} value="HOME">
                            Home
                          </Radio>
                          <Radio {...field} value="OFFICE">
                            Office
                          </Radio>
                        </HStack>
                      </RadioGroup>
                      <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </DrawerBody>

              <DrawerFooter
                paddingInline={"0.8rem"}
                position={"absolute"}
                bottom={0}
                width={"100%"}
              >
                <Button
                  className="w-full"
                  leftIcon={<AddIcon boxSize={3} />}
                  fontWeight={"bold"}
                  backgroundColor={"#014aad"}
                  borderRadius={0}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Add
                </Button>
              </DrawerFooter>
            </Form>
          )}
        </Formik>
      </DrawerContent>
    </>
  );
};

export default AddressSidebar;
