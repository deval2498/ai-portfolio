// app/page.tsx
"use client";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { MinimalHero } from "@/components/sections/Hero";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { useState } from "react";

export default function HomePage() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-neutral-900 transition-colors duration-300 relative overflow-hidden">
        {/* Glow 1 – vivid purple top-left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_#a855f7_0%,_transparent_90%)] opacity-70 dark:opacity-60 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Glow 2 – bright pink bottom-right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#d946ef_0%,_transparent_90%)] opacity-60 dark:opacity-50 rounded-full blur-[150px] pointer-events-none z-0" />

        {/* Glow 3 – optional subtle center depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_#c084fc_0%,_transparent_90%)] opacity-30 dark:opacity-40 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Subtle radial texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-transparent to-transparent dark:from-neutral-800/40 pointer-events-none z-0" />

        {/* Main content */}
        <main className="relative z-10 min-h-screen flex flex-col">
          <div className="relative min-h-screen">
            {!hasStartedChat && <MinimalHero />}
            <ChatInterface
              hasStartedChat={hasStartedChat}
              setHasStartedChat={setHasStartedChat}
            />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
