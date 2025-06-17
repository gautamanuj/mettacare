import React from "react";
import { Link } from "react-router-dom";

const TEAM_IMG =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80";

export default function Home() {
  return (
    <section className="min-h-screen font-sans text-base text-gray-900 bg-gray-50">
      {/* Book a Consultation Button */}
      <div className="flex justify-center mt-8 mb-10 z-10 relative">
        <Link
          to="/contact"
          className="bg-gold text-navy font-semibold px-8 py-3 rounded-xl shadow-lg text-lg hover:bg-white hover:text-navy transition border-2 border-navy focus:outline-none focus:ring-4 focus:ring-gold/30"
        >
          Book a Free Consultation
        </Link>
      </div>

      {/* About Section with Team Image */}
      <div className="max-w-4xl mx-auto my-12 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
        <img
          src={TEAM_IMG}
          alt="MettaCare Team"
          className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow border-4 border-gold"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Who We Are</h2>
          <p className="text-lg text-gray-800 mb-2">
            MettaCare Services is a registered NDIS provider committed to genuine, respectful support for all. Our experienced local team brings loving-kindness (“Metta”) to every interaction, helping you achieve independence and connection.
          </p>
          <Link to="/about" className="text-gold font-semibold underline hover:text-navy transition text-base">
            Learn more about our story &rarr;
          </Link>
        </div>
      </div>

      {/* How We Help Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-navy mb-8">How We Help</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-xl shadow hover:shadow-xl transition p-6 text-center flex flex-col items-center">
            <svg className="h-12 w-12 text-gold mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M2 20v-2a4 4 0 014-4h12a4 4 0 014 4v2" />
            </svg>
            <div className="font-semibold text-navy text-lg mb-1">Personal & Daily Support</div>
            <div className="text-gray-700 text-base">Empowering independence in everyday life, at home and in the community.</div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-100 rounded-xl shadow hover:shadow-xl transition p-6 text-center flex flex-col items-center">
            <svg className="h-12 w-12 text-navy mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
              <circle cx="12" cy="13" r="4" strokeWidth="2"/>
            </svg>
            <div className="font-semibold text-navy text-lg mb-1">Community Inclusion</div>
            <div className="text-gray-700 text-base">Social, recreational and work support—your goals, your way.</div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-100 rounded-xl shadow hover:shadow-xl transition p-6 text-center flex flex-col items-center">
            <svg className="h-12 w-12 text-gold mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="6" rx="3"/>
              <path d="M16 16v2a2 2 0 11-4 0v-2" />
            </svg>
            <div className="font-semibold text-navy text-lg mb-1">Transport & Tech</div>
            <div className="text-gray-700 text-base">Safe transport and assistive technology to keep you moving forward.</div>
          </div>
        </div>
      </div>

      {/* Testimonials Preview */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <svg className="h-8 w-8 text-gold mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M7 17a4 4 0 01.88-7.93A5 5 0 0112 6c2.21 0 4 1.79 4 4 0 1.38-.56 2.63-1.47 3.54A4.992 4.992 0 0112 20a4.992 4.992 0 01-4.53-2.79"/>
          </svg>
          <div className="italic text-navy text-lg mb-2 text-center">
            “Hear Our Stories” <span className="text-gold"> </span>
          </div>
          <Link to="/testimonials" className="text-navy underline font-semibold hover:text-gold transition text-base">
            More Stories &rarr;
          </Link>
        </div>
      </div>

      {/* Values / Why Choose Us */}
      <div className="max-w-4xl mx-auto mb-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy text-gold rounded-xl p-6 text-center font-semibold shadow text-base">
          Compassionate, person-centred care
        </div>
        <div className="bg-gold text-navy rounded-xl p-6 text-center font-semibold shadow text-base">
          Local expertise & experience
        </div>
        <div className="bg-white text-navy rounded-xl p-6 text-center font-semibold shadow border-2 border-navy text-base">
          Respect, integrity, and inclusion
        </div>
      </div>
    </section>
  );
}
