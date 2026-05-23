'use client';

import { useState } from 'react';

export default function AmazonFbaPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are the benefits of using Amazon FBA?",
      a: "Amazon FBA allows sellers to store products in Amazon’s warehouses, and Amazon takes care of shipping, customer service, and returns. It gives sellers access to Prime shipping benefits, reduces logistical stress, and provides a trusted shipping platform for global sales."
    },
    {
      q: "How does Shipext help with Amazon FBA?",
      a: "We handle every step of the FBA process for you—from prepping inventory according to Amazon's strict standards, to ensuring timely delivery to fulfillment centers. With our experience, you avoid common mistakes, allowing your products to be shipped quickly and efficiently."
    },
    {
      q: "Do I need to sign a long-term contract with Shipext?",
      a: "No, we offer flexible plans with no long-term commitments. You can choose the services that best fit your business needs without being locked into a contract."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit cards, PayPal, and bank transfers to ensure flexible payment options for our clients."
    }
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-black text-slate-900">
            Amazon FBA Fulfillment Services
          </h1>

          <p className="mt-4 text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            End-to-end Amazon FBA preparation, logistics, and shipment management.
          </p>
        </div>
      </section>


      {/* WHAT IS IT */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4">
          What is Amazon FBA?
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          Amazon FBA (Fulfillment by Amazon) allows sellers to store inventory in Amazon’s
          fulfillment centers, where Amazon handles storage, packing, shipping, and customer service.
          This enables businesses to scale without managing logistics operations.
        </p>
      </section>


      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="space-y-5 text-sm text-slate-600 leading-relaxed">

          <p>
            At Shipext, we manage your entire Amazon FBA preparation workflow—from inventory intake
            to final delivery into Amazon warehouses.
          </p>

          <p>
            Our goal is to eliminate operational complexity so you can focus on scaling your brand,
            marketing, and product development.
          </p>

        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 -mt-10 mb-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center">
          <img 
            src="/fba-hero.png" 
            alt="Amazon FBA Logistics" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-20">

          <h2 className="text-2xl font-black text-slate-900 mb-8">
            How It Works
          </h2>

          <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">
            <li>Inventory receiving & inspection</li>
            <li>FBA-compliant labeling</li>
            <li>Packaging according to Amazon standards</li>
            <li>Shipment preparation & carrier booking</li>
            <li>Delivery to Amazon fulfillment centers</li>
          </ul>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-5xl mx-auto px-4 py-20">

        <h2 className="text-2xl font-black text-slate-900 mb-8">
          Key Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">

          <div className="p-5 border rounded-2xl">Faster Amazon acceptance process</div>
          <div className="p-5 border rounded-2xl">Reduced compliance risk</div>
          <div className="p-5 border rounded-2xl">Professional labeling & packaging</div>
          <div className="p-5 border rounded-2xl">Optimized logistics flow</div>

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
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-black text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-5 py-4 bg-slate-50 font-semibold text-slate-800 flex justify-between items-center"
              >
                {item.q}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed bg-white">
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