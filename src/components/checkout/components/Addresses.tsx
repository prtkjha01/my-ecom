import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAddressesQuery } from "@/redux/api/address/address.api";
import { Button, Drawer, useDisclosure, Skeleton } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import AddressCard, { AddressCardSkeleton } from "./AddressCard";
import AddressSidebar from "./AddressSidebar";
import { AddressesProps } from "@/types/address.types";

const Addresses = ({ handleClick, onSelect }: AddressesProps) => {
  const dispatch = useDispatch();
  const { data: addressesData, isLoading: loading } = useGetAddressesQuery();
  const addresses = addressesData?.data || [];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleAddressSelection = (id: string) => {
    selectedAddress === id ? setSelectedAddress(null) : setSelectedAddress(id);
    onSelect(id);
  };

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
      {loading ? (
        <div className="addresses flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <AddressCardSkeleton key={i} />
          ))}
        </div>
      ) : addresses.length === 0 ? (
        <h1>No Addresses Found</h1>
      ) : (
        <div className="addresses flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-4">
          {addresses.length > 0 &&
            addresses.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                isSelected={selectedAddress === address._id}
                handleSelect={handleAddressSelection}
              />
            ))}
        </div>
      )}
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
      <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose}>
        <AddressSidebar onClose={onClose} />
      </Drawer>
    </div>
  );
};

export default Addresses;
