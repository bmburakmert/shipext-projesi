import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Amazon FBA",
      desc: "We manage end-to-end Amazon FBA logistics.",
      href: "/services/amazon-fba"
    },
    {
      title: "Dropshipping",
      desc: "Fully integrated dropshipping solutions.",
      href: "/services/dropshipping"
    },
    {
      title: "Fulfillment",
      desc: "Fast US-wide order fulfillment via UPS & FedEx.",
      href: "/services/fulfillment"
    },
    {
      title: "Storage",
      desc: "Secure storage and inventory management solutions.",
      href: "/services/storage"
    }
  ];

  return (
    <>
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-black">Our Services</h1>
          <p className="text-xs text-slate-400 uppercase mt-2">
            HOME → SERVICES
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition block"
            >
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl font-bold mb-6">
                0{i + 1}
              </div>

              <h3 className="text-xl font-black mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}