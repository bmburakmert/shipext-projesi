'use client';

import Image from 'next/image';
import heroImg from '../../public/hero-logistic.png';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>

      {/* ================= HERO ================= */}
      <section className="bg-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <FadeIn direction="left">
            <div>

              <span className="text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1.5 rounded-md">
                UK FULFILMENT & GLOBAL SHIPPING
              </span>

              <h1 className="text-5xl sm:text-6xl font-black text-brand-navy mt-6 leading-tight">
                Scalable Fulfilment <br />
                For <span className="text-brand-orange">E-commerce Brands</span>
              </h1>

              <p className="text-slate-500 mt-6 text-base leading-relaxed max-w-xl">
                We handle storage, pick & pack, Amazon FBA prep, FBM and global shipping.
                Built for Shopify, Amazon and eBay sellers who want to scale without operational stress.
              </p>

              <div className="mt-8 flex gap-4">
                <a className="bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-navy transition">
                  Get Quote
                </a>

                <a className="border border-slate-200 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:border-brand-navy transition">
                  How it works
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-400">
                <span>✓ No contract</span>
                <span>✓ Same day dispatch</span>
                <span>✓ UK based warehouse</span>
              </div>

            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-700">
              <Image
                src={heroImg}
                alt="warehouse"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= TRUST LOGOS ================= */}
      <div className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-16">

          <img src="/amazon.svg" className="h-14 opacity-50 hover:opacity-100 hover:scale-110 transition" />
          <img src="/shopify.svg" className="h-14 opacity-50 hover:opacity-100 hover:scale-110 transition" />
          <img src="/ebay.svg" className="h-14 opacity-50 hover:opacity-100 hover:scale-110 transition" />
          <img src="/fedex.svg" className="h-12 opacity-50 hover:opacity-100 hover:scale-110 transition" />
          <img src="/etsy.svg" className="h-10 opacity-50 hover:opacity-100 hover:scale-110 transition" />
          <img src="/Tiktok.png" className="h-10 opacity-50 hover:opacity-100 hover:scale-110 transition" />

        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <FadeIn direction="left">
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/fulfillment-showcase.png" fill className="object-cover" />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>

              <h2 className="text-4xl font-black text-brand-navy">
                End-to-End Fulfilment Infrastructure
              </h2>

              <p className="text-slate-500 mt-4 leading-relaxed">
                From inventory management to final delivery, we optimise every step of your logistics pipeline
                to reduce costs and improve delivery performance.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Amazon FBA Prep",
                  "FBM Handling",
                  "Returns Processing",
                  "Fast Dispatch",
                  "Inventory Sync",
                  "Carrier Optimisation"
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="text-sm font-bold text-brand-navy">✓ {item}</div>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-brand-navy py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-black text-white">
            How Shipext Works
          </h2>

          <p className="text-slate-300 mt-4">
            Simple onboarding in 4 steps
          </p>

          <div className="grid md:grid-cols-4 gap-10 mt-16">

            {[
              { n: "01", t: "Send Request" },
              { n: "02", t: "Onboarding Call" },
              { n: "03", t: "Setup Inventory" },
              { n: "04", t: "Start Shipping" }
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 hover:-translate-y-2 transition">
                  <div className="text-brand-orange font-black text-lg">{s.n}</div>
                  <div className="text-brand-navy font-bold mt-2">{s.t}</div>
                </div>
              </FadeIn>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-28 text-center">

        <FadeIn>
          <h2 className="text-4xl font-black text-brand-navy">
            Ready to scale your business?
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Join UK sellers already using Shipext for faster, cheaper and more reliable fulfilment.
          </p>

          <a className="inline-block mt-8 bg-brand-orange text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-navy transition">
            Get Started
          </a>
        </FadeIn>

      </section>

    </>
  );
}