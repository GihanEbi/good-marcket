"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    // Outer Wrapper: Full screen, background colors matching previous pages
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display relative overflow-hidden text-earth-dark dark:text-white">
      {/* Background Blobs (Decoration) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-sage/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content: Centered */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 z-20">
        <div className="w-full max-w-[500px] flex flex-col gap-4">
          {/* Back Navigation */}
          <Link
            href="/learning/auth/signin"
            className="flex items-center gap-2 text-earth-sage text-sm font-bold hover:text-earth-dark dark:hover:text-white group w-fit transition-colors"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Sign In
          </Link>

          {/* The Card */}
          <div className="bg-white dark:bg-[#15291b] shadow-xl rounded-xl p-8 md:p-12 border border-[#e7f3eb] dark:border-[#1a2e21]">
            {!sent ? (
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    key
                  </span>
                </div>

                {/* Text */}
                <h1 className="text-earth-dark dark:text-white tracking-tight text-3xl font-black text-center pb-2">
                  Forgot your password?
                </h1>
                <p className="text-earth-sage text-center pb-8 font-medium">
                  No worries, enter your email address and we&apos;ll send you
                  reset instructions.
                </p>

                {/* Form */}
                <form
                  className="w-full space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-earth-dark dark:text-white text-sm font-bold">
                      Email address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-earth-sage select-none">
                        mail
                      </span>
                      <input
                        className="w-full h-14 pl-12 pr-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-earth-dark dark:text-white placeholder-earth-sage/50"
                        placeholder="Enter your email"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full h-14 bg-primary text-earth-dark font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-[#0fd650] active:scale-[0.99] transition-all"
                    type="submit"
                  >
                    Send Reset Link
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center py-4">
                {/* Success State */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    check_circle
                  </span>
                </div>
                <h1 className="text-earth-dark dark:text-white tracking-tight text-3xl font-bold text-center pb-2">
                  Email sent!
                </h1>
                <p className="text-earth-sage text-center pb-8">
                  We&apos;ve sent a password recovery link to your email. Please
                  check your inbox.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="w-full h-14 border-2 border-primary text-earth-dark dark:text-white font-bold rounded-lg hover:bg-primary hover:border-primary transition-all"
                >
                  Try another email
                </button>
              </div>
            )}
          </div>

          {/* Security Tip Box */}
          <div className="flex items-start gap-3 bg-[#e7f3eb] dark:bg-[#1a2e21] p-4 rounded-xl border border-primary/20">
            <span className="material-symbols-outlined text-earth-sage shrink-0">
              shield_lock
            </span>
            <p className="text-xs text-earth-sage leading-relaxed">
              <strong className="text-earth-dark dark:text-white">
                Security Tip:
              </strong>{" "}
              Always use a unique password with at least 12 characters,
              including symbols and numbers.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-10 text-center border-t border-[#e7f3eb] dark:border-[#1a2e21] bg-white dark:bg-[#15291b]">
        <p className="text-earth-sage text-xs font-medium">
          © 2024 Good Market LMS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}