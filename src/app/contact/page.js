import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">

      {/* LEFT */}
      <div>
        <h1 className="text-3xl font-black">Contact Us</h1>
        <p className="text-sm text-slate-500 mt-2">
          Warehouse & logistics support
        </p>

        <div className="mt-6 text-sm">
          <p><b>Phone:</b> +44 7388 211 602</p>
          <p><b>Email:</b> shipextltd@gmail.com</p>
        </div>
      </div>

      {/* RIGHT */}
      <ContactForm />

    </div>
  );
}