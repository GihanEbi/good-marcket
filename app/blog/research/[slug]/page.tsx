import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* 
        TITLE HEADER SECTION 
        bg-white in light mode, dark:bg-background-dark in dark mode 
      */}
      <section className="w-full bg-white dark:bg-background-dark border-b border-border-light dark:border-border-dark pt-12 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-text-green dark:text-text-green-light uppercase tracking-wider mb-8">
            <Link className="hover:text-primary" href="/">
              Hub
            </Link>
            <span className="material-symbols-outlined text-[10px]">
              chevron_right
            </span>
            <Link className="hover:text-primary" href="/blog">
              Research
            </Link>
            <span className="material-symbols-outlined text-[10px]">
              chevron_right
            </span>
            <span className="text-text-main dark:text-white">
              South Asia Analysis
            </span>
          </nav>

          {/* Title Content */}
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-sm font-bold">
                  verified
                </span>
                Peer-Reviewed
              </span>
              <span className="text-text-green dark:text-text-green-light text-sm">
                October 2023 • Report ID: GM-SA-2023-014
              </span>
            </div>
            <h1 className="font-serif text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Impact Assessment of Circular Supply Chains in South Asia
            </h1>
            <p className="text-xl text-text-green dark:text-text-green-light font-medium max-w-2xl leading-relaxed">
              A comprehensive study of regional logistics, resource recovery,
              and the socio-economic benefits of circularity transition.
            </p>
          </div>
        </div>
      </section>

      {/* 
        MAIN CONTENT GRID
        3 Columns on Desktop: Left Sidebar | Content | Right Sidebar
      */}
      <main className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDEBAR: Team & Nav */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                    Research Team
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-border-light dark:bg-border-dark flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">
                          person
                        </span>
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-text-main dark:text-white">
                          Dr. Amara Singh
                        </p>
                        <p className="text-[10px] text-text-green dark:text-text-green-light">
                          Lead Researcher
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-border-light dark:bg-border-dark flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">
                          person
                        </span>
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-text-main dark:text-white">
                          Chen Wei, PhD
                        </p>
                        <p className="text-[10px] text-text-green dark:text-text-green-light">
                          Systems Analyst
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-sm border-t border-border-light dark:border-border-dark pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    Publication
                  </p>
                  <p className="text-text-main dark:text-white font-medium">
                    October 14, 2023
                  </p>
                  <p className="text-text-green dark:text-text-green-light">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              {/* In-Page Navigation */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  Report Navigation
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-medium text-text-green dark:text-text-green-light border-l border-border-light dark:border-border-dark">
                  <li className="pl-4 border-l-2 border-primary text-primary font-bold">
                    <a href="#summary">Executive Summary</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                    <a className="flex-1" href="#methodology">
                      Methodology
                    </a>
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      open_in_new
                    </span>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#data">Data Visualizations</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#findings">Key Findings</a>
                  </li>
                  <li className="pl-4 hover:text-primary transition-colors">
                    <a href="#references">References</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* MIDDLE: Article Content */}
          <article className="flex-1 max-w-3xl space-y-16 min-w-0">
            <section
              className="prose prose-stone lg:prose-lg dark:prose-invert max-w-none prose-p:text-text-main/90 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-text-main dark:prose-headings:text-white"
              id="summary"
            >
              <h2 className="text-3xl font-serif font-bold mb-8">
                Executive Summary
              </h2>
              <p className="text-lg font-medium leading-relaxed mb-6">
                South Asia presents a unique opportunity for circular supply
                chain integration due to its high density of manufacturing hubs
                and established informal recycling networks. This report
                quantifies the environmental and economic shift required to
                formalize these systems.
              </p>
              <p>
                Our findings indicate that a transition to circularity in the
                textile and electronics sectors alone could reduce regional
                waste output by 34% by 2030. The following assessment details
                the mechanisms of waste reduction, carbon offset potentials, and
                the policy frameworks necessary to sustain this growth.
              </p>
            </section>

            {/* Charts Section */}
            <section className="space-y-12" id="data">
              {/* Bar Chart Card */}
              <div className="bg-white dark:bg-border-dark/30 p-8 border border-border-light dark:border-border-dark rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      bar_chart
                    </span>
                    <h3 className="font-bold text-lg text-text-main dark:text-white">
                      Waste Reduction by Sector (%)
                    </h3>
                  </div>
                  <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer">
                    <span className="material-symbols-outlined text-sm">
                      fullscreen
                    </span>
                    Expand
                  </button>
                </div>
                <div className="h-64 flex items-end gap-6 px-4">
                  {/* Bar 1 */}
                  <div className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full bg-primary/20 rounded-t-sm h-[45%] relative group cursor-help">
                      <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm transition-all duration-500"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main dark:bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        45%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-text-green dark:text-text-green-light">
                      Textiles
                    </span>
                  </div>
                  {/* Bar 2 */}
                  <div className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full bg-primary/20 rounded-t-sm h-[68%] relative group cursor-help">
                      <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm transition-all duration-500"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main dark:bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        68%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-text-green dark:text-text-green-light">
                      Electronics
                    </span>
                  </div>
                  {/* Bar 3 */}
                  <div className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full bg-primary/20 rounded-t-sm h-[32%] relative group cursor-help">
                      <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm transition-all duration-500"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main dark:bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        32%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-text-green dark:text-text-green-light">
                      Packaging
                    </span>
                  </div>
                  {/* Bar 4 */}
                  <div className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full bg-primary/20 rounded-t-sm h-[52%] relative group cursor-help">
                      <div className="absolute inset-x-0 bottom-0 bg-primary h-full rounded-t-sm transition-all duration-500"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main dark:bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        52%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-text-green dark:text-text-green-light">
                      Agriculture
                    </span>
                  </div>
                </div>
                <p className="text-xs text-text-green dark:text-text-green-light mt-8 text-center italic">
                  Projected annual waste reduction targets under GM-Circular
                  Framework (2024-2030).
                </p>
              </div>

              {/* Line Chart Card */}
              <div className="bg-white dark:bg-border-dark/30 p-8 border border-border-light dark:border-border-dark rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      show_chart
                    </span>
                    <h3 className="font-bold text-lg text-text-main dark:text-white">
                      Carbon Offset Forecast (MT CO2e)
                    </h3>
                  </div>
                </div>
                <div className="h-64 relative border-l border-b border-border-light dark:border-border-dark mx-4 flex items-center justify-center">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 400 200"
                  >
                    <path
                      d="M0 180 Q 50 170, 100 140 T 200 100 T 300 40 T 400 10"
                      fill="none"
                      stroke="#4c9a66"
                      strokeWidth="3"
                    ></path>
                    <circle cx="100" cy="140" fill="#4c9a66" r="4"></circle>
                    <circle cx="200" cy="100" fill="#4c9a66" r="4"></circle>
                    <circle cx="300" cy="40" fill="#4c9a66" r="4"></circle>
                  </svg>
                  <div className="absolute bottom-[-24px] flex justify-between w-full px-2 text-[10px] font-bold text-text-green dark:text-text-green-light">
                    <span>2024</span>
                    <span>2026</span>
                    <span>2028</span>
                    <span>2030</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Findings Section */}
            <section
              className="prose prose-stone lg:prose-lg dark:prose-invert max-w-none prose-p:text-text-main/90 dark:prose-p:text-gray-300 prose-headings:text-text-main dark:prose-headings:text-white"
              id="findings"
            >
              <h2 className="text-2xl font-serif font-bold">
                Primary Indicators
              </h2>
              <p>
                The research emphasizes three primary indicators for sustainable
                supply chain success in the region:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-text-main/80 dark:text-gray-300">
                <li>
                  <strong>Reverse Logistics Maturation:</strong> The
                  establishment of regional collection hubs.
                </li>
                <li>
                  <strong>Material Lifecycle Transparency:</strong> Digital
                  tagging and blockchain-based traceability.
                </li>
                <li>
                  <strong>Social Inclusion:</strong> Formalizing the role of
                  waste pickers into the green economy.
                </li>
              </ul>
            </section>

            {/* References Section */}
            <section
              className="pt-12 border-t border-border-light dark:border-border-dark"
              id="references"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                References & Citations
              </h3>
              <div className="space-y-4 text-xs text-text-green dark:text-text-green-light leading-relaxed font-medium">
                <p>
                  [1] World Bank (2023).{" "}
                  <em>Economic Potential of Circularity in Emerging Markets</em>
                  . South Asia Regional Brief.
                </p>
                <p>
                  [2] Gupta, R. & Singh, A. (2022). "Formalizing the Informal: A
                  Study of South Asian Recycling Networks."{" "}
                  <em>Journal of Circular Economy</em>, Vol 12(4).
                </p>
                <p>
                  [3] Good Market Knowledge Hub (2023).{" "}
                  <em>South Asia Regional Resource Recovery Dataset (v.2.1)</em>
                  .
                </p>
                <p>
                  [4] UNEP (2023).{" "}
                  <em>
                    Global Waste Management Outlook: Regional Perspectives
                  </em>
                  .
                </p>
              </div>
            </section>
          </article>

          {/* RIGHT SIDEBAR: Actions */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-3 w-full bg-text-main dark:bg-white dark:text-text-main text-white font-bold py-4 px-6 rounded-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-md group cursor-pointer">
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                    download
                  </span>
                  Download Full Report
                </button>
                <button className="flex items-center justify-center gap-3 w-full bg-white dark:bg-background-dark text-text-main dark:text-white border border-border-light dark:border-border-dark font-bold py-3 px-6 rounded-lg hover:border-primary transition-all text-sm cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-primary">
                    database
                  </span>
                  Download Raw Dataset
                </button>
              </div>

              {/* Citation Box */}
              <div className="bg-white dark:bg-border-dark/30 p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    format_quote
                  </span>
                  <h4 className="font-bold text-sm text-text-main dark:text-white uppercase tracking-tight">
                    Cite this Research
                  </h4>
                </div>
                <div className="bg-background-light dark:bg-border-dark p-3 rounded text-[11px] font-mono text-text-green dark:text-text-green-light mb-4 border border-border-light dark:border-border-dark">
                  Singh, A. et al (2023). "Impact Assessment of Circular Supply
                  Chains in South Asia." Good Market Knowledge Hub.
                </div>
                <button className="w-full bg-border-light dark:bg-border-dark text-text-main dark:text-white text-[11px] font-bold py-2 rounded border border-primary/10 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Copy APA Citation
                </button>
              </div>

              {/* Partners */}
              <div className="space-y-4 pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Institutional Partners
                </h4>
                <div className="grid grid-cols-2 gap-4 grayscale opacity-60">
                  <div className="h-12 bg-border-light dark:bg-border-dark rounded flex items-center justify-center text-[10px] font-black italic text-text-main dark:text-white">
                    SAREO
                  </div>
                  <div className="h-12 bg-border-light dark:bg-border-dark rounded flex items-center justify-center text-[10px] font-black italic text-text-main dark:text-white">
                    GREEN-ORG
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
