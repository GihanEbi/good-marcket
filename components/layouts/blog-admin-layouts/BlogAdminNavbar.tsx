"use client";
import ThemeToggle from "@/components/ThemeToggle";

interface BlogAdminHeaderProps {
  onMenuClick: () => void;
}

export default function BlogAdminHeader({ onMenuClick }: BlogAdminHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 md:py-6 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-border-light dark:border-border-dark">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-text-main dark:text-white hover:bg-border-light dark:hover:bg-border-dark rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {/* Search Bar (Hidden on small mobile) */}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-green text-xl">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-white dark:bg-border-dark border border-border-light dark:border-[#263d2e] rounded-lg text-sm w-48 lg:w-64 focus:ring-primary focus:border-primary dark:text-white"
            placeholder="Search content..."
            type="text"
          />
        </div>

        <ThemeToggle />

        {/* User Profile (Moved from Sidebar) */}
        <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-border-light dark:border-border-dark ml-1 md:ml-2">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-text-main dark:text-white">
              Admin Team
            </span>
            <span className="text-[10px] text-text-green">
              admin@goodmarket.org
            </span>
          </div>
          <div
            className="size-8 md:size-10 rounded-full bg-cover border-2 border-primary/20 shrink-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzANguBe4G0nAYHaKaWicaO_TtdVcxo2m5DPYrAmNcNZPhu5wRkn7eKX1xnUC4Dy47wE0ywUcgnwjkgfzk22pcxYDbGuZLK1TAyhQVeguYFyPGBTUIG2M404yWLtpUw9gp_YOgpMVR3QgLuKOTg924QXb_r0t-FPKFjSGF_qfc6QxY7utUwnp3TQI_3QgMTa8xLFI0AReXQNz_JKJSmyBvyI5CPi18LFs6v-HRqw1hf8i1ZaPVYfRZB74u0whVDgafTkNkzPl7w64")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
