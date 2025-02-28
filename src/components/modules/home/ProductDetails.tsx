"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { IProduct } from "@/types";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
      {/* Product Image */}
      <div className="relative w-full h-[400px] shadow-lg">
        <Image
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-600">${product.price.toFixed(2)}</p>
        <p className="text-gray-700">{product.description}</p>

        {/* Stock & Brand */}
        <p className="text-gray-600">
          Brand: <strong>{product.brand}</strong>
        </p>
        <p className="text-gray-600">Stock: {product.quantity}</p>

        {/* Add to Cart Button */}
        <AddToCartButton product={product} />

        {/* Social Share */}
        <div className="flex items-center space-x-4 mt-4">
          <span>Share:</span>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${currentURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={24}
              className="text-blue-600 hover:text-blue-800"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${currentURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={24}
              className="text-blue-400 hover:text-blue-600"
            />
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${currentURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={24}
              className="text-green-600 hover:text-green-800"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
