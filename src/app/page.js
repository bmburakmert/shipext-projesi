'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/hero-logistic.png';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <span className="inline-flex rounded-md bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                UK FULFILMENT & GLOBAL SHIPPING
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-brand-navy sm:text-6xl">
                Scalable Fulfilment <br />
                For <span className="text-brand-orange">E-commerce Brands</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500">
                We handle storage, pick & pack, Amazon FBA prep, FBM, returns processing
                and global shipping. Built for Shopify, Amazon and eBay sellers who want
                to scale without operational stress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-orange px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-navy"
                >
                  Get Quote
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-200 px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-navy transition hover:border-brand-navy"
                >
                  How It Works
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-400">
                <span>✓ No contract</span>
                <span>✓ Same day dispatch</span>
                <span>✓ UK based warehouse</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[460px] overflow-hidden rounded-3xl shadow-2xl transition duration-700 hover:scale-[1.02]">
              <Image
                src={heroImg}
                alt="Shipext warehouse and fulfilment operations"
                fill
                priority
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= TRUST LOGOS ================= */}
      <section className="border-y border-slate-100 bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-16 px-4">
          <img
            src="/amazon.svg"
            alt="Amazon"
            className="h-14 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
          <img
            src="/shopify.svg"
            alt="Shopify"
            className="h-14 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
          <img
            src="/ebay.svg"
            alt="eBay"
            className="h-14 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
          <img
            src="/fedex.svg"
            alt="FedEx"
            className="h-12 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
          <img
            src="/etsy.svg"
            alt="Etsy"
            className="h-10 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
          <img
            src="/Tiktok.png"
            alt="TikTok"
            className="h-10 opacity-50 transition hover:scale-110 hover:opacity-100"
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative h-[460px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/fulfillment-showcase.png"
                alt="Fulfilment operation showcase"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <h2 className="text-4xl font-black text-brand-navy">
                End-to-End Fulfilment Infrastructure
              </h2>

              <p className="mt-4 leading-relaxed text-slate-500">
                From inventory management to final delivery, we optimise every step of your
                logistics pipeline to reduce costs and improve delivery performance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Amazon FBA Prep',
                  'FBM Handling',
                  'Returns Processing',
                  'Fast Dispatch',
                  'Inventory Sync',
                  'Carrier Optimisation',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
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
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-black text-white">How Shipext Works</h2>
          <p className="mt-4 text-slate-300">Simple onboarding in 4 steps</p>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              { n: '01', t: 'Send Request' },
              { n: '02', t: 'Onboarding Call' },
              { n: '03', t: 'Setup Inventory' },
              { n: '04', t: 'Start Shipping' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 transition hover:-translate-y-2">
                  <div className="text-lg font-black text-brand-orange">{s.n}</div>
                  <div className="mt-2 font-bold text-brand-navy">{s.t}</div>
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

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Join UK sellers already using Shipext for faster, cheaper and more reliable fulfilment.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-orange px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-brand-navy"
          >
            Get Started
          </Link>
        </FadeIn>
      </section>
    </>
  );
}