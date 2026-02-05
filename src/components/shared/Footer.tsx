"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left: Brand and Values */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">
              BORIS <span className="text-blue-600">WONG</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Efficiency through GenAI & Automation.
            </p>
          </div>

          {/* Center: Contact Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-slate-600 dark:text-slate-300">
            <a
              href="mailto:borix3739@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/boris-pwwong/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sfuborisw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Right: Copyright Info */}
          <div className="flex flex-col items-center md:items-end space-y-1">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              &copy; {currentYear} ALL RIGHTS RESERVED
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                AI Status: Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
