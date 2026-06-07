'use client';
import { useState } from 'react';

export default function DropshippingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What is dropshipping and how does it work?", a: "Dropshipping is a retail model where you sell products without maintaining physical inventory. When a customer purchases from your store, Shipext receives the order data, picks the item from our warehouse or supplier network, packs it professionally, and ships it directly to your customer's doorstep. You avoid storage costs while maintaining control over your brand." },
    { q: "How does Shipext help with dropshipping?", a: "Shipext acts as your strategic logistics partner. We don't just ship; we integrate deeply with your e-commerce platform (Shopify, WooCommerce, etc.), provide real-time inventory visibility, manage quality control, and offer custom packaging. We turn logistics from a headache into a competitive advantage for your brand." },
    { q: "Do I need to sign a long-term contract?", a: "We believe in earning your business every day. We offer highly flexible, scalable plans without long-term commitments. Whether you are a startup testing the waters or an established brand, our service scales with your order volume." },
    { q: "Can I brand the products being dropshipped?", a: "Absolutely. We specialize in custom branding solutions. From branded shipping labels and inserts to custom packaging materials, we ensure that every customer interaction reinforces your brand identity rather than the supplier's." },
    { q: "What payment methods do you accept?", a: "We provide full flexibility to keep your cash flow healthy. We accept all major credit cards, PayPal, and international bank transfers. Our invoicing is transparent and easy to track within your Shipext dashboard." }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-white">

  {/* Glow */}
  <div
    className="
      absolute
      top-[-250px]
      left-1/2
      -translate-x-1/2
      w-[700px]
      h-[700px]
      bg-blue-300
      opacity-20
      blur-3xl
      rounded-full
    "
  />

  <div className="relative max-w-5xl mx-auto px-4 py-28 text-center">

    <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-bold text-blue-600 uppercase tracking-wider mb-8">
      Dropshipping • Fulfillment • Global Logistics
    </div>

    <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-950">

      Dropshipping

      <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Excellence
      </span>

    </h1>

    <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
      Scale your e-commerce brand globally without inventory overhead.
      Shipext handles fulfillment, warehousing and shipping while you grow.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      <button
        className="
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          text-white
          font-bold
          shadow-xl
          hover:scale-[1.03]
          hover:shadow-2xl
          transition-all
        "
      >
        Start Scaling
      </button>

      <button
        className="
          px-8
          py-4
          rounded-2xl
          border
          border-slate-300
          bg-white
          hover:bg-slate-50
          transition
        "
      >
        Learn More
      </button>

    </div>

  </div>

</section>

      {/* DETAILED CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900 mb-8">Why Choose Shipext for Dropshipping?</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
          <p>
            Dropshipping is an agile business model that allows you to sell a vast array of products without the financial burden of storage, 
            warehouse rent, or inventory management. Your primary focus as a seller remains on marketing, brand growth, and customer 
            acquisition—while we handle the complex world of logistics, order processing, and last-mile delivery.
          </p>
          <p>
            At Shipext, we go beyond basic shipping. We offer quick, seamless integration with your existing online store, ensuring that 
            your orders are processed instantly the moment a customer clicks 'buy'. Every item is handled with precision: picked, 
            packed, and dispatched with full tracking visibility so that your customers are always kept in the loop.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { title: "Complete End-to-End Solutions", desc: "From order ingestion to final delivery, our infrastructure ensures your products reach your customers without any hassle." },
            { title: "Seamless Store Integration", desc: "Connect your Shopify, WooCommerce, or custom store to our system and start processing orders within minutes." },
            { title: "Reliability & Precision", desc: "Our 97% on-time shipment rate and professional handling protocols ensure your business reputation stays pristine." },
            { title: "Custom Branding Options", desc: "Don't hide behind a supplier. We use your branding, your packaging, and your labels to ensure a consistent customer experience." }
          ].map((feat, i) => (
            <div key={i} className="p-6 border border-slate-200 rounded-3xl bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-xs text-slate-500">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DROPSHIPPING HERO IMAGE */}
<section className="max-w-3xl mx-auto px-4 -mt-10 mb-10">
  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center">
    <img 
      src="/dropshipping-hero.png" // Görseli bu isimle public klasörüne ekleyebilirsin
      alt="Professional Dropshipping Logistics" 
      className="w-full h-full object-cover"
    />
  </div>
</section>

     {/* STATS */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="text-3xl font-black text-blue-600">95%</div>
            <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
              On-Time Shipments
            </div>
          </div>

          <div>
            <div className="text-3xl font-black text-blue-600">98%</div>
            <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
              Customer Satisfaction
            </div>
          </div>

          <div>
            <div className="text-3xl font-black text-blue-600">24/7</div>
            <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
              Support
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 font-bold text-slate-800 flex justify-between items-center transition"
              >
                {item.q}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-sm text-slate-600 bg-slate-50 border-t border-slate-100 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}