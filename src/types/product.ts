export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  brand: string;
  stock: number;
  rating: number;
  numReviews: number;
  is_assured: boolean;
  discount?: number;
  createdAt: string;
  updatedAt: string;
}
