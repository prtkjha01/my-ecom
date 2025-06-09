import React from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  useDeleteAddressMutation,
  useGetAddressesQuery,
} from "@/redux/api/address/address.api";
import { AddressModalProps } from "@/types/address.types";

const AddressModal = ({ onClose, id }: AddressModalProps) => {
  const dispatch = useDispatch();
  const [deleteAddress] = useDeleteAddressMutation();
  const { refetch } = useGetAddressesQuery();

  const handleDelete = async () => {
    try {
      await deleteAddress(id).unwrap();
      refetch();
      onClose();
    } catch (error) {
      console.error("Failed to delete address:", error);
    }
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this address ?</ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" ml={3} onClick={handleDelete}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default AddressModal;
