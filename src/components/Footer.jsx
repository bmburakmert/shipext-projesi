import Link from "next/link";

const footerData = {
  brand: {
    name: "SHIPEXT",
    desc: "Pick & Pack & Ship, FBA (Fulfillment By Amazon), FBM (Fulfillment By Merchant), Return Management and more.",
  },

  services: [
    { label: "Amazon FBA", href: "/services/amazon-fba" },
    { label: "Dropshipping", href: "/services/dropshipping" },
    { label: "Fulfillment", href: "/services/fulfillment" },
    { label: "Storage", href: "/services/storage" },
  ],

  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],

  contact: {
    address: "United Kingdom",
    phone: "+90 553 823 95 00",
    email: "info@shipext.com",
  },
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 w-full">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* BRAND */}
        <div>
          <span className="text-white text-xl font-black tracking-wider">
            {footerData.brand.name}
          </span>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {footerData.brand.desc}
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </h4>

          <ul className="space-y-3 text-sm font-medium">
            {footerData.services.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm font-medium">
            {footerData.quickLinks.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
            Information
          </h4>

          <p className="text-sm text-slate-400 leading-relaxed">
            Address: {footerData.contact.address}
          </p>

          <p className="text-sm mt-3 text-slate-300 font-semibold">
            {footerData.contact.phone}
          </p>

          <a
            href={`mailto:${footerData.contact.email}`}
            className="text-sm text-blue-400 font-semibold hover:underline"
          >
            {footerData.contact.email}
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 tracking-wide font-medium">
        © 2026 {footerData.brand.name}. All rights reserved.
      </div>

    </footer>
  );
}