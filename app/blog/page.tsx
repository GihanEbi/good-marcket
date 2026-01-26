import Link from "next/link";

export default function BlogHome() {
  return (
    <main className="flex-1 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-6 md:px-10 py-8">
        <div className="@container">
          <div
            className="flex min-h-[440px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(13, 27, 18, 0.6) 0%, rgba(13, 27, 18, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT00lC_4wFqIyW9qriDzMg4J-XCrg86LP1it3aHpwJ10siqniM4iTlahXuCTW1SbEkTg3a0s9JjvOpfkhq4-OFVFEynOlQZdcTG97wIpXGTXvy3DSS89K8TvESFGjWpDNadpWLtROwaCDEMLq8OM7pzot79Bu6VeCiqvjS1HtV4EvvUOdbldcJH9Xrmxlz8nF4P13AanItrD5V17HBdHNIQ4mp23nUQKxxLI4_aei7HoN2AS6Z9vDp0LJisS21AuKQZ3ZRyiE7fBM")',
            }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Good for People. <br />
                <span className="text-primary">Good for the Planet.</span>
              </h1>
              <p className="text-white/90 text-base md:text-lg font-normal max-w-xl mx-auto">
                Access our open-source library of circular economy research,
                practical toolkits, and global policy insights.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-main text-base font-bold transition-transform hover:scale-105">
                Start Learning
              </button>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all">
                View Repository
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full max-w-[1280px] px-6 md:px-10">
        <div className="flex items-center gap-3 py-4 flex-wrap overflow-x-auto no-scrollbar">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-6 cursor-pointer">
            <p className="text-text-main text-sm font-bold">All Content</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-border-light dark:bg-border-dark px-6 cursor-pointer hover:bg-primary/20 transition-colors">
            <p className="text-text-main dark:text-white text-sm font-medium">
              Circular Economy
            </p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-border-light dark:bg-border-dark px-6 cursor-pointer hover:bg-primary/20 transition-colors">
            <p className="text-text-main dark:text-white text-sm font-medium">
              Policy
            </p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-border-light dark:bg-border-dark px-6 cursor-pointer hover:bg-primary/20 transition-colors">
            <p className="text-text-main dark:text-white text-sm font-medium">
              Toolkits
            </p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-border-light dark:bg-border-dark px-6 cursor-pointer hover:bg-primary/20 transition-colors">
            <p className="text-text-main dark:text-white text-sm font-medium">
              Community Stories
            </p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-border-light dark:bg-border-dark px-6 cursor-pointer hover:bg-primary/20 transition-colors">
            <p className="text-text-main dark:text-white text-sm font-medium">
              Research Papers
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full max-w-[1280px] px-6 md:px-10 mt-6">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-text-main dark:text-white text-2xl font-bold leading-tight tracking-tight">
            Featured Articles
          </h2>
          <a
            className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
            href="#"
          >
            View all{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
          {/* Card 1 - LINKED TO ARTICLE PAGE */}
          <Link
            href="/blog/article/future-of-regenerative-agriculture"
            className="flex min-w-[320px] md:min-w-[380px] flex-col gap-4 rounded-xl bg-white dark:bg-border-dark shadow-sm border border-border-light dark:border-[#263d2e] overflow-hidden group cursor-pointer"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform group-hover:scale-105 duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg")',
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Agriculture
                </span>
                <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  The Future of Regenerative Agriculture
                </h3>
                <p className="text-text-green dark:text-text-green-light text-sm line-clamp-2">
                  Deep dive into soil health, carbon sequestration, and
                  biodiversity in modern farming.
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-border-light dark:bg-[#263d2e] text-text-main dark:text-white text-sm font-bold hover:bg-primary transition-colors">
                Read More
              </button>
            </div>
          </Link>

          {/* Card 2 */}
          <div className="flex min-w-[320px] md:min-w-[380px] flex-col gap-4 rounded-xl bg-white dark:bg-border-dark shadow-sm border border-border-light dark:border-[#263d2e] overflow-hidden group">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform group-hover:scale-105 duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqSWDQKWy86cnTfjxKzAdTOdn39qv7auqpJtsrk2qvF8LCMGorhQjHM_l_tQ3wCZ_sKmrSyW0yyFOgwOgsvxtIknu4C8udsZpoXDYzvz9lzioTDFg1QJNcNf5Km5b3W0apqgvsxy8oMGdWr3ZlI274a-PExxiqOOncUeDClzDzVijKBEb-P6YQ6bi5NUZTyFLfnMN_AyYNrNRJAb4L7pY6TEfqNdPcntBLxEtmRgW9Ra1I22_RqBYg9eQUhKD3MzA2-XX10yfPziI")',
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Policy
                </span>
                <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                  Circular Policy Frameworks 2024
                </h3>
                <p className="text-text-green dark:text-text-green-light text-sm line-clamp-2">
                  An analysis of global policy trends shaping the transition to
                  a waste-free economy.
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-border-light dark:bg-[#263d2e] text-text-main dark:text-white text-sm font-bold hover:bg-primary transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex min-w-[320px] md:min-w-[380px] flex-col gap-4 rounded-xl bg-white dark:bg-border-dark shadow-sm border border-border-light dark:border-[#263d2e] overflow-hidden group">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform group-hover:scale-105 duration-500"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3VMGcNI4PhS2Oj67oo6aNqqdF6QQlz5cgeXATGz19Nd85vyuj9mr9p5JmYEALu9Uh33mSJUHA1iJ3wYs8a5n1xsQL4lA57Hc7Tym_AzS_Zr1b7O6asvayDB0FtdaiIZ2-kjD3WeWiLd0cOMybFvIjrGMN4LfAUGXLdD8ToRuqRdUuA2F4eJLIBU5y6Jgt7CDa_cxgj9CsZVuiseEPhBacXixJyaKjUFaGMx9VZ4kMmpmzYZCnF08LLeK5FzGFG3VHX9hZF5_-Sos")',
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  Resources
                </span>
                <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                  Sustainable Design Toolkits
                </h3>
                <p className="text-text-green dark:text-text-green-light text-sm line-clamp-2">
                  Practical implementation guides for circular product design
                  and materials selection.
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-border-light dark:bg-[#263d2e] text-text-main dark:text-white text-sm font-bold hover:bg-primary transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Research Grid */}
      <section className="w-full max-w-[1280px] px-6 md:px-10 py-12">
        <div className="flex items-center justify-between pb-8">
          <div>
            <h2 className="text-text-main dark:text-white text-2xl font-bold leading-tight tracking-tight">
              Latest Research
            </h2>
            <p className="text-text-green dark:text-text-green-light text-sm mt-1">
              Recently published insights from our global community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Grid Item 1 */}
          <Link
            href="/blog/research/Decentralized-Waste-Management">
            <div className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden mb-4 bg-border-light dark:bg-border-dark">
                <div
                  className="w-full aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA54dnpxe8TYkunodDUP27zjt39N6gyAiIoAEIMARqvzEo-6GJs7CfB-pdtd9MCv17kEGWOOZoIqkwRhxne_--3raovPY1kmCnkkxRyeipmsuMOO9PW9pU6Vkd7MNY418c-5mvY9kdVO5TyJqHb_1YnWYTh3qQdAmrzB6kwdgX4DidvamQp89SkX7r3nhpDqm4KjDgAlpL_m22m4dKYf_X8k3LRKgbqIx5DkQTc74H8Z8S126TyIPXc-rodr_HU1r9CCpPdWPaMIn8")',
                  }}
                ></div>
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 px-2 py-1 rounded text-[10px] font-bold uppercase text-text-main dark:text-white">
                  New
                </div>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-text-green dark:text-text-green-light font-medium mb-2">
                <span>Oct 24, 2023</span>
                <span className="size-1 rounded-full bg-primary"></span>
                <span>8 min read</span>
              </div>
              <h4 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                Decentralized Waste Management: A Case Study
              </h4>
              <p className="mt-2 text-sm text-text-green dark:text-text-green-light line-clamp-3">
                How local communities in South East Asia are reclaiming plastic
                waste through distributed micro-grids.
              </p>
            </div>
          </Link>
          {/* Grid Item 2 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 bg-border-light dark:bg-border-dark">
              <div
                className="w-full aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpPbpwMdKMINLqSQz-uHlm7ZdybQfywPX3iaAchaKZ9KY-LdCHQsfHjv2p82GB2R7tgYzWjW1_gjYSDHDwXjUjLNfPUt15sQ_H_n-gjZ_MHG4HDsSbacuWjHi-6ryyuW6Bq_ljNLcxuUiRGMQ6pXXHruAy3nFX69UOFZGppjP9rc9b8wNM6u4C9rmluedL9LwgrON5WCEmhKjUe4xOMBnYGCGtlSB5gqbyZhPWJYpEq4wVckM-WQ_YMCX3lEQ7etaYBaLBTMcLku0")',
                }}
              ></div>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-text-green dark:text-text-green-light font-medium mb-2">
              <span>Oct 20, 2023</span>
              <span className="size-1 rounded-full bg-primary"></span>
              <span>15 min read</span>
            </div>
            <h4 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
              Mapping Supply Chain Transparency
            </h4>
            <p className="mt-2 text-sm text-text-green dark:text-text-green-light line-clamp-3">
              Leveraging open data to visualize environmental impact across
              multi-tier manufacturing networks.
            </p>
          </div>
          {/* Grid Item 3 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-4 bg-border-light dark:bg-border-dark">
              <div
                className="w-full aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB255niSqcQLrxN1Ic92PQ7Whu7KxNXaNDuXq7wnoOZrCjtub2caMYu8UdpGoiANBnTNFyZ89bK41lYrazunywSs6NYjn4vPRnWAeESSbRVqiH1vvqkf5gYY4bFMTDljiZdfTMMXkGiVzCyayRYTZM_e-alIS9DU8G7kn0x183g36IqV0V-DlTNiLAOX1PGJpHpJL7jiMv86KKUEihp5Np2zAqhZMttebwshI6-iqwfQ2TtRG3dQpYd-PlysNiJco4s_5ZH8Ul7BNA")',
                }}
              ></div>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-text-green dark:text-text-green-light font-medium mb-2">
              <span>Oct 15, 2023</span>
              <span className="size-1 rounded-full bg-primary"></span>
              <span>5 min read</span>
            </div>
            <h4 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
              The Social Equity of Circular Systems
            </h4>
            <p className="mt-2 text-sm text-text-green dark:text-text-green-light line-clamp-3">
              Ensuring that the transition to circular economy principles
              doesn't leave vulnerable communities behind.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 border border-primary text-text-main dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors">
            Load More Resources
          </button>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="w-full bg-border-light dark:bg-text-main py-16 px-6 md:px-10 mt-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-6">
            eco
          </span>
          <h2 className="text-3xl font-extrabold text-text-main dark:text-white mb-4">
            Contribute to the Knowledge Hub
          </h2>
          <p className="text-text-green dark:text-text-green-light text-lg mb-8 max-w-2xl">
            Our repository grows through community contributions. Share your
            research, case studies, or toolkits to help build a more sustainable
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:bg-border-dark dark:text-white"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary text-text-main px-8 py-3 rounded-lg font-bold hover:opacity-90 cursor-pointer">
              Join the Newsletter
            </button>
          </div>
          <p className="text-xs text-text-green/60 mt-4">
            By subscribing, you agree to our privacy policy and community
            guidelines.
          </p>
        </div>
      </section>
    </main>
  );
}
