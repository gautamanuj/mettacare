import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect this to your backend.
    setSubmitted(true);
  };

  return (
    // Main section with uniform font and background
    <section className="py-12 px-4 max-w-4xl mx-auto min-h-screen font-sans text-base text-gray-900 bg-gray-50">
      <h2 className="text-4xl font-bold mb-4 text-navy text-center">Contact MettaCare Services</h2>
      <p className="mb-6 text-lg text-gold font-semibold text-center">
        We're here to help—reach out with your questions or to book a consultation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Contact Details & Map */}
        <div className="flex flex-col justify-between">
          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-navy">Office Hours:</span>
              <span className="ml-2 text-gray-700">9:00am – 4:00pm (Mon–Fri)</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-navy">Phone:</span>
              <a href="tel:0466884164" className="ml-2 text-gold underline hover:text-navy transition">+61 490 718 130</a>
            </div>
            <div className="mb-2">
              <span className="font-bold text-navy">Email:</span>
              <a href="mailto:mettacare06@gmail.com" className="ml-2 text-gold underline hover:text-navy transition">mettacare06@gmail.com</a>
            </div>
            <div className="mb-2">
              <span className="font-bold text-navy">Address:</span>
              <span className="ml-2 text-gray-700">PO BOX 177 ROOTY HILL NSW 2766, NSW</span>
            </div>
          </div>
          {/* Map: lazy load, navy border */}
          <div className="rounded-lg overflow-hidden shadow border-2 border-navy">
            <iframe
              title="MettaCare Services Location"
              src="https://www.google.com/maps?q=Rooty+Hill+NSW+2766,+Australia&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
              <div>
                <label className="block text-navy font-semibold mb-1" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-navy rounded px-3 py-2 text-base"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-navy font-semibold mb-1" htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-navy rounded px-3 py-2 text-base"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-navy font-semibold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-navy rounded px-3 py-2 text-base"
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-navy font-bold px-6 py-2 rounded hover:bg-navy hover:text-gold transition text-base"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="p-6 bg-green-100 text-green-800 rounded shadow text-center font-semibold">
              Thank you for contacting us! We will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
