"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogHeader() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-20 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-primary">
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
            <h2 className="text-text-main dark:text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">
              Good Market
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              className="text-primary text-sm font-bold border-b-2 border-primary pb-1"
              href="#"
            >
              Hub
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-sm font-medium hover:text-primary transition-colors"
              href="/learning/auth/signin"
            >
              Learning
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-sm font-medium hover:text-primary transition-colors"
              href="/marcketplace/1"
            >
              Marketplace
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Traceability
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 justify-end gap-6 items-center">
          {/* Desktop Search */}
          <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-solid border-border-light dark:border-border-dark">
              <div className="text-text-green flex bg-border-light dark:bg-border-dark items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-border-light dark:bg-border-dark focus:ring-0 text-text-main dark:text-white placeholder:text-text-green px-4 rounded-r-lg text-sm font-normal"
                placeholder="Search resources..."
              />
            </div>
          </label>

          <ThemeToggle />

          <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-text-main text-sm font-bold hover:opacity-90 transition-all">
            Join Hub
          </button>

          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 hidden sm:block"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzANguBe4G0nAYHaKaWicaO_TtdVcxo2m5DPYrAmNcNZPhu5wRkn7eKX1xnUC4Dy47wE0ywUcgnwjkgfzk22pcxYDbGuZLK1TAyhQVeguYFyPGBTUIG2M404yWLtpUw9gp_YOgpMVR3QgLuKOTg924QXb_r0t-FPKFjSGF_qfc6QxY7utUwnp3TQI_3QgMTa8xLFI0AReXQNz_JKJSmyBvyI5CPi18LFs6v-HRqw1hf8i1ZaPVYfRZB74u0whVDgafTkNkzPl7w64")',
            }}
            onClick={() => {
              router.push("/admin/auth");
            }}
          ></div>

          {/* Hamburger Icon (Visible on Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-text-main dark:text-white hover:bg-border-light dark:hover:bg-border-dark rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </header>

      {/* 
        -------------------------------------
        MOBILE SIDEBAR MENU 
        -------------------------------------
      */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-[300px] bg-white dark:bg-[#102216] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-text-main dark:text-white text-xl font-extrabold">
              Menu
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text-green hover:bg-border-light dark:hover:bg-border-dark rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-6">
            <Link
              className="text-primary text-lg font-bold flex items-center gap-3"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined">hub</span>
              Hub
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined">school</span>
              Learning
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined">storefront</span>
              Marketplace
            </Link>
            <Link
              className="text-text-main dark:text-white/80 text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined">query_stats</span>
              Traceability
            </Link>
          </nav>

          {/* Divider */}
          <div className="h-px bg-border-light dark:bg-border-dark my-8"></div>

          {/* Mobile Search */}
          <div className="flex w-full items-center rounded-lg h-12 border border-solid border-border-light dark:border-border-dark mb-6">
            <div className="text-text-green flex bg-border-light dark:bg-border-dark items-center justify-center pl-4 rounded-l-lg h-full">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 border-none bg-border-light dark:bg-border-dark focus:ring-0 text-text-main dark:text-white placeholder:text-text-green px-4 rounded-r-lg text-sm font-normal h-full"
              placeholder="Search..."
            />
          </div>

          {/* Mobile CTA */}
          <button className="w-full h-12 rounded-lg bg-primary text-text-main text-base font-bold hover:opacity-90 transition-all mb-6">
            Join Hub
          </button>

          {/* User Profile in Drawer */}
          <div
            className="mt-auto flex items-center gap-3 p-4 rounded-xl bg-border-light dark:bg-border-dark/50"
            onClick={() => {
              router.push("/admin/auth");
            }}
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzANguBe4G0nAYHaKaWicaO_TtdVcxo2m5DPYrAmNcNZPhu5wRkn7eKX1xnUC4Dy47wE0ywUcgnwjkgfzk22pcxYDbGuZLK1TAyhQVeguYFyPGBTUIG2M404yWLtpUw9gp_YOgpMVR3QgLuKOTg924QXb_r0t-FPKFjSGF_qfc6QxY7utUwnp3TQI_3QgMTa8xLFI0AReXQNz_JKJSmyBvyI5CPi18LFs6v-HRqw1hf8i1ZaPVYfRZB74u0whVDgafTkNkzPl7w64")',
              }}
            ></div>
            <div>
              <p className="text-sm font-bold text-text-main dark:text-white">
                Profile
              </p>
              <p className="text-xs text-text-green">View Account</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
