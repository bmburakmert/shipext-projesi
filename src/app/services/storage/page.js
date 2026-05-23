'use client';
import { useState } from 'react';

export default function StoragePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      q: "Which storage plan is right for me?", 
      a: "Our storage plans are highly flexible and calculated based on your total cubic volume or pallet count. Whether you have 10 SKUs or 10,000, we provide a scalable strategy that ensures you only pay for the space you actually use." 
    },
    { 
      q: "Do I need to sign a long-term contract?", 
      a: "No long-term commitments are required. We offer month-to-month storage solutions that allow you to adapt to seasonal fluctuations. You can increase your space during peak holidays and scale down during slower periods without penalty." 
    },
    { 
      q: "What payment methods are accepted?", 
      a: "We facilitate easy financial operations by accepting all major credit cards, secure bank transfers, and online payment gateways like PayPal for your convenience." 
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-slate-950 mb-6 leading-tight">Secure & Scalable Storage Solutions</h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Protect your inventory in our state-of-the-art warehousing facilities. We provide the safety, space, and technology your brand needs to grow without limits.
          </p>
        </div>
      </section>


      {/* SEO DETAILED CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900 mb-8">Strategic Warehousing for Modern Brands</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
          <p>
            Effective inventory management begins with a <strong>secure and organized storage environment</strong>. At Shipext, we understand that your inventory is your most valuable asset. That’s why we offer more than just square footage; we provide a high-security, climate-optimized warehousing ecosystem designed to preserve the integrity of your products from arrival to final dispatch.
          </p>
          <p>
            Our facilities are equipped with <strong>24/7 surveillance and advanced security protocols</strong>, ensuring that your stock is protected around the clock. By leveraging our strategically located warehouses, you can position your inventory closer to your customers, significantly reducing transit times and shipping costs. Our systematic approach to palletizing and shelving ensures that every item is easily accessible, allowing for rapid fulfillment during high-demand periods.
          </p>
          <p>
            We pride ourselves on <strong>transparency and digital visibility</strong>. Every unit stored in our facility is logged into our cloud-based inventory system, giving you real-time access to stock levels, movement history, and storage costs through your dedicated dashboard. With Shipext, you can eliminate the overhead costs of managing your own warehouse, such as long-term leases, staffing, and equipment maintenance, allowing you to reinvest those savings directly into your brand's growth.
          </p>
        </div>

        {/* FEATURE HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { title: "Scalable Storage Capacity", desc: "Adapt your storage space dynamically based on seasonal trends and inventory turnover without long-term overhead." },
            { title: "Climate-Controlled Environment", desc: "Our facilities maintain optimal conditions to ensure your products remain in pristine condition, regardless of external factors." },
            { title: "Real-Time Digital Tracking", desc: "Access your inventory data 24/7. Know exactly what you have in stock and when it's time to replenish." },
            { title: "Professional Security & Monitoring", desc: "Your inventory is protected by multi-layered security systems, including motion sensors and constant video surveillance." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-3xl bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

{/* STORAGE HERO IMAGE */}
<section className="max-w-3xl mx-auto px-4 -mt-10 mb-10">
  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center">
    <img 
      src="/storage-hero.png" // Görseli 'public' klasörüne bu isimle kaydetmelisin
      alt="Professional Warehouse Storage" 
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
              Security Record
            </div>
          </div>

          <div>
            <div className="text-3xl font-black text-blue-600">24/7</div>
            <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
              Facility Monitoring
            </div>
          </div>

          <div>
            <div className="text-3xl font-black text-blue-600">Zero</div>
            <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
              Long-term Commitment
            </div>
          </div>

        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900 mb-10">Storage FAQs</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 font-bold text-slate-800 flex justify-between items-center transition"
              >
                {item.q}
                <span className="text-blue-600">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 text-sm text-slate-600 bg-slate-50 border-t border-slate-100 leading-relaxed">
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