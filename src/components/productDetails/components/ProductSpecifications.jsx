import React from "react";

const ProductSpecifications = ({ specifications }) => {
  return (
    <>
      <h2 className="mb-2 font-bold">Specifications</h2>
      <ul className="specification-list">
        {specifications.map((spec, index) => (
          <li className="specification-item text-lg" key={index}>
            • {spec}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductSpecifications;
