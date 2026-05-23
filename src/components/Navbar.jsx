'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myLogo from '../../public/logo.svg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={myLogo} alt="Logo" className="h-12 w-auto object-contain" priority />
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-xs tracking-widest uppercase">
            <Link href="/" className="text-slate-600 hover:text-brand-navy transition">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-slate-600 hover:text-brand-navy transition flex items-center"
              >
                Our Services
              </button>
              
              {/* Dropdown İçeriği */}
              {isServicesOpen && (
                <div 
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full -left-4 mt-0 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 z-50"
                >
                  <Link href="/services/amazon-fba" className="block px-6 py-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition">Amazon FBA</Link>
                  <Link href="/services/dropshipping" className="block px-6 py-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition">Dropshipping</Link>
                  <Link href="/services/fulfillment" className="block px-6 py-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition">Fulfillment</Link>
                  <Link href="/services/storage" className="block px-6 py-2.5 text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition">Storage</Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <Link href="/services" className="block px-6 py-2.5 text-brand-orange font-bold hover:text-brand-navy transition">All Services</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-slate-600 hover:text-brand-navy transition">Blog</Link>
            <Link href="/contact" className="text-slate-600 hover:text-brand-navy transition">Contact Us</Link>
          </div>

          {/* Desktop Buton */}
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-brand-orange hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md shadow-brand-orange/10 transition duration-300">
              Get Started
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 font-bold text-xs uppercase">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600">Home</Link>
          <div className="px-4 py-3 text-slate-600 border-b border-slate-50">Our Services</div>
          <Link href="/services/amazon-fba" className="block px-8 py-2 text-slate-500">Amazon FBA</Link>
          <Link href="/services/dropshipping" className="block px-8 py-2 text-slate-500">Dropshipping</Link>
          <Link href="/services/fulfillment" className="block px-8 py-2 text-slate-500">Fulfillment</Link>
          <Link href="/services/storage" className="block px-8 py-2 text-slate-500">Storage</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}