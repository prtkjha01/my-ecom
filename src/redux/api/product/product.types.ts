export type ProductSearchPayload = {
  query: string;
  min_price?: number;
  max_price?: number;
  min_discount?: number;
  max_discount?: number;
  is_assured?: boolean;
};

export type ProductByCategoryPayload = {
  category: string;
  page: number;
  limit: number;
};

export type CarouselProduct = {
  _id: string;
  images: string[];
};
