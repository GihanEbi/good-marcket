'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MarketplaceHeader() {
  const router = useRouter();
  return (
    <header className="flex flex-col border-b border-solid border-border-light dark:border-border-dark bg-white dark:bg-background-dark sticky top-0 z-50 transition-colors duration-300">
      <div className="px-6 lg:px-20 flex items-center justify-between py-4">
        <div className="flex items-center gap-8 flex-1">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#0d1b12] dark:text-primary"
          >
            <div className="size-8">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d1b12] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
              Good Market
            </h2>
          </Link>

          {/* Search Bar (Hidden on Mobile) */}
          <label className="hidden md:flex flex-col min-w-40 h-10 max-w-md flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#4c9a66] flex border-none bg-border-light dark:bg-border-dark items-center justify-center pl-4 rounded-l-lg transition-colors">
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </div>
              <input
                className="flex w-full min-w-0 flex-1 border-none bg-border-light dark:bg-border-dark text-[#0d1b12] dark:text-white focus:ring-0 h-full placeholder:text-[#4c9a66] px-4 rounded-r-lg text-sm font-medium transition-colors outline-none"
                placeholder="Search ethical products..."
              />
            </div>
          </label>
        </div>

        {/* Nav Links & Icons */}
        <div className="flex items-center gap-4 lg:gap-8 ml-4">
          <div className="hidden lg:flex items-center gap-6">
            {["Kitchen", "Fashion", "Wellness", "B2B"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            {["favorite", "shopping_cart", "person"].map((icon) => (
              <button
                key={icon}
                className="flex items-center justify-center rounded-lg h-10 w-10 bg-border-light dark:bg-border-dark text-[#0d1b12] dark:text-white hover:bg-primary/20 transition-all"
                onClick={() => {
                  router.push(`/${icon === "shopping_cart" ? "marcketplace/cart" : icon === "favorite" ? "marcketplace/wishlist" : "marcketplace/auth/signin" }`);
                }}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
