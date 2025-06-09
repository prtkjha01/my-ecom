"use client";
import { useRouter } from "next/router";
import ProductCard from "../search/components/ProductCard";
import { useGetProductsByCategoryQuery } from "@/redux/api/product/product.api";

interface Product {
  _id: string;
  product_name: string;
  brand: string;
  images: string[];
  price: number;
  currency_symbol: string;
  rating?: number;
  active?: boolean;
}

const CategoryProducts: React.FC = () => {
  const router = useRouter();
  const category = router.query.category as string;

  const { data: productsData, isLoading } = useGetProductsByCategoryQuery(
    {
      category: category?.toUpperCase() || "",
      page: 1,
      limit: 100,
    },
    {
      skip: !category,
      refetchOnMountOrArgChange: true,
    }
  );

  const products = productsData?.data?.products || [];

  if (isLoading) {
    return (
      <div className="p-4 sm:p-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {products.length > 0 ? (
        <div className="p-4 sm:p-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {products.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-428px)]">
          <img
            src="https://app.lssquare.com/static/media/empty_product_banner.c076afe7.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">No Products Found</h1>
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
