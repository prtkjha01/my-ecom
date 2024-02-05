import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import {
  MdCategory,
  MdHeadsetMic,
  MdOutlineLocalShipping,
  MdOutlineShoppingBag,
} from "react-icons/md";
const Perks = () => {
  const perks = [
    {
      id: 1,
      name: "Unbeatable Selection",
      icon: (
        <Icon as={MdCategory} boxSize={[10, 12, 16, 20]} color={"#014aad"} />
      ),
    },
    {
      id: 2,
      name: "Expert Customer Service",
      icon: (
        <Icon as={MdHeadsetMic} boxSize={[10, 12, 16, 20]} color={"#014aad"} />
      ),
    },
    {
      id: 3,
      name: "Fast & Free Shipping Over ₹500*",
      icon: (
        <Icon
          as={MdOutlineLocalShipping}
          boxSize={[10, 12, 16, 20]}
          color={"#014aad"}
        />
      ),
    },
    {
      id: 4,
      name: "Amazing Value Every Day",
      icon: (
        <Icon
          as={MdOutlineShoppingBag}
          boxSize={[10, 12, 16, 20]}
          color={"#014aad"}
        />
      ),
    },
  ];
  return (
    <section className="perks">
      <Text className="perks-section-header text-center text-5xl font-[600]">
        What we offer ?
      </Text>
      <div className="perks grid grid-cols-2 gap-6 md:grid-cols-4 mt-20">
        {perks.map((perk) => (
          <div className="perk flex flex-col items-center" key={perk.id}>
            <div>{perk.icon}</div>
            <Text className="perk-name font-[600] text-center text-xs md:text-sm lg:text-base text-[#014aad] mt-3">
              {perk.name}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
