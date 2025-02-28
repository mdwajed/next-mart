"use client";

import { useCart } from "@/context/cartContex";
import { IProduct } from "@/types";

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
