"use client";

import Link from "next/link";

export default function BlogFooter() {
  return (
    <footer className="w-full bg-white dark:bg-background-dark py-12 px-6 md:px-20 border-t border-border-light dark:border-border-dark">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-extrabold text-xl">
            <div className="size-6">
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
            <span>Good Market</span>
          </div>
          <p className="text-text-green dark:text-text-green-light text-sm">
            Empowering people and planet through circular economy principles and
            community-driven knowledge.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-text-main dark:text-white mb-4">
            Navigation
          </h5>
          <ul className="flex flex-col gap-2 text-sm text-text-green dark:text-text-green-light">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Public Hub
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Learning Center
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Marketplace
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Impact Tracking
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-text-main dark:text-white mb-4">
            Resources
          </h5>
          <ul className="flex flex-col gap-2 text-sm text-text-green dark:text-text-green-light">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Case Studies
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Toolkits
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Open Data
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Policy Briefs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-text-main dark:text-white mb-4">
            Connect
          </h5>
          <div className="flex gap-4">
            <a
              className="size-10 rounded-full bg-border-light dark:bg-border-dark flex items-center justify-center text-text-main dark:text-white hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              className="size-10 rounded-full bg-border-light dark:bg-border-dark flex items-center justify-center text-text-main dark:text-white hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                chat_bubble
              </span>
            </a>
            <a
              className="size-10 rounded-full bg-border-light dark:bg-border-dark flex items-center justify-center text-text-main dark:text-white hover:bg-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-green">
        <p>© 2024 Good Market Global. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#">
            Terms of Service
          </a>
          <a className="hover:underline" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
