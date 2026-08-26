import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-white">

        <div className="
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
        " />

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">

          <h1 className="text-5xl font-black text-slate-900">
            Contact
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Support Team
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch with our logistics team. We usually respond within 2 hours during business hours.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Info Card */}
          <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <h2 className="text-xl font-black mb-3">Get in Touch</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our team is here to help you with fulfillment, logistics and warehouse inquiries.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm">

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition">
              <p className="font-bold text-slate-900">📞 Phone</p>
              <p className="text-slate-600">+90 553 823 95 00</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition">
              <p className="font-bold text-slate-900">✉️ Email</p>
              <p className="text-slate-600">info@shipext.com</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl p-8">

          <ContactForm />

        </div>

      </section>

    </div>
  );
}