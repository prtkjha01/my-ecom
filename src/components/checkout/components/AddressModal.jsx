"use client";
import React from "react";
import {
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getAddresses, deleteAddress } from "@/redux/slices/address";
const AddressModal = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAddress(id));
    dispatch(getAddresses());
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
