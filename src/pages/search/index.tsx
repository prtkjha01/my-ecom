"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "@layouts/Main";
import SearchPage from "@components/search/index";
import { useGetProductsQuery } from "@/redux/api/product/product.api";
import { useState, useCallback } from "react";

interface Filters {
  min_price?: number;
  max_price?: number;
  min_discount?: number;
  max_discount?: number;
  is_assured?: boolean;
}

interface SortOption {
  id: number;
  label: React.ReactElement;
  value: string;
  active: boolean;
}

const SearchPageContainer = () => {
  const router = useRouter();
  const query = router?.query?.q as string;

  // Filters state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [isAssured, setIsAssured] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({});

  // Sort options state
  const [sortOptions, setSortOptions] = useState<SortOption[]>([
    {
      id: 1,
      label: <span>Price &uarr;</span>,
      value: "PHTL",
      active: false,
    },
    {
      id: 2,
      label: <span>Price &darr;</span>,
      value: "PLTH",
      active: false,
    },
    {
      id: 3,
      label: <span>Rating &uarr;</span>,
      value: "RHTL",
      active: false,
    },
    {
      id: 4,
      label: <span>Rating &darr;</span>,
      value: "RLTH",
      active: false,
    },
  ]);

  // Fetch products
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetProductsQuery(
    {
      query: query || "",
      ...filters,
    },
    {
      skip: !query,
      refetchOnMountOrArgChange: true,
    }
  );

  const products = productsData?.data?.products || [];

  // Filter handlers
  const handlePriceRange = useCallback((val: [number, number]) => {
    setPriceRange(val);
    handleFiltering(val);
  }, []);

  const handleSetAssured = useCallback((val: string) => {
    setIsAssured((prev) => (prev === "true" ? "false" : "true"));
  }, []);

  const handleDiscount = useCallback((val: string) => {
    setDiscount(val);
  }, []);

  const handleClearFilter = useCallback(() => {
    setPriceRange([0, 10000]);
    setIsAssured("");
    setDiscount("");
    setFilters({});
  }, []);

  const handleFiltering = useCallback(
    (newPriceRange?: [number, number]) => {
      let newFilters: Filters = {};
      const currentPriceRange = newPriceRange || priceRange;

      if (currentPriceRange.length === 2) {
        newFilters = {
          ...newFilters,
          min_price: currentPriceRange[0],
          max_price: currentPriceRange[1],
        };
      }

      if (discount && discount.length) {
        switch (discount) {
          case "LT_20":
            newFilters = {
              ...newFilters,
              min_discount: 0,
              max_discount: 20,
            };
            break;
          case "20_40":
            newFilters = {
              ...newFilters,
              min_discount: 20,
              max_discount: 40,
            };
            break;
          case "MT_40":
            newFilters = {
              ...newFilters,
              min_discount: 40,
              max_discount: 100,
            };
            break;
          default:
            break;
        }
      }

      if (isAssured) {
        newFilters = {
          ...newFilters,
          is_assured: isAssured === "true",
        };
      }

      setFilters(newFilters);
    },
    [priceRange, discount, isAssured]
  );

  // Sort handler
  const handleSort = useCallback(
    (index: number) => {
      const updatedSortOptions = sortOptions.map((option, i) => ({
        ...option,
        active: i === index,
      }));

      setSortOptions(updatedSortOptions);

      const selectedOption = sortOptions[index];
      let sortedProducts = [...products];

      switch (selectedOption.value) {
        case "PHTL":
          sortedProducts.sort((a, b) => b.price - a.price); // Price High to Low
          break;
        case "PLTH":
          sortedProducts.sort((a, b) => a.price - b.price); // Price Low to High
          break;
        case "RHTL":
          sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0)); // Rating High to Low
          break;
        case "RLTH":
          sortedProducts.sort((a, b) => (a.rating || 0) - (b.rating || 0)); // Rating Low to High
          break;
        default:
          break;
      }
    },
    [sortOptions, products]
  );

  return (
    <>
      <Head>
        <title>{query} | MyEcom</title>
      </Head>
      <MainLayout>
        <SearchPage
          products={products}
          isLoading={isLoading}
          error={error}
          priceRange={priceRange}
          isAssured={isAssured}
          discount={discount}
          sortOptions={sortOptions}
          onPriceRangeChange={handlePriceRange}
          onAssuredChange={handleSetAssured}
          onDiscountChange={handleDiscount}
          onClearFilter={handleClearFilter}
          onSort={handleSort}
        />
      </MainLayout>
    </>
  );
};

export default SearchPageContainer;
