'use client';
import { useState } from 'react';

export default function FulfillmentPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Which fulfillment plan is right for me?", a: "We offer tailored fulfillment strategies based on your specific volume and product type. Our team performs an initial audit of your current logistics and recommends the most cost-effective plan to optimize your shipping times." },
    { q: "Do I need to sign a long-term contract?", a: "We value transparency and flexibility. Our services are provided without any long-term binding contracts, allowing you to scale up or down as your business needs change." },
    { q: "What payment methods are accepted?", a: "To ensure a smooth financial workflow, we accept major credit cards, secure bank transfers, and various digital payment solutions." }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-slate-950 mb-6 leading-tight">Professional E-commerce Fulfillment Services</h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Shipext transforms your logistical challenges into a competitive advantage. Scale your business with high-speed fulfillment, precision inventory management, and reliable global shipping.
          </p>
        </div>
      </section>

      {/* DETAILED SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-slate-900 mb-8">The Core of Seamless E-commerce Fulfillment</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
          <p>
            In the fast-paced world of e-commerce, the difference between a one-time customer and a lifelong brand loyalist often comes down to <strong>delivery speed and packaging quality</strong>. At Shipext, our fulfillment services are designed to be an invisible but vital extension of your business. We don't just store products; we curate a logistical experience that ensures your brand promise is kept with every order placed.
          </p>
          <p>
            Our comprehensive <strong>fulfillment infrastructure</strong> covers every critical step of the supply chain. From the moment your inventory arrives at our secure, high-tech warehousing facilities, it is tracked, organized, and optimized for rapid retrieval. Our advanced fulfillment software integrates directly with your online store, ensuring that as soon as a customer clicks "checkout," your order moves immediately into the picking and packing workflow.
          </p>
          <p>
            We take pride in our <strong>operational precision</strong>. By utilizing optimized carrier routes via FedEx and UPS, we ensure that your shipments not only arrive on time but do so with the most cost-effective and efficient transit times available. Whether you are handling a holiday season spike or managing steady year-round growth, our fulfillment solutions provide the scalability and reliability your brand deserves.
          </p>
        </div>

        {/* DETAILED FEATURES */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { title: "Precision Inventory Management", desc: "Monitor your stock levels in real-time with our high-tech dashboard, reducing stockouts and overstock costs." },
            { title: "Customized Picking & Packing", desc: "We provide bespoke packing solutions that protect your products and reinforce your brand identity upon unboxing." },
            { title: "Amazon FBA Preparation", desc: "Expert support in labeling, kitting, and shipping inventory to Amazon FBA centers in strict compliance with their guidelines." },
            { title: "Omni-Channel Integration", desc: "Sync your store from Shopify, Amazon, or custom platforms into one unified fulfillment ecosystem." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-3xl bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FULFILLMENT HERO IMAGE */}
<section className="max-w-3xl mx-auto px-4 -mt-10 mb-10">
  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center">
    <img 
      src="/fulfillment-hero.png" // Görseli bu isimle public klasörüne kaydetmeyi unutma
      alt="Professional Fulfillment Logistics" 
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

    </div>
  );
}