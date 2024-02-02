import { Text } from "@chakra-ui/react";

const FAQs = ({ faqs }) => {
  return (
    <>
      <Text className="mb-2 font-bold">FAQs</Text>
      <div className="faq-list flex flex-col gap-3">
        {faqs.map((item, index) => (
          <div
            className={`faq pb-2 ${
              index !== faqs.length - 1 && "border-b-[1px] border-gray-200 "
            } `}
            key={item.question}
          >
            <Text className="question font-semibold">
              {"Q: " + item.question}
            </Text>
            <Text>{"A: " + item.answer}</Text>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQs;
