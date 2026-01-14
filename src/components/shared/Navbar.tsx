import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'AI Chat', href: '/chat' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              DevPortfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Placeholder for now) */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600">
              <span className="sr-only">Open menu</span>
              {/* You can add a burger icon here later */}
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;