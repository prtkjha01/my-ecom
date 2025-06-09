export type CartPayload = {
  products: string[];
};

export type UpdateProductQuantityPayload = {
  id: string;
  quantity: number;
};

export type Product = {
  _id: string;
  product_name: string;
  brand: string;
  category: string;
  images: string[];
  currency_symbol: string;
  price: number;
  rating: number;
  discount: number;
  is_assured: boolean;
};

export type CartItem = {
  product: Product;
  count: number;
  subtotal: number;
};

export type CartData = {
  _id: string;
  user: string;
  products: CartItem[];
  total_subtotal: number;
};
