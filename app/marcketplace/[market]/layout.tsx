import MarketplaceFooter from "@/components/layouts/marcketplace-layouts/MarketplaceFooter";
import MarketplaceHeader from "@/components/layouts/marcketplace-layouts/MarketplaceHeader";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Main Wrapper with Theme Backgrounds
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden group/design-root bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-300">
      {/* Global Blog Header */}
      <MarketplaceHeader />

      {/* Dynamic Content Area */}
      <div className="flex-1 flex flex-col layout-container">{children}</div>

      {/* Global Blog Footer */}
      <MarketplaceFooter />
    </div>
  );
}
