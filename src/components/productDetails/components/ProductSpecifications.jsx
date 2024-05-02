import React from "react";
import { Skeleton } from "@chakra-ui/react";
export const ProductSpecificationsSkeleton = () => (
  <>
    <Skeleton height="20px" width="200px" mb={2} />
    <Skeleton height="15px" width="150px" mb={2} />
    <Skeleton height="15px" width="150px" mb={2} />
    <Skeleton height="15px" width="150px" mb={2} />
    <Skeleton height="15px" width="150px" mb={2} />
    <Skeleton height="15px" width="150px" />
  </>
);
const ProductSpecifications = ({ specifications }) => {
  return (
    <>
      <h2 className="mb-2 font-bold">Specifications</h2>
      <ul className="specification-list">
        {specifications.length > 0 &&
          specifications.map((spec, index) => (
            <li className="specification-item text-lg" key={index}>
              • {spec}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductSpecifications;
