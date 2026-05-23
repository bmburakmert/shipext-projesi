// src/app/page.js
import Image from 'next/image';
import heroImg from '../../public/hero-logistic.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sol Taraf: Yazılar ve Buton */}
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1.5 rounded-md">
              FASTEST & SECURE LOGISTICS
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-brand-navy tracking-tight mt-4 mb-6 leading-tight">
              Fulfillment And <br /> Shipping <span className="text-brand-orange">Solutions</span>
            </h1>
            <p className="text-base text-slate-500 mb-8 max-w-xl leading-relaxed">
              We Offer High Quality Services For Pick & Pack & Ship, FBA (Fulfillment By Amazon), FBM (Fulfillment By Merchant), Return Management And More.
            </p>
            <a href="/services" className="inline-block bg-brand-orange hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-brand-orange/20 transition duration-300">
              Explore Our Services
            </a>
          </div>

          {/* Sağ Taraf: Gri kutunun yerine gelen Canlı Depo Resmi */}
          <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={heroImg}
              alt="Logistics & Shipping Visual"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* SOL TARAF: Gri kutunun yerine YENİ GÖRSELİMİZ geldi */}
          <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/fulfillment-showcase.png" // 🚨 public klasörüne attığın resmin adı
              alt="Reliable Fulfillment Showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* SAĞ TARAF: Değiştirdiğin yeni metinler ve checklist */}
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-navy uppercase">
              RELIABLE FULFILLMENT & SHIPPING SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mt-3 mb-6">
              Your Shipments Now Easy And <br /> Under Your Control
            </h2>
            <p className="text-base text-slate-500 mb-8 leading-relaxed">
              Your global shipping operations, simplified. From automated inventory tracking to swift doorstep delivery, we manage the entire logistics loop so you can focus entirely on what you do best: growing your brand.
            </p>

            {/* Checklist Alanı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-semibold text-sm text-brand-navy">
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">✓</span>
                <span>Quality Control System</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">✓</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">✓</span>
                <span>Professional and Qualified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-orange">✓</span>
                <span>Safe, Reliable And Express</span>
              </div>
            </div>

            <a href="/contact" className="inline-block bg-brand-navy hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition duration-300">
              Get In Touch
            </a>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols- md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-blue-600">5+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Years Of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600">96%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Successful Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-600">99%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Happy Customers</div>
          </div>
        </div>
      </section>

    {/* Logo Bandı / Pazar Yerleri Şeridi */}
<div className="bg-white border-b border-slate-100 py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 sm:gap-16">
    
    {/* Amazon - Yatay logo olduğu için ideal yükseklik */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/amazon.svg" 
        alt="Amazon" 
        className="h-7 sm:h-9 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,153,0,0.6)]"
      />
    </div>

    {/* Shopify - Simgesiyle beraber dengeli yükseklik */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/shopify.svg" 
        alt="Shopify" 
        className="h-8 sm:h-10 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(149,191,65,0.6)]"
      />
    </div>

    {/* Etsy - Büyük baş harfi yüzünden biraz daha küçük tutarak eşitledik */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/etsy.svg" 
        alt="Etsy" 
        className="h-9 sm:h-11 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(241,100,30,0.6)]"
      />
    </div>

    {/* eBay - Dengeli orta boy */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/ebay.svg" 
        alt="eBay" 
        className="h-7 sm:h-9 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,100,210,0.5)]"
      />
    </div>

    {/* FedEx - Düz ince uzun yapı için yükseklik ayarı */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/fedex.svg" 
        alt="FedEx" 
        className="h-6 sm:h-7 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(77,20,140,0.5)]"
      />
    </div>

    {/* UPS - Kalkan (Shield) yapısı dikey olduğu için h-10 tam oturur */}
    <div className="group transition-all duration-300 hover:scale-105 cursor-pointer">
      <img 
        src="/ups.svg" 
        alt="UPS" 
        className="h-8 sm:h-10 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(53,28,11,0.5)]"
      />
    </div>

  </div>
</div>
      {/* How it Works Section */}
    <section className="bg-brand-navy py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Üst Başlık Alanı */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
            How To Start Your Journey With <br className="hidden sm:inline" /> Shipext
          </h2>
        </div>

        {/* Adımlar Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {[
            { 
              id: "01", 
              title: "Request A Quote", 
              desc: "Fill the contact form and give us information about your business",
              icon: (
                <svg className="w-10 h-10 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )
            },
            { 
              id: "02", 
              title: "Get a Call", 
              desc: "Get a call from our customer services",
              icon: (
                <svg className="w-10 h-10 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M3.75 18c0-1.33 1.08-2.42 2.42-2.42h11.66c1.34 0 2.42 1.09 2.42 2.42M21 21H3v-.5c0-1.93 1.57-3.5 3.5-3.5h11c1.93 0 3.5 1.57 3.5 3.5v.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 0A3.75 3.75 0 0012 18z" />
                </svg>
              )
            },
            { 
              id: "03", 
              title: "We Will Set Up", 
              desc: "Give us some time to set things up",
              icon: (
                <svg className="w-10 h-10 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
            },
            { 
              id: "04", 
              title: "Ready to Go", 
              desc: "Start your seamless experience with Shipext",
              icon: (
                <svg className="w-10 h-10 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.96 14.96 0 01-12.12 6.16 14.96 14.96 0 016.16-12.12m1.1-1.1a14.96 14.96 0 010 3.18m0-3.18a14.97 14.97 0 013.18 0M15 15a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              
              {/* Aradaki Geçiş Okları (Sadece büyük ekranlarda ve son adımdan önce görünür) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[65%] w-[70%] z-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <svg className="w-full h-8 text-white" fill="none" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,20 50,10 T100,10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="95,7 100,10 95,13" fill="currentColor" />
                  </svg>
                </div>
              )}

              {/* Dairesel İkon Alanı ve Numara Balonu */}
              <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                {step.icon}
                
                {/* Küçük Mavi Numara Balonu */}
                <div className="absolute -top-1 -right-1 bg-sky-500 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-brand-navy shadow">
                  {step.id}
                </div>
              </div>

              {/* Metin İçerikleri */}
              <div className="mt-6 max-w-[240px]">
                <h3 className="text-lg font-black text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300/80 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}