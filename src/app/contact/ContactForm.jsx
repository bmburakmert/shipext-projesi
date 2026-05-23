"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    e.target.reset();
    alert("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Full Name"
        className="w-full p-3 border rounded-xl"
      />

      <input
        name="subject"
        placeholder="Subject"
        className="w-full p-3 border rounded-xl"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-xl"
      />

      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-3 border rounded-xl"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded-xl"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}