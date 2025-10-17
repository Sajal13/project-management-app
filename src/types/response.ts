export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  images?: string[];
  slug: string;
  price: number;
  category: Category;
  createdAt: string;
  updatedAt: string;
}