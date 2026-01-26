import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="flex flex-col items-center">
      {/* 
        HERO SECTION 
        Updated: Contained width (max-w-[1280px]) and Rounded Corners (rounded-xl)
        to match the "scale" of the Blog Home page.
      */}
      <section className="w-full max-w-[1280px] px-6 md:px-10 py-8">
        <div className="relative w-full h-[50vh] min-h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-background-dark/40 z-10"></div>

          {/* Background Image */}
          <img
            alt="Regenerative agriculture field"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg"
          />

          {/* Text Content */}
          <div className="relative z-20 w-full flex flex-col items-center text-center p-6">
            <span className="bg-primary/90 text-text-main text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-6 backdrop-blur-md">
              Feature Article
            </span>
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl drop-shadow-md">
              The Future of Regenerative Agriculture
            </h1>
          </div>
        </div>
      </section>

      {/* 
        MAIN CONTENT CONTAINER 
        Constrained width: max-w-[1280px]
      */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 pb-16">
        {/* 
          Grid Layout:
          Mobile: Stacked Column
          Desktop (lg): Flex Row (Left Sidebar + Article + Right Sidebar)
        */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* LEFT SIDEBAR: Author & Table of Contents */}
          <aside className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-12">
              {/* Author Info */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  Written By
                </h4>
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-full bg-cover bg-center border border-primary/20"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzANguBe4G0nAYHaKaWicaO_TtdVcxo2m5DPYrAmNcNZPhu5wRkn7eKX1xnUC4Dy47wE0ywUcgnwjkgfzk22pcxYDbGuZLK1TAyhQVeguYFyPGBTUIG2M404yWLtpUw9gp_YOgpMVR3QgLuKOTg924QXb_r0t-FPKFjSGF_qfc6QxY7utUwnp3TQI_3QgMTa8xLFI0AReXQNz_JKJSmyBvyI5CPi18LFs6v-HRqw1hf8i1ZaPVYfRZB74u0whVDgafTkNkzPl7w64")',
                    }}
                  ></div>
                  <div>
                    <p className="font-bold text-text-main dark:text-white">
                      Dr. Helena Rivers
                    </p>
                    <p className="text-xs text-text-green dark:text-text-green-light">
                      Soil Science Lead
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-text-green dark:text-text-green-light text-sm">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>Reading Time: 12 min</span>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  Table of Contents
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-medium text-text-green dark:text-text-green-light border-l border-border-light dark:border-border-dark">
                  <li className="pl-4 border-l-2 border-primary text-primary">
                    <a href="#introduction">Introduction</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#carbon-sequestration">Carbon Sequestration</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#soil-health">The Foundation: Soil</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#economic-impact">Economic Impact</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#global-outlook">Global Outlook</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <article className="flex-1 max-w-none lg:max-w-3xl min-w-0 order-1 lg:order-2">
            <div className="prose prose-stone lg:prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-text-main dark:prose-headings:text-white prose-p:text-text-main/90 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <p
                className="text-xl leading-relaxed font-medium mb-8"
                id="introduction"
              >
                As we stand at the intersection of climate resilience and food
                security, regenerative agriculture offers a profound shift from
                extracting value to restoring biological potential.
              </p>

              <h2
                className="text-3xl font-serif font-bold mt-12 mb-6"
                id="carbon-sequestration"
              >
                Unlocking Carbon Potential
              </h2>
              <p>
                Modern farming techniques have often led to significant carbon
                loss in our topsoil. Regenerative practices, however, transform
                fields into vast carbon sinks. Through no-till farming, cover
                cropping, and diverse crop rotations, we can sequester gigatons
                of carbon annually while improving water retention and soil
                structure.
              </p>

              <blockquote className="my-12 py-8 border-y-2 border-border-light dark:border-border-dark relative px-6 md:px-12 italic text-2xl font-serif text-primary text-center">
                <span className="absolute top-4 left-4 text-6xl text-border-light dark:text-border-dark font-serif select-none opacity-50">
                  “
                </span>
                The soil is not just a medium for growth, but a living ecosystem
                that holds the key to our planet's thermal regulation.
                <span className="absolute bottom-4 right-4 text-6xl text-border-light dark:text-border-dark font-serif select-none opacity-50">
                  ”
                </span>
              </blockquote>

              <p>
                Beyond the climate benefits, the nutrient density of food grown
                in regenerative systems far exceeds that of industrial
                counterparts. The symbiosis between mycorrhizal fungi and plant
                roots facilitates complex nutrient transfers that are often
                bypassed in synthetic systems.
              </p>

              {/* Data Visualization Card */}
              <div className="my-12 p-8 bg-white dark:bg-border-dark/30 border border-border-light dark:border-border-dark rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">
                    query_stats
                  </span>
                  <h4 className="font-bold text-lg text-text-main dark:text-white">
                    Soil Carbon Sequestration Cycle
                  </h4>
                </div>
                <div className="aspect-video bg-border-light dark:bg-background-dark/50 rounded-xl overflow-hidden relative">
                  <img
                    alt="Background pattern"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA54dnpxe8TYkunodDUP27zjt39N6gyAiIoAEIMARqvzEo-6GJs7CfB-pdtd9MCv17kEGWOOZoIqkwRhxne_--3raovPY1kmCnkkxRyeipmsuMOO9PW9pU6Vkd7MNY418c-5mvY9kdVO5TyJqHb_1YnWYTh3qQdAmrzB6kwdgX4DidvamQp89SkX7r3nhpDqm4KjDgAlpL_m22m4dKYf_X8k3LRKgbqIx5DkQTc74H8Z8S126TyIPXc-rodr_HU1r9CCpPdWPaMIn8"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                      <div className="p-4 bg-white/80 dark:bg-background-dark/80 rounded-lg">
                        <div className="text-primary font-black text-2xl">
                          40%
                        </div>
                        <div className="text-[10px] font-bold uppercase text-text-green dark:text-text-green-light">
                          Water Retention
                        </div>
                      </div>
                      <div className="p-4 bg-white/80 dark:bg-background-dark/80 rounded-lg">
                        <div className="text-primary font-black text-2xl">
                          2.5t
                        </div>
                        <div className="text-[10px] font-bold uppercase text-text-green dark:text-text-green-light">
                          CO2/Hectare
                        </div>
                      </div>
                      <div className="p-4 bg-white/80 dark:bg-background-dark/80 rounded-lg">
                        <div className="text-primary font-black text-2xl">
                          3x
                        </div>
                        <div className="text-[10px] font-bold uppercase text-text-green dark:text-text-green-light">
                          Biodiversity
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-text-green dark:text-text-green-light mt-4 text-center italic">
                  Figure 1.2: Annualized gains in ecosystem services.
                </p>
              </div>

              <h2
                className="text-3xl font-serif font-bold mt-12 mb-6"
                id="soil-health"
              >
                The Living Foundation
              </h2>
              <p>
                Biodiversity is not just an outcome of regenerative agriculture;
                it is the driver. By reintroducing livestock and managing their
                movement, we mimic the natural rhythms of large ruminant herds
                that once maintained grasslands. This "holistic grazing"
                stimulates plant growth and cycles nutrients back into the earth
                efficiently.
              </p>
            </div>
          </article>

          {/* RIGHT SIDEBAR: Actions & Related */}
          <aside className="w-full lg:w-72 flex-shrink-0 order-3">
            <div className="lg:sticky lg:top-32 space-y-10">
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 w-full bg-primary text-text-main font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    download_for_offline
                  </span>
                  Download PDF
                </button>
                <button className="flex items-center justify-center gap-2 w-full bg-white dark:bg-background-dark text-text-main dark:text-white border border-border-light dark:border-border-dark font-bold py-3 px-6 rounded-lg hover:border-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    share
                  </span>
                  Share Article
                </button>
              </div>

              {/* Related Resources */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  Related Resources
                </h4>
                <div className="space-y-6">
                  <a className="group flex flex-col gap-2" href="#">
                    <div
                      className="aspect-video w-full rounded-lg bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqSWDQKWy86cnTfjxKzAdTOdn39qv7auqpJtsrk2qvF8LCMGorhQjHM_l_tQ3wCZ_sKmrSyW0yyFOgwOgsvxtIknu4C8udsZpoXDYzvz9lzioTDFg1QJNcNf5Km5b3W0apqgvsxy8oMGdWr3ZlI274a-PExxiqOOncUeDClzDzVijKBEb-P6YQ6bi5NUZTyFLfnMN_AyYNrNRJAb4L7pY6TEfqNdPcntBLxEtmRgW9Ra1I22_RqBYg9eQUhKD3MzA2-XX10yfPziI")',
                      }}
                    ></div>
                    <h5 className="font-bold text-sm leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                      Circular Supply Chains in Rural Hubs
                    </h5>
                    <span className="text-[10px] font-bold text-text-green dark:text-text-green-light uppercase">
                      Policy Brief • 8 min
                    </span>
                  </a>
                  <a className="group flex flex-col gap-2" href="#">
                    <div
                      className="aspect-video w-full rounded-lg bg-cover bg-center overflow-hidden"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3VMGcNI4PhS2Oj67oo6aNqqdF6QQlz5cgeXATGz19Nd85vyuj9mr9p5JmYEALu9Uh33mSJUHA1iJ3wYs8a5n1xsQL4lA57Hc7Tym_AzS_Zr1b7O6asvayDB0FtdaiIZ2-kjD3WeWiLd0cOMybFvIjrGMN4LfAUGXLdD8ToRuqRdUuA2F4eJLIBU5y6Jgt7CDa_cxgj9CsZVuiseEPhBacXixJyaKjUFaGMx9VZ4kMmpmzYZCnF08LLeK5FzGFG3VHX9hZF5_-Sos")',
                      }}
                    ></div>
                    <h5 className="font-bold text-sm leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">
                      Sustainable Design Toolkit 2.0
                    </h5>
                    <span className="text-[10px] font-bold text-text-green dark:text-text-green-light uppercase">
                      Interactive Tool • 15 min
                    </span>
                  </a>
                </div>
              </div>

              {/* Newsletter Small */}
              <div className="bg-border-light dark:bg-border-dark p-6 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-text-main dark:text-white mb-2">
                  Stay Updated
                </h4>
                <p className="text-xs text-text-green dark:text-text-green-light mb-4">
                  Get the latest research on circular economies delivered to
                  your inbox.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    className="text-xs py-2 px-3 rounded border-none focus:ring-1 focus:ring-primary dark:bg-background-dark dark:text-white"
                    placeholder="email@example.com"
                    type="email"
                  />
                  <button className="bg-text-main dark:bg-white dark:text-text-main text-white text-xs font-bold py-2 rounded cursor-pointer hover:opacity-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
