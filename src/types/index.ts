
export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  storage: string[];
  features: string[];
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  discountPercentage?: number;
}

export interface CartItem extends Phone {
  quantity: number;
  selectedColor: string;
  selectedStorage: string;
}
