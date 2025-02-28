"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types";

const FeaturedProducts = ({
  featuredProducts,
}: {
  featuredProducts: IProduct[];
}) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 6).map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link href={`/products/${product._id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            View All
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
