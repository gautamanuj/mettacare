import React from "react";

// SVG Icon for all testimonials (uniform color)
const icon = (
  <svg className="h-8 w-8 text-gold mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M7 17a4 4 0 01.88-7.93A5 5 0 0112 6c2.21 0 4 1.79 4 4 0 1.38-.56 2.63-1.47 3.54A4.992 4.992 0 0112 20a4.992 4.992 0 01-4.53-2.79"/>
  </svg>
);

// Testimonials data
const testimonials = [
  {
    name: "Stephen Caton",
    role: "Founder, MettaCare Services",
    note: "As someone living with Motor Neurone Disease, I know how much difference the right support can make. At MettaCare, our mission is to provide genuine, person-centred care grounded in loving-kindness and respect."
  },
  {
    name: "Jessica Caton",
    role: "Support Worker & Daughter",
    note: "Supporting my father and working with MettaCare has taught me the importance of compassion in every moment. We strive to treat every client as family, with real empathy and care."
  },
  {
    name: "Divashni Prakash",
    role: "Support Worker",
    note: "Working at MettaCare, I've seen how meaningful support changes lives. We focus on listening, understanding, and empowering every individual to reach their goals in a safe and welcoming environment."
  }
];

export default function Testimonials() {
  return (
    <section className="font-sans text-base py-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-navy mb-2">What People Say About Us</h2>
        <p className="text-gold text-center text-lg mb-10 font-medium">
          Voices from our founder and dedicated support team.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center border-t-4 hover:shadow-2xl transition"
              style={{
                borderColor: i % 2 === 0 ? "#D4AF37" : "#0a174e"
              }}
            >
              {icon}
              <p className="italic text-gray-700 text-center mb-3">
                "{t.note}"
              </p>
              <div className="mt-2 flex flex-col items-center">
                <span className="font-bold text-navy">{t.name}</span>
                <span className="text-xs text-gold font-semibold">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review Form (Netlify Form) */}
        <div className="bg-white rounded-xl shadow p-6 mt-4">
          <h3 className="text-2xl text-navy font-bold mb-2 text-center">Leave a Review</h3>
          <form
            name="review"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4 max-w-md mx-auto"
          >
            {/* Netlify hidden input for form detection */}
            <input type="hidden" name="form-name" value="review" />
            {/* Honeypot anti-bot field (hidden from users) */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label className="block text-navy font-semibold mb-1" htmlFor="name">Your Name</label>
              <input
                className="w-full border border-navy rounded px-3 py-2"
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-navy font-semibold mb-1" htmlFor="role">Your Role</label>
              <input
                className="w-full border border-navy rounded px-3 py-2"
                id="role"
                name="role"
                type="text"
                required
                placeholder="(e.g. Client, Family Member, Support Worker)"
              />
            </div>
            <div>
              <label className="block text-navy font-semibold mb-1" htmlFor="note">Your Review</label>
              <textarea
                className="w-full border border-navy rounded px-3 py-2"
                id="note"
                name="note"
                rows="4"
                required
                placeholder="Share your experience..."
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-navy font-bold px-6 py-2 rounded hover:bg-navy hover:text-gold transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
