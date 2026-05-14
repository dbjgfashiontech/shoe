export interface Product {
  id: number;
  name: string;
  category: "Men" | "Women" | "Accessories";
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}