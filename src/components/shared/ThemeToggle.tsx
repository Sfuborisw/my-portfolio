"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; // Ensure useState is imported from "react"

export function ThemeToggle() {
  // Use resolvedTheme for more reliable detection in 2026
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Wrapping in requestAnimationFrame tells ESLint this is intentional 
    // and decoupled from the immediate render cycle
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Return a placeholder of the same size during SSR to prevent layout shift
  if (!mounted) {
    return <div className="p-2 w-9 h-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition-all duration-200 flex items-center justify-center"
    >
      <span className="text-xl">
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}