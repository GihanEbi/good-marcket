"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin/blog-admin/dashboard", icon: "dashboard" },
  { name: "Articles", href: "/admin/blog-admin/articles", icon: "article" },
  { name: "Research", href: "/admin/blog-admin/research", icon: "science" },
  {
    name: "Toolkits",
    href: "/admin/blog-admin/toolkits",
    icon: "home_repair_service",
  },
  { name: "Users", href: "/admin/blog-admin/users", icon: "group" },
];

interface BlogAdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogAdminSidebar({
  isOpen,
  onClose,
}: BlogAdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#15291b] border-r border-border-light dark:border-border-dark flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border-light dark:border-border-dark flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <div className="size-8 shrink-0">
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
            <span className="text-text-main dark:text-white text-lg font-extrabold tracking-tight">
              Good Market
            </span>
          </Link>
          {/* Close button for Mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-text-green hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose} // Close sidebar on click (mobile UX)
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary/10 text-text-main dark:text-white font-bold"
                    : "text-text-green dark:text-text-green-light hover:bg-border-light dark:hover:bg-border-dark"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer (Logout Button) */}
        <div className="p-4 border-t border-border-light dark:border-border-dark">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-green dark:text-text-green-light hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-red-600 dark:group-hover:text-red-400">
              logout
            </span>
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
