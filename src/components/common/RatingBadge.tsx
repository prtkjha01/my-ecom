import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineStar } from "react-icons/md";

interface RatingBadgeProps {
  rating: number;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ rating }) => {
  const getColor = (rating: number): string => {
    if (rating >= 3.5) {
      return "bg-green-500";
    } else if (rating < 3.5 && rating >= 2.8) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div
      className={
        "rating w-min flex items-center gap-1 text-white py-[2px] px-1 rounded " +
        getColor(rating)
      }
    >
      <span className="text-xs font-[700]">{rating}</span>
      <Icon className="mt-[-2px]" as={MdOutlineStar} boxSize={4} />
    </div>
  );
};

export default RatingBadge;
