import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddresses } from "@/redux/slices/address";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import AddressCard from "./AddressCard";
import AddressSidebar from "./AddressSidebar";
const Addresses = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state?.address?.addresses);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(getAddresses());
  }, []);
  return (
    <div className="">
      <div className="add-address-btn flex justify-end">
        <Button
          className=""
          backgroundColor={"#014aad"}
          color={"white"}
          borderRadius={0}
          onClick={onOpen}
        >
          <span className="mr-2">Add New Address</span> <AddIcon boxSize={4} />
        </Button>
      </div>
      <div className="addresses flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-4">
        {addresses &&
          addresses.length > 0 &&
          addresses.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <AddressSidebar onClose={onClose} />
      </Drawer>
    </div>
  );
};

export default Addresses;
