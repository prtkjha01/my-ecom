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
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateAddressMutation,
  useGetAddressesQuery,
} from "@/redux/api/address/address.api";
import { AddressSidebarProps } from "@/types/address.types";
import { Address } from "@/redux/api/address/address.types";

const AddressSidebar = ({ onClose }: AddressSidebarProps) => {
  const dispatch = useDispatch();
  const [createAddress, { isLoading: createAddressIsLoading }] =
    useCreateAddressMutation();
  const { refetch } = useGetAddressesQuery();
  const toast = useToast();

  const validateName = (value: string) => (!value ? "Name is required" : null);
  const validateMobile = (value: string) =>
    !value ? "Mobile is required" : null;
  const validateAddressLine1 = (value: string) =>
    !value ? "Address line 1 is required" : null;
  const validateCity = (value: string) => (!value ? "City is required" : null);
  const validateState = (value: string) =>
    !value ? "State is required" : null;
  const validatePincode = (value: string) =>
    !value ? "Pincode is required" : null;
  const validateCountry = (value: string) =>
    !value ? "Country is required" : null;

  const handleSubmit = async (values: Partial<Address>, actions: any) => {
    try {
      await createAddress(values as Address).unwrap();
      actions.setSubmitting(false);
      refetch();
      actions.resetForm();
      onClose();
    } catch (error: any) {
      actions.setSubmitting(false);
      toast({
        title: error.message || "Failed to create address",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <DrawerOverlay />
      <DrawerContent position={"relative"}>
        <DrawerCloseButton top={"1rem"} />
        <DrawerHeader className="!font-[700]">Add New Address</DrawerHeader>

        <Formik<Partial<Address>>
          initialValues={{
            name: "",
            mobile: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
            type: undefined,
          }}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <DrawerBody h={"calc(100vh - 134px)"} pb={"120px"}>
                <Field name="name" validate={validateName}>
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  {({ field, form }: any) => (
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
                  fontWeight={"bold"}
                  leftIcon={<AddIcon boxSize={3} mr={2} />}
                  backgroundColor={"#014aad"}
                  borderRadius={0}
                  isLoading={createAddressIsLoading}
                  colorScheme="blue"
                  spinner={<div className="loader" />}
                  type="submit"
                >
                  Add New Address
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
