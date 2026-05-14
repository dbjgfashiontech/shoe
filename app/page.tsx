"use client";
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

type Category = "All" | "Men" | "Women" | "Accessories";

const categories: Category[] = ["All", "Men", "Women"];

export default function HomePage() {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <HeroBanner />

      <div className="bg-white py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Products", value: "200+" },
            { label: "Happy Customers", value: "5,000+" },
            { label: "Years of Craft", value: "10+" },
            { label: "Cities Delivered", value: "50+" },
          ].map((s) => (
            <div
              key={s.label}
              className="brand-panel rounded-[1.5rem] px-4 py-5"
            >
              <p className="text-2xl font-bold text-brand-700">{s.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-[0.24em] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section
        id="products"
        className="max-w-7xl mx-auto px-4 py-16 scroll-mt-28"
      >
        <div className="text-center mb-10">
          <p className="text-brand-700 text-xs tracking-[0.4em] uppercase font-semibold mb-2">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink font-serif">
            Shop by Category
          </h2>
          <div className="w-16 h-1 rounded-full brand-gradient mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 tracking-[0.12em] ${
                active === cat
                  ? "brand-button border-transparent shadow"
                  : "bg-white border-gray-200 text-gray-600 hover:border-brand-500 hover:text-brand-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="max-w-7xl mx-auto brand-panel rounded-[2rem] py-16 text-center px-4">
          <div className="w-14 h-1 rounded-full brand-gradient mx-auto mb-6" />
          <p className="text-brand-700 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Limited Time Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink font-serif mb-4">
            Up to 40% Off on Selected Items
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm">
            Don&apos;t miss out on our exclusive seasonal sale.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="brand-button font-bold px-10 py-3.5 rounded-full text-sm tracking-[0.28em] uppercase"
          >
            Shop the Sale
          </button>
        </div>
      </section>
    </>
  );
}
