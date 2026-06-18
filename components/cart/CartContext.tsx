"use client";
import { toast } from "react-toastify";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: any) => void;

  increaseQty: (id: number) => void;

  decreaseQty: (id: number) => void;

  removeFromCart: (id: number) => void;

  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(
  null
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    []
  );

	const addToCart = (product: any) => {
	console.log("ADDING PRODUCT:", product);
	
	setCartItems((prev) => {
		console.log("PREVIOUS CART:", prev);
	
		const existing = prev.find(
		(item) => item.id === product.id
		);
	
		if (existing) {
		return prev.map((item) =>
			item.id === product.id
			? {
				...item,
				quantity: item.quantity + 1,
				}
			: item
		);
		}
	
		return [
		...prev,
		{
			id: product.id,
			name: product.name,
			image: product.image,
			price: product.price,
			quantity: 1,
		},
		];
	});
  toast.success(`${product.name} added to cart`);	
	};

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}