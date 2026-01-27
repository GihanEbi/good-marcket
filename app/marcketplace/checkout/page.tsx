"use client";

import React from "react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg
                className="size-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Good Market
            </h2>
          </Link>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined">lock</span>
            <span className="text-xs font-black uppercase tracking-widest hidden sm:block">
              Secure Checkout
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-20 py-10">
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>

            {/* Step 1: Cart */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-sm font-black">
                  check
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                Cart
              </span>
            </div>

            {/* Step 2: Shipping */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-sm font-black">
                  check
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                Shipping
              </span>
            </div>

            {/* Step 3: Payment (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-4 border-slate-100 dark:border-[#020617] flex items-center justify-center font-black text-sm ring-2 ring-emerald-500">
                3
              </div>
              <span className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Payment
              </span>
            </div>

            {/* Step 4: Review */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-8 rounded-full bg-slate-200 dark:bg-white/10 text-slate-400 dark:text-slate-500 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Shipping Section (Review Mode) */}
            <section className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-emerald-500">
                    local_shipping
                  </span>
                  Shipping & Delivery
                </h3>
                <button className="text-xs font-black text-emerald-500 hover:underline uppercase tracking-wider">
                  Edit
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-sm">
                  <p className="font-bold text-slate-900 dark:text-white mb-1">
                    Jane Doe
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    123 Eco Avenue, Circular Suite 101
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    Portland, OR 97201
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    United States
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Eco-Delivery Option
                  </p>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-500/20">
                    <span className="material-symbols-outlined text-emerald-500">
                      electric_bolt
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        EV Delivery + Carbon Offset
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Arrives in 3-5 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-emerald-500">
                    payments
                  </span>
                  Payment Method
                </h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-500/20 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">eco</span>
                  Carbon Neutral Payment
                </div>
              </div>

              {/* Payment Selectors */}
              <div className="grid gap-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <label
                    className="flex-1 flex items-center justify-between p-4 border-2 border-emerald-500 bg-emerald-50/30 dark:bg-emerald-500/5 rounded-2xl cursor-pointer transition-all relative"
                    htmlFor="card"
                  >
                    <input
                      defaultChecked
                      className="hidden"
                      id="card"
                      name="payment"
                      type="radio"
                    />
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-500">
                        credit_card
                      </span>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">
                        Credit / Debit Card
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-1">
                      <div className="w-8 h-5 bg-slate-200 dark:bg-white/10 rounded"></div>
                      <div className="w-8 h-5 bg-slate-200 dark:bg-white/10 rounded"></div>
                    </div>
                  </label>

                  <label
                    className="flex-1 flex items-center justify-between p-4 border border-slate-200 dark:border-white/10 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all"
                    htmlFor="paypal"
                  >
                    <input
                      className="hidden"
                      id="paypal"
                      name="payment"
                      type="radio"
                    />
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        account_balance_wallet
                      </span>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">
                        PayPal
                      </span>
                    </div>
                    <span className="text-blue-600 font-black italic text-sm">
                      PayPal
                    </span>
                  </label>
                </div>
              </div>

              {/* Card Form */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">
                      lock
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">
                    Expiry Date
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="MM / YY"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">
                    CVV
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400"
                    placeholder="123"
                    type="text"
                  />
                </div>
              </div>
            </section>

            {/* Review Items */}
            <section className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-emerald-500">
                  shopping_basket
                </span>
                Review Items (2)
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-white/5">
                <div className="py-6 first:pt-0 flex gap-4">
                  <div className="size-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5">
                    <img
                      alt="Organic Cotton Tote"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7xrHHTkHJ57encq3--46DvGSN5iVkUIim_s7wq7IPqvjG0ZaIAwJvxG6_pEJXDBdzYsh1l-uEz78YRsR-ZK1abgsagloYH7B9u3DqeyiwS8cnPIG8Giy2IKnmV1joNOooWUYRJ4KmaSsEMTVzpZ2kXH6OsJWq1FfSx72BrUxD3cF72J1tRBjM_iS8QbqZraKRDZwBNc1nquym8IUFrrN0TnymhPwHHN29asak3K7hW-fjT2475387WMOOFRMh7CJ2Nsmy-4CLxMQ"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        Organic Cotton Tote
                      </h4>
                      <p className="font-black text-sm text-slate-900 dark:text-white">
                        $24.00
                      </p>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Quantity: 1 • Color: Natural
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="material-symbols-outlined text-[14px] text-emerald-500">
                        eco
                      </span>
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Fair Trade
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-6 flex gap-4">
                  <div className="size-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/5">
                    <img
                      alt="Recycled Glass Vase"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWSOY71U5UB-3o6yPuPV4LRjErfHAmlMu7-lScUk0-RRB7XJt1rJEZvSrapcFAbQbsHnKbkZg0zAce1hwHmGV0gFxbHWDugk0G2PArc2xacokfKCHYmkFbPU_f4t-537F9fdFGW12QBnIBM4phCFyXJNXixiLm9OSSrqZrl7PqDlGn5GB6VFV3gbVCRnAIgEO5b8pdjPwHG_6gU3dxPqi03eSmF5TY9JN2NOG_KzkBHj_9NA5UbOtmSjVCWN1onEU_RvKkiBqGwA0"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        Recycled Glass Vase
                      </h4>
                      <p className="font-black text-sm text-slate-900 dark:text-white">
                        $58.00
                      </p>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Quantity: 1 • Color: Ocean Blue
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="material-symbols-outlined text-[14px] text-emerald-500">
                        recycling
                      </span>
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        100% Recycled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-xl font-black mb-6 text-slate-900 dark:text-white">
                Order Summary
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Subtotal (2 items)</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    $82.00
                  </span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Eco-Shipping</span>
                  <span className="font-bold text-emerald-500">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Taxes</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    $6.56
                  </span>
                </div>
                <div className="flex justify-between text-sm font-medium items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-slate-500">Impact Fee</span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 cursor-help">
                      help
                    </span>
                  </div>
                  <span className="font-bold text-emerald-500">$1.50</span>
                </div>
              </div>
              <div className="border-t border-slate-100 dark:border-white/5 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    $90.06
                  </span>
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Neutralizes 12kg of CO2
                </p>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mb-4">
                Complete Purchase
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 font-medium">
                By clicking "Complete Purchase", you agree to Good Market&apos;s{" "}
                <a className="underline hover:text-emerald-500" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline hover:text-emerald-500" href="#">
                  Ethical Sourcing Policy
                </a>
                .
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-400 text-3xl">
                verified
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Buyer Protection
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Full refund if items are not as described or lost in transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 px-6 lg:px-20 py-10 mt-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <svg
                className="size-5 text-emerald-600 dark:text-emerald-400"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white">
              Good Market
            </h2>
          </div>

          <div className="flex gap-8">
            <img
              alt="B-Corp Certification"
              className="h-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMaIdePDB1v6T2J7-kNQMRmfgjWxRWhVmOPZENNKZL9p9gRiWqUWThhgtobCl7mWaUUaYrXNhUxSptKZAMcGXEnR7gHdVfZRpFWzHwow_SAHpKF1oltnZYmHVoTgkldBTQCjF821cIjq2sHrSA2Tdm7TzDBHCQM90OLFEsAVoa5cNwLo4QqG3QAWI5DYjo2fcSI3Lz7CqonfSvJVtQRqr6dKU3bN_7oETTGbryKel0VfYPWKbGlGGgjYpE6GbMPDq5Gan8ZiYHXV0"
            />
            <img
              alt="Fair Trade Certification"
              className="h-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGOFwemicC-5Arc4Pem9WXnWaFRHP0f6ujrNC2M4XG3LLDvL-MpmjwxzWDvw0YhYI4H3rAO4LRfu3PkpTdKqoZ1PlAN-uz7b1Cdd21VPEDEJjvhHH1ZoyiuMBGK75Nk_Sm8i_B0LmZnRr9AL5B1E3C4cyBvldm2rBqGKWj12Zf-F-TJZRpk2bXgBOfrPwKfInKpT1Hb3U8CV_odw0wILnstueU04ZI1hEzgf9tRN48TMySH2TdXYp594WDW_DAor4Q735nkWxijMs"
            />
            <img
              alt="1% for the Planet"
              className="h-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBreNNea01h4qp--IzHfJgWiXj-d_jsT0JlYveBBlqBLPq6211tqNJKhtGtVQRl1EOlvnwu_sUWI-KfZDSNopCn4MWOrXbq-DC80wUJoK8-DpWUImczfIQj6RVeldIbJpVUk7uDeff2H9Nm3bzoJnkc3ihOcle8M6CfoQMxoYd7_1rHf9Yx4sjyObzqcr9awowhgcJvlxXTwhsaki141c8AvyjXsT0dAD_Uubcz6k4Wl8j2t8B4eBfKYNgWpMzM8iMZJkSiNgNCl9w"
            />
          </div>

          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2024 Good Market. Built for a better world.
          </p>
        </div>
      </footer>
    </div>
  );
}
