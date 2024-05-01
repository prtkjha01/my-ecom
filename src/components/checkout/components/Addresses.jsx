"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddresses } from "@/redux/slices/address";
import { Button, Drawer, useDisclosure, Skeleton } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import AddressCard, { AddressCardSkeleton } from "./AddressCard";
import AddressSidebar from "./AddressSidebar";

const Addresses = ({ handleClick, onSelect }) => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state?.address?.addresses?.data);
  const loading = useSelector((state) => state?.address?.addresses?.isLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const handleAddressSelection = (id) => {
    console.log(id);
    selectedAddress === id ? setSelectedAddress(null) : setSelectedAddress(id);
    onSelect(id);
  };
  useEffect(() => {
    dispatch(getAddresses());
  }, []);
  return (
    <div className="">
      <div className="add-address-btn flex justify-end">
        {loading ? (
          <Skeleton height="40px" width="170px" />
        ) : (
          <Button
            className=""
            backgroundColor={"#014aad"}
            color={"white"}
            borderRadius={0}
            onClick={onOpen}
          >
            <span className="mr-2">Add New Address</span>{" "}
            <AddIcon boxSize={4} />
          </Button>
        )}
      </div>
      <div className="addresses flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-4">
        {addresses.length > 0 && !loading
          ? addresses.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                isSelected={selectedAddress === address._id}
                handleSelect={handleAddressSelection}
              />
            ))
          : [1, 2, 3, 4, 5].map((i) => <AddressCardSkeleton key={i} />)}
      </div>
      <div className="flex justify-end mt-4">
        {!loading && (
          <Button
            className=""
            backgroundColor={"#014aad"}
            color={"white"}
            borderRadius={0}
            colorScheme={"blue"}
            rightIcon={<ArrowForwardIcon />}
            isDisabled={!selectedAddress}
            onClick={() => {
              handleClick(1);
            }}
          >
            Next
          </Button>
        )}
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
