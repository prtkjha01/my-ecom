import { Text } from "@chakra-ui/react";
import RatingBadge from "@/components/common/RatingBadge";

const ProductInfo = ({
  productName,
  rating,
  currencySymbol,
  price,
  discount,
  description,
}) => {
  return (
    <>
      <Text className="product-name text-[35px] font-[500]">{productName}</Text>

      <div className="mt-4">
        <RatingBadge rating={rating} />
      </div>

      <div className="product-price flex items-center mt-8 gap-3">
        <div className="net-price text-2xl font-medium">
          {currencySymbol} {price - price * discount * 0.01}
        </div>

        <div className="absolute-price line-through text-gray-500 font-medium">
          {currencySymbol} {price}
        </div>

        <div className="discount text-[#388e3c]  font-medium">
          {discount + "% off"}
        </div>
      </div>

      <div className="description text-lg mt-8">{description}</div>
    </>
  );
};

export default ProductInfo;
