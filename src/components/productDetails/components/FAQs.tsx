import { Text, Skeleton, SkeletonText } from "@chakra-ui/react";

export const FAQsSkeleton = () => (
  <>
    <Skeleton height="20px" width="100px" mb={2} />
    <div className="faq mb-4">
      <Skeleton height="15px" width="100%" mb={2} />
      <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
    </div>
    <div className="faq mb-4">
      <Skeleton height="15px" width="100%" mb={2} />
      <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
    </div>
    <div className="faq">
      <Skeleton height="15px" width="100%" mb={2} />
      <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
    </div>
  </>
);
const FAQs = ({ faqs }: { faqs: any }) => {
  return (
    <>
      <Text className="mb-2 font-bold">FAQs</Text>
      <div className="faq-list flex flex-col gap-3">
        {faqs.map((item: any, index: number) => (
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
