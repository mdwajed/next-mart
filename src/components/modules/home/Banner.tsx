"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, text: "🔥 Big Discounts on All Products!", image: "/banner1.jpg" },
  { id: 2, text: "🚀 New Arrivals Are Here!", image: "/banner2.jpg" },
  { id: 3, text: "🎉 Exclusive Offers for Members!", image: "/banner3.jpg" },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
      {/* Carousel Section */}
      <div className="absolute inset-0 flex transition-all duration-500">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt="Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slide.text}
              </motion.h1>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-500">
                Shop Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 p-2 rounded-full text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 p-2 rounded-full text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Banner;
