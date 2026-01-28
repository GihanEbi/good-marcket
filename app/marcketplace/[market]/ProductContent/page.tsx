"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";
import Link from "next/link";

export default function ProductContent() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc") setQuantity(quantity + 1);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 font-sans text-slate-900 dark:text-white">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 md:mb-8"
      >
        <ol className="flex items-center space-x-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <Link
              href="/shop"
              className="hover:text-emerald-500 transition-colors"
            >
              Fashion
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-white line-clamp-1">
              Organic Cotton Tote
            </span>
          </li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
        {/* Left: Gallery */}
        <div className="lg:col-span-7">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            {/* Mobile: Horizontal Scroll Row | Desktop: Vertical Column */}
            <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible hide-scrollbar w-full lg:w-24 shrink-0 pb-2 lg:pb-0">
              {[1, 2, 3].map((img, idx) => (
                <div
                  key={idx}
                  className={`size-16 md:size-20 lg:size-24 rounded-xl md:rounded-2xl overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 ${
                    idx === 0
                      ? "border-emerald-500 ring-2 ring-emerald-500/20 ring-offset-2 dark:ring-offset-[#020617]"
                      : "border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  }`}
                >
                  <img
                    alt={`View ${idx}`}
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/400/400?random=${img + 10}`}
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 relative group">
              <img
                alt="Main Product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://picsum.photos/800/800?random=11"
              />
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="px-2 md:px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                  Best Seller
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4 border border-emerald-500/20">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              Fair Trade Certified
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight leading-tight">
              Organic Cotton Tote
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="text-slate-900 dark:text-white font-bold text-sm ml-2">
                  4.8
                </span>
              </div>
              <span className="text-slate-400 text-sm font-bold">
                (152 reviews)
              </span>
            </div>

            <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              $24.00
            </p>
          </div>

          {/* Controls Card */}
          <div className="p-5 md:p-6 rounded-2xl md:rounded-[2rem] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Quantity
              </span>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                <button
                  onClick={() => handleQuantity("dec")}
                  className="size-8 md:size-10 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm active:scale-95"
                >
                  -
                </button>
                <span className="w-8 md:w-10 text-center font-bold text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantity("inc")}
                  className="size-8 md:size-10 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm active:scale-95"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3.5 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl md:rounded-2xl font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                onClick={() => {
                  router.push("/marcketplace/cart");
                }}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart
              </button>
              <button
                className="w-full py-3.5 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl md:rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                onClick={() => {
                  router.push("/marcketplace/checkout");
                }}
              >
                Buy Now
              </button>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/5">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Guaranteed Safe Checkout
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="material-symbols-outlined text-slate-300 text-3xl">
                  credit_card
                </span>
                <span className="material-symbols-outlined text-slate-300 text-3xl">
                  payments
                </span>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">eco</span>
                  Carbon Neutral
                </div>
              </div>
            </div>
          </div>

          {/* Seller Profile */}
          <div className="p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="size-12 md:size-14 rounded-full overflow-hidden border-2 border-emerald-500 p-0.5 shrink-0">
                <img
                  alt="Elena Costa"
                  className="w-full h-full object-cover rounded-full bg-slate-200"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors truncate">
                  Elena Costa
                </h4>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[10px] font-black px-2 py-0.5 bg-emerald-500 text-white rounded uppercase tracking-wider whitespace-nowrap">
                    Impact Score: 98
                  </span>
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                    • 4.9 Seller Rating
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 hover:gap-2 transition-all">
                View Shop{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
              <span className="material-symbols-outlined text-emerald-500">
                recycling
              </span>
              <span className="text-xs font-bold">Zero Waste Packaging</span>
            </div>
            <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
              <span className="material-symbols-outlined text-emerald-500">
                eco
              </span>
              <span className="text-xs font-bold">100% Organic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Description */}
      <section className="mb-16 md:mb-20">
        <div className="border-b border-slate-200 dark:border-white/10 mb-6 md:mb-8">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-1 no-scrollbar">
            {["Description", "Impact Report", "Shipping & Returns"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 md:pb-4 border-b-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "border-emerald-500 text-emerald-500"
                      : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 md:mb-8">
            Our Organic Cotton Tote is more than just a bag; it&apos;s a
            commitment to a circular future. Crafted from heavy-weight 100%
            organic cotton, it&apos;s designed to last a lifetime. Every fiber
            is grown without synthetic pesticides or fertilizers, protecting the
            health of farmers and the soil.
          </p>
          <ul className="space-y-3 md:space-y-4">
            {[
              "Reinforced stitching at stress points for maximum durability.",
              "Water-based, non-toxic eco-dyes.",
              "Completely compostable at the end of its very long life.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm md:text-base"
              >
                <span className="material-symbols-outlined text-emerald-500 text-xl mt-0.5 shrink-0">
                  check_circle
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Products */}
      <section className="mb-16 md:mb-20">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
            Related Products
          </h3>
          <div className="flex gap-2">
            <button className="size-9 md:size-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-9 md:size-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Recycled Glass Vase", price: "$58.00", img: 6 },
            { name: "Natural Face Oil", price: "$32.00", img: 7 },
            { name: "Bamboo Kitchen Set", price: "$45.00", img: 8 },
            { name: "Hemp Linen Sheet", price: "$120.00", img: 4 },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-900/40 rounded-2xl md:rounded-[1.5rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={`https://picsum.photos/400/500?random=${item.img}`}
                />
              </div>
              <div className="p-4 md:p-5">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm md:text-base">
                  {item.name}
                </h4>
                <p className="text-emerald-500 font-black">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
