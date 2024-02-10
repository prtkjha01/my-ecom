import { Text } from "@chakra-ui/react";
import ProductCard from "../search/components/ProductCard";
const Suggestions = () => {
  const suggestions = [
    {
      id: "1a2b3c4d-5e6f-7g8h-9i10-j11k12l13m14",
      product_name: "Product 1",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category A",
      price: 500,
      currency_symbol: "₹",
      rating: 4.2,
      discount: 15,
      is_assured: true,
    },
    {
      id: "2b3c4d5e-6f7g-8h9i-10j11k12l13m14",
      product_name: "Product 2",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category B",
      price: 800,
      currency_symbol: "₹",
      rating: 3.8,
      discount: 10,
      is_assured: false,
    },
    {
      id: "3c4d5e6f-7g8h-9i10-j11k12l13m14",
      product_name: "Product 3",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category C",
      price: 300,
      currency_symbol: "₹",
      rating: 4.5,
      discount: 25,
      is_assured: true,
    },
    {
      id: "4d5e6f7g-8h9i-10j11k12l13m14",
      product_name: "Product 4",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category B",
      price: 700,
      currency_symbol: "₹",
      rating: 4.0,
      discount: 20,
      is_assured: true,
    },
    {
      id: "5e6f7g8h-9i10-j11k12l13m14",
      product_name: "Product 5",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category A",
      price: 450,
      currency_symbol: "₹",
      rating: 1.8,
      discount: 12,
      is_assured: false,
    },
    {
      id: "6f7g8h9i-10j11k12l13m14",
      product_name: "Product 6",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category C",
      price: 600,
      currency_symbol: "₹",
      rating: 3.5,
      discount: 18,
      is_assured: false,
    },
    {
      id: "7g8h9i10-j11k12l13m14",
      product_name: "Product 7",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category A",
      price: 850,
      currency_symbol: "₹",
      rating: 4.6,
      discount: 15,
      is_assured: true,
    },
    {
      id: "8h9i10j11k12l13m14",
      product_name: "Product 8",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category B",
      price: 400,
      currency_symbol: "₹",
      rating: 3.2,
      discount: 22,
      is_assured: false,
    },
    {
      id: "9i10j11k12l13m14",
      product_name: "Product 9",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category C",
      price: 550,
      currency_symbol: "₹",
      rating: 2.1,
      discount: 10,
      is_assured: true,
    },
    {
      id: "10j11k12l13m14",
      product_name: "Product 10",
      product_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfsKn_iXwWXRzYDY3_V-wLB5FJSwy9oiA3gKIEzQqWg&s",
      product_category: "Category A",
      price: 750,
      currency_symbol: "₹",
      rating: 4.4,
      discount: 18,
      is_assured: false,
    },
  ];
  return (
    <div className="px-4 lg:px-12 bg-white">
      <Text className="text-2xl font-bold mb-2 ">Suggestions</Text>
      <div className="product-row pl-[1px] py-6  flex overflow-x-scroll gap-3 lg:gap-4 ">
        {suggestions.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
