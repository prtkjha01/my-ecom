"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getProductsByCategory } from "@/redux/slices/product";
import ProductCard from "../search/components/ProductCard";
import { RootState } from "@/redux/store";

interface Product {
  _id: string;
  [key: string]: any;
}

const CategoryProducts: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const category = router.query.category as string;
  const products = useSelector(
    (state: RootState) => state?.product?.products?.data
  ) as Product[];

  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category.toUpperCase()));
    }
  }, [category, dispatch]);

  return (
    <>
      {products?.length ? (
        <div className="p-4 sm:p-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {products.map((product) => (
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
