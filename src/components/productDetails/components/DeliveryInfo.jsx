import {
  Text,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
const DeliveryInfo = () => {
  const [loading, setLoading] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleInput = (value) => {
    setShowText(false);

    if (value.length === 6) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setShowText(true);
      }, 2000);
    }
  };
  return (
    <div>
      <InputGroup w={250}>
        <InputLeftElement className="location" pointerEvents="none">
          <Icon as={MdLocationOn} boxSize={5} />
        </InputLeftElement>
        <Input
          type="number"
          placeholder="Enter Your Zip Code"
          borderRadius={0}
          border={"none"}
          _loading={true}
          borderBottom={"1px solid var(--chakra-colors-chakra-body-text)"}
          sx={{
            "&:focus-visible": {
              boxShadow: "none",
            },
          }}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        />
        <InputRightElement>
          {loading && <Spinner size="sm" />}
        </InputRightElement>
      </InputGroup>
      {showText && (
        <Text className="mt-1 text-green-600">Delivery available {": )"}</Text>
      )}
    </div>
  );
};

export default DeliveryInfo;
