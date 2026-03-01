import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-base sm:text-lg md:text-xl font-bold tracking-wide shrink-0 min-w-0">
          <span className="text-indigo-500">Steel</span> Shape India
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition whitespace-nowrap">Home</Link>
          <Link href="/about" className="hover:text-white transition whitespace-nowrap">About</Link>
          <Link href="/products" className="hover:text-white transition whitespace-nowrap">Products</Link>
          <a href="#" className="hover:text-white transition whitespace-nowrap">Manufacturing</a>
          <Link href="/contact" className="hover:text-white transition whitespace-nowrap">Contact</Link>
        </nav>

        {/* CTA */}
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 transition px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shrink-0"
        >
          Request Quote
        </button>
      </div>
    </header>
  );
}
