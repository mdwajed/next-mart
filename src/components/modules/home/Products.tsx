"use client";
import { IProduct } from "@/types";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Products({ products }: { products: IProduct[] }) {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-6">Products List</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((product) => (
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

                {/* View Details Button */}
                <div className="mt-4">
                  <Link href={`/products/${product._id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
