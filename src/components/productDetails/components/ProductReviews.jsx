import React from "react";
import { Text, Skeleton } from "@chakra-ui/react";
import RatingBadge from "@/components/common/RatingBadge";

export const ProductReviewsSkeleton = () => (
  <>
    <Skeleton height="20px" width="100px" mb={2} />
  </>
);
const ProductReviews = ({ reviews }) => {
  return (
    <>
      <div className="reviews mt-4">
        <Text className="mb-2 font-bold">Reviews</Text>
        <div className="review-list flex flex-col gap-3">
          {reviews.map((review) => (
            <div className="review-item mb-3" key={review.id}>
              <div className="heading flex gap-2 items-center">
                <RatingBadge rating={review.rating} />
                <Text className="name font-semibold">{review.heading}</Text>
              </div>
              <Text className="mt-3 mb-1">{review.description}</Text>
              <div className="reviewer text-sm text-gray-500 font-semibold">
                {review.reviewer}
                {" " + review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductReviews;
