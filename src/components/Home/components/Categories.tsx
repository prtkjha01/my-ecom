import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Category {
  id: number;
  category_name: string;
  enum_value?: string;
  category_thumbnail: string;
}

const Categories: React.FC = () => {
  const router = useRouter();
  const [categories] = useState<Category[]>([
    {
      id: 1,
      category_name: "Clothing",
      enum_value: "CLOTHING",
      category_thumbnail:
        "https://img.freepik.com/premium-photo/stack-colourful-t-shirt-hanging-fashion-department-store-shopping-mall_33874-272.jpg?w=360",
    },
    {
      id: 2,
      category_name: "Electronics",
      enum_value: "ELECTRONICS",
      category_thumbnail:
        "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
    },
    {
      id: 3,
      category_name: "Stationary",
      enum_value: "STATIONARY",
      category_thumbnail:
        "https://m.media-amazon.com/images/I/813hfEpmb3L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      category_name: "Fitness",
      category_thumbnail:
        "https://www.cockatooindia.com/cdn/shop/files/1_0c856f7c-34c5-4f5b-93a2-3a7fe96f4fbb.jpg?v=1684175158",
    },
    {
      id: 5,
      category_name: "Personal Care",
      enum_value: "PERSONAL_CARE",
      category_thumbnail:
        "https://5.imimg.com/data5/SELLER/Default/2021/3/EK/CP/CQ/9277553/all-types-of-cosmetics.jpg",
    },
  ]);

  return (
    <section className="categories">
      <Text className="categories-section-header text-start text-2xl font-[600]">
        Top Categories
      </Text>
      <div className="category-list flex flex-wrap gap-4 lg:flex-nowrap justify-between mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item flex flex-col items-center cursor-pointer"
            onClick={() => {
              router.push(`/products/${category.category_name.toLowerCase()}`);
            }}
          >
            <img
              src={category.category_thumbnail}
              alt={category.category_name}
              className="category-image h-16 w-16 rounded-3xl md:h-24 md:w-24 md:rounded-[35px] lg:h-32 lg:w-32 lg:rounded-[50px] border border-solid border-gray-200 object-cover shadow-lg"
            />
            <Text className="category-name text-xs md:text-sm lg:text-base text-center font-[500] mt-2">
              {category.category_name}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
