import React from "react";
import Link from "next/link";

export default function MarketplaceFooter() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark px-6 lg:px-20 py-20 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#0d1b12] dark:text-primary">
              <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold">Good Market</h2>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The ethical marketplace for people and planet. We believe in transparency,
              sustainability, and the power of the circular economy.
            </p>
            <div className="flex gap-4">
              {["public", "mail", "alternate_email"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {[
            {
              title: "Shop",
              links: ["Kitchen & Dining", "Ethical Fashion", "Natural Wellness", "B2B Wholesale"],
            },
            {
              title: "Impact",
              links: ["Our Standards", "Impact Reports", "Producer Stories", "Circular Projects"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 text-[#0d1b12] dark:text-white">{section.title}</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-bold mb-6 text-[#0d1b12] dark:text-white">Join the Movement</h4>
            <p className="text-sm text-gray-500 mb-4">
              Get ethical picks and impact news in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                className="flex-1 bg-border-light dark:bg-border-dark border-none rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary text-[#0d1b12] px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-wrap justify-between items-center gap-6">
          <p className="text-xs text-gray-400">© 2026 Good Market. Built for a better world.</p>
          <div className="flex gap-8">
            {/* Placeholder images for badges */}
            {[14, 15, 16].map((id) => (
              <img
                key={id}
                className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all"
                src={`http://googleusercontent.com/profile/picture/${id}`}
                alt="Certification Badge"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}