"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main className="flex-1">
        {/* --- Impact Stats Ticker --- */}
        <div className="bg-primary/10 dark:bg-primary/5 py-2 px-6 lg:px-20 border-b border-primary/20">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 text-xs lg:text-sm font-bold uppercase tracking-widest text-[#078829] dark:text-primary">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">eco</span>
              <span>12.5k Tons Carbon Saved</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                recycling
              </span>
              <span>8.2k Tons Waste Diverted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                handshake
              </span>
              <span>450+ Fair Trade Partners</span>
            </div>
          </div>
        </div>

        {/* --- Hero Section --- */}
        <section className="px-6 lg:px-20 py-12 bg-white dark:bg-background-dark transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-8">
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 text-[#078829] dark:text-primary text-xs font-bold uppercase tracking-wider w-fit">
                  Ethical & Sustainable
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter text-[#0d1b12] dark:text-white">
                  Better for you,
                  <br />
                  <span className="text-primary">better for Earth.</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  Discover products that are verified organic, fair trade, and
                  zero-waste. Join the circular economy today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-primary text-[#0d1b12] rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
                    Shop Collection
                  </button>
                  <button className="px-8 py-4 bg-border-light dark:bg-border-dark text-[#0d1b12] dark:text-white rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">
                    Our Mission
                  </button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCVWea3X5u0Ytn5vHJui5oKnRTijVA8s4bbMJsCAG7U0lZ7ag3uGmvwAzyWFQbSEreX0uC_TdJM15H-vCDgzhOipSwLsqE2PrwGPSqleMfNsqMaKCF6aAyr3M0jNQmmexzbmBxeK0SPFif-pY-xyiPzM399VHwRjKSWGlSARje2FmJc99q4pQlhD-HZ9c-OnYBNy6fHSi2_CFtKO8qMh6OljrDEmHvt7voNmsG56J2MnHczhkKjLcWj51YU0GU7WbvWr6-YjFm3ic"
                    alt="Sustainable bamboo products"
                  />
                  <div className="absolute bottom-6 left-6 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-3 rounded-xl border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                      Featured Product
                    </p>
                    <p className="text-sm font-bold text-[#0d1b12] dark:text-white">
                      Bamboo Home Essentials Set
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Trending Now Grid --- */}
        <section className="px-6 lg:px-20 py-20 bg-[#f8fcf9] dark:bg-[#0c1a10] transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-2 text-[#0d1b12] dark:text-white">
                  Trending Now
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The most loved ethical picks this week
                </p>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View All{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Cards */}
              {[
                {
                  title: "Organic Cotton Tote",
                  price: "$24.00",
                  tag: "Fair Trade",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7xrHHTkHJ57encq3--46DvGSN5iVkUIim_s7wq7IPqvjG0ZaIAwJvxG6_pEJXDBdzYsh1l-uEz78YRsR-ZK1abgsagloYH7B9u3DqeyiwS8cnPIG8Giy2IKnmV1joNOooWUYRJ4KmaSsEMTVzpZ2kXH6OsJWq1FfSx72BrUxD3cF72J1tRBjM_iS8QbqZraKRDZwBNc1nquym8IUFrrN0TnymhPwHHN29asak3K7hW-fjT2475387WMOOFRMh7CJ2Nsmy-4CLxMQ",
                  rating: 48,
                },
                {
                  title: "Recycled Glass Vase",
                  price: "$58.00",
                  tag: "Zero Waste",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWSOY71U5UB-3o6yPuPV4LRjErfHAmlMu7-lScUk0-RRB7XJt1rJEZvSrapcFAbQbsHnKbkZg0zAce1hwHmGV0gFxbHWDugk0G2PArc2xacokfKCHYmkFbPU_f4t-537F9fdFGW12QBnIBM4phCFyXJNXixiLm9OSSrqZrl7PqDlGn5GB6VFV3gbVCRnAIgEO5b8pdjPwHG_6gU3dxPqi03eSmF5TY9JN2NOG_KzkBHj_9NA5UbOtmSjVCWN1onEU_RvKkiBqGwA0",
                  rating: 124,
                },
                {
                  title: "Natural Face Oil",
                  price: "$32.00",
                  tag: "Verified Organic",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFis7Vx_dx839u8mvNvBubkSZjEEZVmdHOP_2qUqZlvVmSnBJDkyQuzgnOGHFxLIq2b5DNTAgmnS9892u4TZu7mHIxUSqFw4xtRN87_QqonsZ1JcDQ3eU2HFjxgAA7CYYlceN0hvIfBYihMT7WCSUWPJZC0jdv6EaGSaVeosA4gXpRgboszQPE8FjHwrFLfjCcuoyZeJtOrcZprIqexpFaS3rBr0_SU81IanSYW3iEcr7NZ9SeEPnuzMQVxTikJ4nLYix_F-eY_Jo",
                  rating: 89,
                },
                {
                  title: "Bamboo Kitchen Set",
                  price: "$45.00",
                  tag: "Biodegradable",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW59tz0PlkhySQwObgGa5c5Do6Qedxk_6Tx-NGWdpE2h9HkNF5hohfj1AGF9viPDdt1tk2UvxNBWnH1UJG1YC6vBafOgQJxTKRvtCKLgVMZDigCvWr57ypIOGPCxSrBCyKYmJZWFvwHt8FcyNyJPxbdF_3MWR6Qaf23OZzHsc-WzvSF1NyMKB72-TmYVQQu2EXKeOk-aKYZe6GkeCcPooQKUSOIt_jv-B7nptLZQkYCs4NxKD0TgGVmVCAbzdq_fIsAnj8-Y0YrA8",
                  rating: 210,
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-border-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    onClick={() => {
                      router.push("/marcketplace/ProductContent");
                    }}
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.img}
                      alt={product.title}
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-primary text-[#0d1b12] text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-[#0d1b12] dark:text-white">
                        {product.title}
                      </h3>
                      <span className="text-primary font-black">
                        {product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                      <span className="text-gray-400 text-xs ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <button
                      className="w-full py-3 bg-border-light dark:bg-background-dark text-[#0d1b12] dark:text-white rounded-lg font-bold hover:bg-primary hover:text-white transition-colors"
                      onClick={() => {
                        router.push("/marcketplace/cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Circular Economy Spotlight --- */}
        <section className="px-6 lg:px-20 py-24 bg-background-dark text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">
                  Circular Living
                </span>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                  Our Zero-Waste
                  <br />
                  Packaging Commitment
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  We've redesigned our entire fulfillment process. Every order
                  from Good Market arrives in 100% compostable or infinitely
                  recyclable packaging. No plastic, no waste, just good
                  products.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">compost</span>
                    </div>
                    <div>
                      <p className="font-bold">Compostable</p>
                      <p className="text-sm text-gray-500">
                        Mushroom-based inserts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">
                        restart_alt
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">Refillable</p>
                      <p className="text-sm text-gray-500">
                        Subscription refills
                      </p>
                    </div>
                  </div>
                </div>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-[#0d1b12] px-8 py-3 rounded-lg font-bold transition-all">
                  Learn About Circularity
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="rounded-xl aspect-square object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7wXjs1AO2mr0ri6hpyeArwwAojoBXhaElj3UBvxJdAAWv8c4Gsg2sPG-5ozNBTXLwRFOSaGX2IJY2JH8OBU8qNcgXKSJVqHX1aWjDuMRctw-pwL7CFsFLwRDrDbaKT7RDJxPk8UV0ZwAfr87pO9SSwuTC9NtcM9aWlWaDRUQf-O_sDziiAPhm9PwbXWxIk2ZylIx2RD2Mb0vOjA3GyUPqRpsNTLBpFS3FBzWZ17xplbttPjS8rtJvo02fT4b_r9V5NkowG91QfdQ"
                  alt="Eco-friendly packaging"
                />
                <img
                  className="rounded-xl aspect-square object-cover mt-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuROjeMAYzChKFJST-vxOF4b4yhiXS_0Dtq_1zGfZY-Ln2ZwZL_zQZGPOQS5RMU09tbcH5hao-oXhpj6jitft5aEEbgPALu6MhHSqpCOQUt3Z5stXsJEeVqyHoNltS8J7Cg3S21ivDE4QMdhLrMfouB6o6VKplqdntt-M9u_V59Ky3COX6jEsFkJbLQkDy5MeVTKJhIT82kF-3eWcKh65TIOs6bHM7S5P7ncvf2hRb_csUAlDu9JEy7_InwpZ4YiMT7jILGFFwKLc"
                  alt="Recycling process"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Meet the Producers --- */}
        <section className="px-6 lg:px-20 py-20 bg-white dark:bg-background-dark transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-[#0d1b12] dark:text-white">
              Meet the Producers
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We partner with artisans and farmers who share our vision for a
              better world. Every product has a face and a story behind it.
            </p>
          </div>
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Elena Costa",
                role: "Sustainable Fashion",
                quote:
                  "Our linen is grown using 80% less water than traditional cotton.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwB4jetBmdZlNiEhU0iOKzbqW3LftgjcmiZC7fHv3d5A28zZkMk0ZoXhWvKyJR6JFgs4vTJ-KSJhoO0c6a_pTNLgjGHpBJ5GMkQHOLdwHe5M5OjUpIZp2g4K-jgBWy4xPcMwBFGQUn0r74UE2fzcdQehkZI50pY2W9XsNa8PJOjlFZBIA25ihxtj8lbevSKhC748bPF-KSLeR-McxmSnWw2lVDd7RG07svSZPtEeNQ1EzMb-u6HASXOxnPgEZ0WVDe6L5cxRUunkA",
              },
              {
                name: "Marcus Thorne",
                role: "Regenerative Farming",
                quote:
                  "Soil health is human health. We treat our farm as a complete ecosystem.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH2jm1Sx_8l8eVIseB5Qpv3tSn5WMUstFa-x7e-tU2oPpNGolvRwUNxEGnUELjRZV44Lk2XbFggJr4XklSW9vbzM5bhxr849uAcqVsFbMRKki7UNKSyqy-JGUQ14ICeD3wC5N1Kp6bdfgxpGYN1ifJty3ksbWBwHC33SHdhpemC6pb84EjoPrFBA7kDF7lIIIVhmfy47IaBZLRqW5TYAUKKADPDnuEDUaWUXzemIa3GHYbTNmQDVW-opm1A2nJT2EnN1PRdtR392g",
              },
              {
                name: "Dr. Sarah Li",
                role: "Wellness Innovation",
                quote: "Nature provides the most powerful active ingredients.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe89ruWCP6IMLE_i_ysr568PDwHibstEfjSGTvv00e8BSiHLSKDMc7vl9MoZl-PjU7PUpBf_3gN58ivqWIPQsAB2x0SpKMuzWYvequqCvYxkyBbR5MNZVUGykZG7iG4XYsFHCoCPgBNSi6U4u_YoSwSpIomjJ_PJYamNVw9M9O5RJH4SlpLP2rPAhWIUDnWOiSyorBOWIc8ycvYfPzZ7m3WAPXa58ZqM-GXEjqkCdck4PZZByA7UzPrxTqMR8lnUjpedg0En07_5o",
              },
            ].map((producer, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-border-dark hover:shadow-lg transition-all group"
              >
                <div className="size-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 group-hover:border-primary transition-all">
                  <img
                    className="w-full h-full object-cover"
                    src={producer.img}
                    alt={producer.name}
                  />
                </div>
                <h4 className="text-xl font-bold mb-1 text-[#0d1b12] dark:text-white">
                  {producer.name}
                </h4>
                <p className="text-primary text-sm font-bold uppercase mb-4">
                  {producer.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "{producer.quote}"
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
