import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import AddressCard from "./AddressCard";
const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: "a1@b2$c3",
      name: "John Doe",
      mobile: "1234567890",
      address_line_1: "123 Main Street",
      address_line_2: "Apt 456",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      type: "HOME",
    },
    {
      id: "x#y7*z",
      name: "Jane Smith",
      mobile: "9876543210",
      address_line_1: "456 Oak Avenue",
      address_line_2: "Suite 789",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      type: "WORK",
    },
    {
      id: "m9!p5&q2",
      name: "Alice Johnson",
      mobile: "5551234567",
      address_line_1: "789 Pine Street",
      address_line_2: "Unit 101",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      type: "HOME",
    },
    {
      id: "z@3g8$h1",
      name: "Bob Williams",
      mobile: "9879876543",
      address_line_1: "321 Cedar Road",
      address_line_2: "Floor 15",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      type: "WORK",
    },
    {
      id: "l6#r4^u9",
      name: "Eva Brown",
      mobile: "3335557777",
      address_line_1: "567 Maple Lane",
      address_line_2: "Apt 22",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      type: "HOME",
    },
  ]);

  return (
    <div className="">
      <div className="add-address-btn flex justify-end">
        <Button className="" borderRadius={0}>
          <span className="mr-2">Add New Address</span> <AddIcon boxSize={4} />
        </Button>
      </div>
      <div className="addresses flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-4">
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </div>
  );
};

export default Addresses;
