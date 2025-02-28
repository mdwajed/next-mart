"use client";
import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { FaTrash } from "react-icons/fa";
import { useCart } from "@/context/cartContex";
import { useUser } from "@/context/userContex";

const Cart = () => {
  const { state, removeFromCart, updateQuantity } = useCart();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const totalAmount = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!user) return alert("Please log in to place an order.");

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

    const order = {
      user: user,
      items: state.cart,
      total: totalAmount,
    };

    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const { sessionId } = await res.json();
      if (sessionId) {
        await stripe?.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
                <FaTrash
                  className="text-red-600 cursor-pointer"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            </div>
          ))}
          <h3 className="text-xl font-semibold mt-4">
            Total: ${totalAmount.toFixed(2)}
          </h3>
          <button
            onClick={handleCheckout}
            disabled={loading || state.cart.length === 0}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-800"
          >
            {loading ? "Processing..." : "Order Now"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
