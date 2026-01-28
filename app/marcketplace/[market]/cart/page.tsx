"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Organic Cotton Tote",
      price: 24.0,
      quantity: 1,
      image: 5,
      seller: "Elena Costa",
      tag: "Fair Trade",
      icon: "verified_user",
    },
    {
      id: 2,
      name: "Natural Face Oil",
      price: 32.0,
      quantity: 1,
      image: 7,
      seller: "Seed & Skin",
      tag: "Vegan",
      icon: "spa",
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal + 2.0; // Adding impact contribution

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500 flex flex-col">
      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-10 flex-1 w-full">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">
            Your Basket
          </h1>
          <p className="text-slate-500 font-medium">
            {items.length} items in your cart. You&apos;re supporting
            independent, ethical producers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row items-center gap-6 border-b border-slate-100 dark:border-white/5 last:border-0 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="size-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-white/5">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover"
                      src={`https://picsum.photos/400/400?random=${item.image}`}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors cursor-pointer">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1 font-medium mt-1">
                          <span className="material-symbols-outlined text-xs text-emerald-500">
                            verified_user
                          </span>
                          By {item.seller}
                        </p>
                      </div>
                      <p className="text-xl font-black text-slate-900 dark:text-white">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center bg-slate-100 dark:bg-white/5 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="size-8 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-lg transition-all text-slate-500 font-bold"
                          >
                            -
                          </button>
                          <span className="w-10 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="size-8 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded-lg transition-all text-slate-500 font-bold"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-rose-500 transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-wider"
                        >
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-wider border border-emerald-500/20 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">
                            {item.icon}
                          </span>
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:translate-x-[-4px] transition-transform w-fit uppercase tracking-wider text-xs"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 p-8 flex flex-col gap-6 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Order Summary
              </h2>
              <div className="flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-black text-emerald-500">Free</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg w-fit uppercase tracking-wider border border-emerald-500/20">
                    <span className="material-symbols-outlined text-[12px]">
                      recycling
                    </span>
                    Zero-Waste Packaging
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 dark:text-white">
                      Impact Contribution
                    </span>
                    <span className="text-emerald-500 font-bold">+$2.00</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-3 leading-tight font-medium">
                    Optional donation to reforestation projects through our
                    circular network.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      defaultChecked
                      className="size-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-white/5 dark:border-white/10"
                      type="checkbox"
                    />
                    <span className="text-xs font-bold">
                      Add impact donation
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-slate-100 dark:border-white/5 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Secure Payments
                </p>
                <div className="flex gap-4 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  <span className="material-symbols-outlined text-3xl text-slate-400">
                    credit_card
                  </span>
                  <span className="material-symbols-outlined text-3xl text-slate-400">
                    payments
                  </span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px]">
                      eco
                    </span>
                    Carbon Neutral
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-[1.5rem] bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-500">
                redeem
              </span>
              <div>
                <h4 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">
                  Impact Reward
                </h4>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                  This order will earn you{" "}
                  <span className="text-emerald-500 font-bold">
                    12 Impact Points
                  </span>{" "}
                  towards your next purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
