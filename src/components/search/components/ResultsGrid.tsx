"use client";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";

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

interface ResultsGridProps {
  products: Product[];
  isLoading: boolean;
  error?: any;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({
  products,
  isLoading,
  error,
}) => {
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-428px)]">
        <h1 className="text-3xl font-bold text-red-500">
          Error loading products
        </h1>
      </div>
    );
  }

  return isLoading ? (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <ProductCardSkeleton key={item} />
      ))}
    </div>
  ) : products.length === 0 ? (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-428px)]">
      <img
        src="https://app.lssquare.com/static/media/empty_product_banner.c076afe7.png"
        alt=""
      />
      <h1 className="text-3xl font-bold">No Products Found</h1>
    </div>
  ) : (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ResultsGrid;
