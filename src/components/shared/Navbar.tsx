"use client"; // Important: Navbar now has interactive components

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    // { name: 'AI Chat', href: '/chat' },
    { name: 'About', href: '/about' },
  ];

  return (
    // Added dark:bg-slate-900/80 and dark:border-slate-800 for Dark Mode
    <nav className="fixed top-0 w-full border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Boris Wong
            </Link>
          </div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pl-4 border-l border-gray-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle /> {/* Also show on mobile */}
            <button className="p-2 text-gray-600 dark:text-slate-300">
              ☰
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;