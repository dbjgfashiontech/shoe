import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,35,42,0.06),transparent_22%),linear-gradient(180deg,#ffffff_0%,#fffdfd_100%)]" />
      <div className="absolute right-0 top-0 hidden xl:block h-full w-[34%] bg-red-50" />
      <div className="absolute left-6 top-8 hidden md:flex gap-3 z-10 ">
        {["Street", "Sport", "Daily"].map((tag) => (
          <span
            key={tag}
            className="brand-chip rounded-full px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-18 lg:py-22 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center lg:text-left max-w-3xl pt-12 md:pt-10">
          <p className="text-brand-700 text-sm tracking-[0.42em] uppercase font-semibold mb-4">
            New Collection 2025
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-ink font-serif leading-tight mb-6">
            Wear Your <span className="text-brand-gradient">Stride</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl lg:max-w-2xl">
            Discover premium shoes for men and women, built to feel sharp,
            comfortable, and ready for everyday motion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#products"
              className="brand-button px-8 py-3.5 rounded-full text-sm tracking-[0.28em] uppercase font-bold text-center"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="brand-button-secondary px-8 py-3.5 rounded-full text-sm tracking-[0.28em] uppercase font-bold text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="ml-auto max-w-lg grid gap-5">
            <div className="brand-panel rounded-[2rem] p-8 border-l-4 border-l-brand-600">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-700 mb-4 font-semibold">
                Style Spotlight
              </p>
              <h2 className="text-3xl font-serif font-bold leading-tight mb-4 text-brand-ink">
                Fresh pairs for everyday movement
              </h2>
              <p className="text-sm leading-6 text-gray-600">
                Clean silhouettes, sharp details, and a lighter storefront made
                to feel fast, premium, and easy to shop.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="brand-panel rounded-[1.5rem] p-5">
                <p className="text-3xl font-bold text-brand-700">200+</p>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mt-2">
                  New Drops
                </p>
              </div>
              <div className="brand-panel rounded-[1.5rem] p-5">
                <p className="text-3xl font-bold text-brand-700">4.8/5</p>
                <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mt-2">
                  Happy Buyers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-[0.3em] uppercase font-semibold">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
