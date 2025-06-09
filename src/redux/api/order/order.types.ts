export type OrderPayload = {
  address_id?: string;
  payment_method?: string;
  expected_delivery_date?: Date;
  products?: {
    product: string;
    count: number;
  }[];
  total?: number;
  razorpay_data?: {
    order_creation_id: string;
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
};

type Product = {
  _id: string;
  product_name: string;
  brand: string;
  category: string;
  images: string[];
  currency_symbol: string;
  price: number;
  discount: number;
  rating: number;
  is_assured: boolean;
};

type OrderProduct = {
  product: Product;
  count: number;
};

type RazorpayData = {
  order_creation_id: string;
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export type Order = {
  _id: string;
  products: OrderProduct[];
  user: string;
  payment_method: string;
  address: string;
  status: string;
  total: number;
  razorpay_data: RazorpayData;
  expected_delivery_date: string;
};
