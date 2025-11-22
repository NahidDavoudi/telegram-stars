export interface Product {
  id: number;
  title: string;
  amount: number;
  price: number;
  desc: string;
  badge: string | null;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotal: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
}

