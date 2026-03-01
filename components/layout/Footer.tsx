import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-[#636AE8]">Steel</span> Shape India
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Setting the standard in heavy forging since 1989. We specialize in
              high-precision components and flanges for global industrial
              applications.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#636AE8] transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#636AE8] transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#636AE8] transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#636AE8] transition"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#636AE8] font-semibold uppercase tracking-wider text-sm mb-4">
              Pages
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[#636AE8] font-semibold uppercase tracking-wider text-sm mb-4">
              Contact Us
            </h4>
            <div className="text-sm text-white/80 space-y-3">
              <p>
                <a
                  href="mailto:sales@steelshapeindia.com"
                  className="hover:text-white transition"
                >
                  sales@steelshapeindia.com
                </a>
              </p>
              <p>
                <a href="tel:+911204567890" className="hover:text-white transition">
                  +91 120 456 7890
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[#636AE8] font-semibold uppercase tracking-wider text-sm mb-4">
              Location
            </h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Steel Shape India location map"
                src="https://www.google.com/maps?q=Steel+Shape+India+Ghaziabad&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/KG537p35e2dmiNcU6"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-xs text-[#636AE8] hover:text-white transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/70">
          <p>© 2026 STEEL SHAPE INDIA (SSI). ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Quality Manual
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
