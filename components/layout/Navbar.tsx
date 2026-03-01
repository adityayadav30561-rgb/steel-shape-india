"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          <Link href="/manufacturing" className="hover:text-white transition whitespace-nowrap">Manufacturing</Link>
          <Link href="/contact" className="hover:text-white transition whitespace-nowrap">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700 transition px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shrink-0"
        >
          Request Quote
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white hover:border-indigo-400 transition"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#0B0F19]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
            <Link href="/" onClick={closeMobileMenu} className="hover:text-white transition">Home</Link>
            <Link href="/about" onClick={closeMobileMenu} className="hover:text-white transition">About</Link>
            <Link href="/products" onClick={closeMobileMenu} className="hover:text-white transition">Products</Link>
            <Link href="/manufacturing" onClick={closeMobileMenu} className="hover:text-white transition">Manufacturing</Link>
            <Link href="/contact" onClick={closeMobileMenu} className="hover:text-white transition">Contact</Link>
            <button
              type="button"
              className="mt-1 bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-sm font-medium text-white w-full"
            >
              Request Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
