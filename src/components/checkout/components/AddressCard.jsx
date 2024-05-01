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
  SkeletonText,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdLocalPhone } from "react-icons/md";
import AddressModal from "./AddressModal";
import React from "react";

export const AddressCardSkeleton = () => (
  <div className="p-3 relative bg-white shadow">
    <Skeleton height="20px" width="150px" />

    <SkeletonText mt={2} noOfLines={3} spacing="4" skeletonHeight="2" />

    <div className="font-[500] flex items-center justify-between mt-3">
      <Skeleton height="20px" width="100px" />
      <span className="flex md:flex-col lg:flex-row font-[600] gap-5">
        <Skeleton height="20px" width="60px" />
        <Skeleton height="20px" width="60px" />
      </span>
    </div>

    <Skeleton
      position={"absolute"}
      top={2}
      right={2}
      height="20px"
      width="20px"
    />
  </div>
);
const Address = ({ address, isSelected, handleSelect }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAddressDelete = () => {
    onOpen();
  };

  return (
    <div key={address._id} className="p-3 relative bg-white shadow">
      <h2 className="text-xl font-[600]">{address.name}</h2>
      <p className="mt-2">
        {address.address_line_1},{" "}
        {address.address_line_2 ? address.address_line_2 + "," : ""}
      </p>
      <p>
        {address.city}, {address.state}, {address.country}
      </p>
      <p className="font-[500] flex items-center justify-between mt-3">
        <span className="flex items-center gap-1">
          <Icon as={MdLocalPhone} boxSize={4} />
          {address.mobile}
        </span>
        <span className="flex md:flex-col lg:flex-row font-[600] gap-5">
          <span className="cursor-pointer">EDIT</span>
          <span
            className=" text-red-600 cursor-pointer"
            onClick={handleAddressDelete}
          >
            DELETE
          </span>
        </span>
      </p>
      <div className="tag absolute top-2 right-10 bg-slate-300 text-slate-600 text-sm font-[500] rounded-sm p-1">
        {address.type}
      </div>
      <input
        className="tag absolute top-2 right-2 h-5 w-5 cursor-pointer"
        type="checkbox"
        name=""
        id=""
        checked={isSelected}
        onChange={() => {
          handleSelect(address._id);
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <AddressModal onClose={onClose} id={address._id} />
      </Modal>
    </div>
  );
};

export default Address;
