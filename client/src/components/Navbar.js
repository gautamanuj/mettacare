import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons: npm install lucide-react (or use SVGs directly)
import logo from "../assets/logo.jpeg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Our Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handles closing menu on nav click (optional: improves UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-navy text-gold shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="MettaCare Logo"
            className="h-10 w-10 object-contain rounded-full bg-white p-1 shadow"
          />
          <span className="font-extrabold text-xl tracking-wide text-gold drop-shadow">
            MettaCare Services
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon - Only on mobile */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-8 w-8 text-gold" /> : <Menu className="h-8 w-8 text-gold" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-gold pb-4 px-4 animate-slideDown z-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className="block py-2 text-lg font-semibold hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
