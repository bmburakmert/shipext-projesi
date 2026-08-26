'use client';

import { useMemo, useState } from 'react';

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Goods Receiving',
      category: 'Receiving',
      shortDesc: 'Receive and register your incoming inventory.',
      covers:
        'Incoming parcels, cartons and pallets are received, checked and registered at the Shipext warehouse.',
      applies:
        'Whenever new inventory arrives at our facility.',
      charged:
        'Based on the type and volume of goods received.',
      notes:
        'Additional counting, detailed inspection or special handling may be charged separately.'
    },
    {
      id: 2,
      title: 'Product Counting & Stock Entry',
      category: 'Receiving',
      shortDesc: 'Accurate counting and inventory registration for every SKU.',
      covers:
        'Products are counted and quantities are recorded against the relevant SKU in the inventory system.',
      applies:
        'During inbound receiving or when a stock discrepancy needs to be checked.',
      charged:
        'Per item processed.',
      notes:
        'Significant quantity discrepancies can be reported to the client for review.'
    },
    {
      id: 3,
      title: 'Pallet Receiving',
      category: 'Receiving',
      shortDesc: 'Efficient receiving and handling of palletised inventory.',
      covers:
        'Incoming pallets are unloaded, checked and moved into the warehouse for storage or further processing.',
      applies:
        'Whenever inventory arrives on pallets.',
      charged:
        'Per pallet received.',
      notes:
        'Oversize or non-standard pallet configurations may require separate pricing.'
    },
    {
      id: 4,
      title: 'Carton Storage',
      category: 'Storage',
      shortDesc: 'Secure and organised storage for carton-based inventory.',
      covers:
        'Products are stored in designated warehouse locations and tracked according to SKU and stock levels.',
      applies:
        'When inventory needs to remain at the warehouse before fulfilment, shipment or another client instruction.',
      charged:
        'Based on the agreed carton storage rate and storage period.',
      notes:
        'Storage requirements may vary depending on carton size, SKU count and product characteristics.'
    },
    {
      id: 5,
      title: 'Pallet Storage',
      category: 'Storage',
      shortDesc: 'Flexible storage for larger-volume inventory.',
      covers:
        'Palletised stock is stored securely and tracked within the warehouse.',
      applies:
        'For clients holding larger quantities of stock or bulk inventory.',
      charged:
        'Per pallet based on the agreed storage period.',
      notes:
        'Oversize or special pallet requirements may be quoted separately.'
    },
    {
      id: 6,
      title: 'Pick & Pack',
      category: 'Fulfillment',
      shortDesc: 'Prepare every order for safe and efficient dispatch.',
      covers:
        'Products are picked from their storage location, checked and packed according to the order requirements.',
      applies:
        'Whenever an order is received for fulfilment.',
      charged:
        'Per order or according to the applicable fulfilment volume tier.',
      notes:
        'Additional packaging, inserts, bundling or special handling may incur separate charges.'
    },
    {
      id: 7,
      title: 'Order Dispatch',
      category: 'Fulfillment',
      shortDesc: 'Fast and organised dispatch for e-commerce orders.',
      covers:
        'Completed orders are checked, labelled and prepared for carrier collection or drop-off.',
      applies:
        'Once an order has been picked and packed.',
      charged:
        'Per order or according to the agreed fulfilment pricing structure.',
      notes:
        'Same-day dispatch depends on the agreed operational cut-off time and carrier schedule.'
    },
    {
      id: 8,
      title: 'Standard Packaging',
      category: 'Packaging',
      shortDesc: 'Practical packaging solutions for everyday e-commerce shipments.',
      covers:
        'Standard envelopes, courier bags and other suitable packaging materials are used to prepare products for shipment.',
      applies:
        'For orders requiring standard protection and presentation.',
      charged:
        'Per packaged item.',
      notes:
        'Special packaging materials or customer-specific packaging requirements may be charged separately.'
    },
    {
      id: 9,
      title: 'Repackaging & Product Preparation',
      category: 'Packaging',
      shortDesc: 'Prepare products for resale, fulfilment or onward shipment.',
      covers:
        'Products can be cleaned, reorganised, repacked or prepared in suitable packaging.',
      applies:
        'For returned, damaged, opened or otherwise repackaging-required products.',
      charged:
        'Per item based on the required handling and packaging.',
      notes:
        'Additional packaging materials may be charged separately.'
    },
    {
      id: 10,
      title: 'FNSKU Labelling',
      category: 'Amazon FBA',
      shortDesc: 'Prepare Amazon inventory with the required FNSKU labels.',
      covers:
        'FNSKU labels are printed and applied to products according to Amazon requirements.',
      applies:
        'When products require Amazon-specific identification labels.',
      charged:
        'Per label or item.',
      notes:
        'Additional labels may be required where existing barcodes need to be covered or replaced.'
    },
    {
      id: 11,
      title: 'Amazon FBA Preparation',
      category: 'Amazon FBA',
      shortDesc: 'Prepare products for delivery to Amazon fulfilment centres.',
      covers:
        'FBA preparation may include labelling, packaging, bundling, carton preparation and other Amazon-specific requirements.',
      applies:
        'When inventory is being prepared for Amazon FBA.',
      charged:
        'Based on the preparation services required.',
      notes:
        'Special Amazon requirements can be reviewed and quoted separately where necessary.'
    },
    {
      id: 12,
      title: 'FBA Carton Dispatch',
      category: 'Amazon FBA',
      shortDesc: 'Prepare and dispatch finished cartons to Amazon.',
      covers:
        'FBA cartons are checked, labelled and prepared for carrier collection or drop-off.',
      applies:
        'When an FBA shipment is ready to leave the Shipext warehouse.',
      charged:
        'Per carton according to the applicable FBA dispatch rate.',
      notes:
        'Carrier transportation costs are separate unless otherwise agreed.'
    },
    {
      id: 13,
      title: 'Shipping & Drop-Off',
      category: 'Shipping',
      shortDesc: 'Flexible UK and international shipping through multiple carrier options.',
      covers:
        'Packed orders are prepared for carrier collection, drop-off or onward dispatch.',
      applies:
        'After an order has completed the fulfilment process.',
      charged:
        'Shipping cost plus any applicable handling or drop-off fee.',
      notes:
        'Final shipping rates depend on destination, dimensions, weight and selected carrier service.'
    },
    {
      id: 14,
      title: 'Carrier Handover',
      category: 'Shipping',
      shortDesc: 'Reliable handover of shipments to the selected carrier.',
      covers:
        'Shipping labels and shipment details are checked before parcels, cartons or pallets are handed to the carrier.',
      applies:
        'Whenever completed shipments leave the warehouse.',
      charged:
        'According to the applicable shipping and handling service.',
      notes:
        'Carrier collection times and service availability depend on the selected carrier.'
    },
    {
      id: 15,
      title: 'Returns Receiving',
      category: 'Returns',
      shortDesc: 'A structured process for managing customer returns.',
      covers:
        'Returned parcels are received, identified and registered in the operational system.',
      applies:
        'Whenever a customer return arrives at the Shipext warehouse.',
      charged:
        'Per return according to the applicable returns processing rate.',
      notes:
        'Inspection, photography, repackaging, restocking, disposal or forwarding can be added when required.'
    },
    {
      id: 16,
      title: 'Returns Inspection',
      category: 'Returns',
      shortDesc: 'Inspect returned products and determine the appropriate next action.',
      covers:
        'Returned products are checked for condition and assessed for restocking, repackaging, disposal or forwarding.',
      applies:
        'When a return requires inspection before further processing.',
      charged:
        'Per item inspected.',
      notes:
        'Detailed inspection and product photography can be requested as additional services.'
    },
    {
      id: 17,
      title: 'Product Photography',
      category: 'Special Services',
      shortDesc: 'Visual confirmation for returns, inventory and operational reporting.',
      covers:
        'Photos can be taken of products, returned items, packaging, labels or documents.',
      applies:
        'When visual evidence or condition reporting is required.',
      charged:
        'Per item or according to the requested photography service.',
      notes:
        'Specific photo requirements should be provided in advance for detailed requests.'
    },
    {
      id: 18,
      title: 'Product Disposal',
      category: 'Special Services',
      shortDesc: 'Controlled disposal of products based on client instructions.',
      covers:
        'Products approved for disposal are removed from active inventory and processed according to the agreed disposal procedure.',
      applies:
        'When returned, damaged or unsellable products are instructed for disposal.',
      charged:
        'Per item or according to the agreed disposal service.',
      notes:
        'Restricted, hazardous or regulated products may require separate review and approval.'
    }
  ];

  const categories = [
    'All',
    'Receiving',
    'Storage',
    'Fulfillment',
    'Packaging',
    'Amazon FBA',
    'Shipping',
    'Returns',
    'Special Services'
  ];

  const filteredServices = useMemo(() => {
    const term = search.toLowerCase().trim();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === 'All' ||
        service.category === activeCategory;

      const matchesSearch =
        !term ||
        service.title.toLowerCase().includes(term) ||
        service.shortDesc.toLowerCase().includes(term) ||
        service.category.toLowerCase().includes(term) ||
        service.covers.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const categoryCount = (category) => {
    if (category === 'All') return services.length;

    return services.filter(
      (service) => service.category === category
    ).length;
  };

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">
            Our Services
          </h1>

          <p className="text-xs text-slate-400 uppercase tracking-wider mt-3">
            HOME → SERVICES
          </p>
        </div>
      </section>

      {/* ================= HOW SHIPEXT WORKS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
              How Shipext Works
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              From your inventory to your customer.
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              A simple five-step fulfilment process designed to keep your
              inventory organised, your orders moving and your customers happy.
            </p>
          </div>

          <div className="relative">

            {/* Connection line */}
            <div className="hidden lg:block absolute left-0 right-0 top-7 border-t-2 border-dashed border-slate-200" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">

              {[
                {
                  number: '01',
                  title: 'Receive',
                  desc: 'We receive, count and register your inventory.'
                },
                {
                  number: '02',
                  title: 'Store',
                  desc: 'Inventory is organised and stored by SKU and location.'
                },
                {
                  number: '03',
                  title: 'Pick & Pack',
                  desc: 'Orders are picked, checked and professionally packed.'
                },
                {
                  number: '04',
                  title: 'Ship',
                  desc: 'Orders are dispatched using the appropriate carrier service.'
                },
                {
                  number: '05',
                  title: 'Return',
                  desc: 'Returns are received, inspected and processed based on your instructions.'
                }
              ].map((step) => (
                <div key={step.number} className="relative">

                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-black shadow-sm">
                    {step.number}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-black text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CATALOGUE ================= */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">

          {/* Intro */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">

            <div className="max-w-3xl">

              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
                Service Catalogue
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Everything your e-commerce operation needs.
              </h2>

              <p className="text-slate-500 mt-4 leading-relaxed">
                Explore our receiving, storage, fulfilment, packaging, Amazon FBA,
                shipping, returns and special services. Every service explains
                what it covers, when it applies and how it is charged.
              </p>

            </div>

            <div className="text-sm text-slate-500 whitespace-nowrap">
              <span className="font-black text-slate-900">
                {filteredServices.length}
              </span>{' '}
              services
            </div>

          </div>

          {/* ================= SEARCH ================= */}
          <div className="mb-7">

            <div className="relative max-w-xl">

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>

            </div>

          </div>

          {/* ================= FILTERS ================= */}
          <div className="flex flex-wrap gap-3 mb-10">

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category}

                  <span
                    className={`ml-2 ${
                      active
                        ? 'text-slate-300'
                        : 'text-slate-400'
                    }`}
                  >
                    {categoryCount(category)}
                  </span>
                </button>
              );
            })}

          </div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-6">

            {filteredServices.map((service) => {
              const isOpen = openService === service.id;

              return (
                <article
                  key={service.id}
                  className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? 'border-blue-400 shadow-lg'
                      : 'border-slate-200 hover:shadow-md'
                  }`}
                >

                  {/* Card top */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="w-full text-left p-7"
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div className="flex items-start gap-5">

                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                          {String(service.id).padStart(2, '0')}
                        </div>

                        <div>

                          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
                            {service.category}
                          </div>

                          <h3 className="text-xl font-black text-slate-900">
                            {service.title}
                          </h3>

                          <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-xl">
                            {service.shortDesc}
                          </p>

                        </div>

                      </div>

                      <div
                        className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-lg font-bold transition ${
                          isOpen
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </div>

                    </div>

                  </button>

                  {/* Card details */}
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50 px-7 py-7">

                      <div className="space-y-6">

                        <div>
                          <h4 className="text-sm font-black text-slate-900">
                            What it covers
                          </h4>

                          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            {service.covers}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-black text-slate-900">
                            When it applies
                          </h4>

                          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            {service.applies}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-black text-slate-900">
                            How it's charged
                          </h4>

                          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            {service.charged}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-black text-slate-900">
                            Notes
                          </h4>

                          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            {service.notes}
                          </p>
                        </div>

                      </div>

                    </div>
                  )}

                </article>
              );
            })}

          </div>

          {/* No results */}
          {filteredServices.length === 0 && (
            <div className="py-20 text-center">

              <h3 className="text-xl font-black text-slate-900">
                No services found
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
                className="mt-5 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Ready to get started?
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            Let Shipext handle your logistics.
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Tell us about your products, order volume and fulfilment
            requirements and we will help build the right solution for your business.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-bold transition"
          >
            Get a Quote
          </a>

        </div>
      </section>
    </>
  );
}