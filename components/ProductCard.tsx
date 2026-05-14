"use client";

import Image from "next/image";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const needsSize =
    product.category.toLowerCase() !== "accessories" &&
    product.category.toLowerCase() !== "accessory";

  const handleAdd = () => {
    if (needsSize && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <div className="group brand-panel rounded-[1.75rem] overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.18em] ${
              product.badge === "Sale"
                ? "bg-red-500 text-white"
                : product.badge === "New"
                  ? "bg-white text-brand-700 border border-red-100"
                  : "brand-gradient text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        {discount && (
          <span className="absolute top-3 right-3 bg-brand-ink text-white text-xs font-bold px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-brand-700 font-semibold uppercase tracking-[0.24em] mb-1">
          {product.category}
        </p>

        <h3 className="font-semibold text-brand-ink text-sm leading-snug mb-1">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 mb-3 flex-1">{product.description}</p>

        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              size={12}
              className={i < 4 ? "text-brand-600 fill-brand-600" : "text-gray-300"}
            />
          ))}
        </div>

        {needsSize && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-600 mb-2">Select Size</p>

            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border text-xs font-semibold transition-all ${
                    selectedSize === size
                      ? "brand-gradient text-white border-transparent shadow-sm"
                      : "border-red-100 bg-white text-gray-700 hover:border-brand-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto gap-3">
          <div>
            <span className="text-lg font-bold text-brand-ink">
              Rs.{product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-2">
                Rs.{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-all duration-200 ${
              added ? "bg-green-500 text-white" : "brand-button"
            }`}
          >
            <FiShoppingCart size={13} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
