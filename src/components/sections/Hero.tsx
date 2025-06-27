// components/sections/MinimalHero.tsx
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme/themeToggle";
import { Sparkles } from "lucide-react";

export function MinimalHero() {
  return (
    <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with theme toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <div className="text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700 transition-colors"
          >
            <Sparkles className="w-3 h-3 mr-2" />
            AI Assistant
          </Badge>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight transition-colors">
            Chat with AI
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-colors">
            Ask questions, get instant answers, and have intelligent
            conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
