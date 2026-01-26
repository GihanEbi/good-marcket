import BlogHeader from "@/components/layouts/blog-layouts/BlogHeader";
import BlogFooter from "@/components/layouts/blog-layouts/BlogFooter";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Main Wrapper with Theme Backgrounds
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden group/design-root bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-300">
      {/* Global Blog Header */}
      <BlogHeader />

      {/* Dynamic Content Area */}
      <div className="flex-1 flex flex-col layout-container">{children}</div>

      {/* Global Blog Footer */}
      <BlogFooter />
    </div>
  );
}
