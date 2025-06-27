// app/page.tsx
import { ChatInterface } from "@/components/chat/ChatInterface";
import { MinimalHero } from "@/components/sections/Hero";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/20 via-transparent to-transparent dark:from-slate-700/20" />

          <main className="relative min-h-screen flex flex-col">
            <MinimalHero />
            <ChatInterface />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
