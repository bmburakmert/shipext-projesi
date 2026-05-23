import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div>
          <span className="text-white text-xl font-black tracking-wider">
            SHIPEXT
          </span>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Pick & Pack & Ship, FBA (Fulfillment By Amazon),
            FBM (Fulfillment By Merchant), Return Management
            and more.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </h4>

          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Amazon FBA
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white transition">
                Dropshipping
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white transition">
                Fulfillment
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white transition">
                Storage
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/services" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Information
          </h4>

          <p className="text-sm text-slate-400 leading-relaxed">
            Address: United Kingdom
          </p>

          <p className="text-sm mt-3 text-slate-300 font-semibold">
            +44 73 88 211 602
          </p>

          <a
            href="mailto:info@fullfillonus.com"
            className="text-sm text-blue-400 font-semibold hover:underline"
          >
            info@shipext.com
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 tracking-wide font-medium">
        © 2026 SHIPEXT. All rights reserved.
      </div>

    </footer>
  );
}