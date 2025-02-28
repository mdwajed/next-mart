"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { cartReducer, CartState, CartAction } from "@/reducer/cartReducer";

const initialState: CartState = {
  cart: [],
};

// Create the CartProvider component
const CartContext = createContext<
  | {
      state: CartState;
      dispatch: Dispatch<CartAction>;
      removeFromCart: (id: string) => void;
      updateQuantity: (id: string, quantity: number) => void;
      clearCart: () => void;
    }
  | undefined
>(undefined);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // Define helper functions
  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <CartContext.Provider
      value={{ state, dispatch, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
