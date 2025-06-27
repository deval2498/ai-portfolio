// components/layout/Header.tsx
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-6 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 transition-colors"
        >
          <Sparkles className="w-3 h-3 mr-2" />
          AI Assistant
        </Badge>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Chat with AI
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Ask questions, get instant answers, and have intelligent
          conversations.
        </p>
      </div>
    </header>
  );
}
