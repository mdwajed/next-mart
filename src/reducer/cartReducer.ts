"use client";
import { IProduct } from "@/types";
// Define initial cart state
export interface CartState {
  cart: IProduct[];
}

// Define actions for the reducer
export type CartAction =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Create a reducer function to handle cart actions
export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    // case "ADD_TO_CART":
    // return {
    //   ...state,
    //   cart: [...state.cart, action.payload],
    // };
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 } // Increase quantity
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }], // Set quantity to 1 for new items
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
