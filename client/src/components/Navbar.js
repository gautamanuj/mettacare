import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // Make sure you have a logo here!

const Navbar = () => (
  <nav className="bg-navy text-gold p-4 flex justify-between items-center shadow">
    <div className="flex items-center space-x-3">
      {/* Logo */}
      <img
        src={logo}
        alt="MettaCare Logo"
        className="h-10 w-10 object-contain rounded-full bg-white p-1 shadow"
        style={{ backgroundColor: "#fff" }}
      />
      <span className="font-extrabold text-xl tracking-wide text-gold drop-shadow">
        MettaCare Services
      </span>
    </div>
    <div className="space-x-4 font-semibold">
      <Link to="/" className="hover:text-white transition">Home</Link>
      <Link to="/services" className="hover:text-white transition">Our Services</Link>
      <Link to="/testimonials" className="hover:text-white transition">Testimonials</Link>
      <Link to="/about" className="hover:text-white transition">About Us</Link>
      <Link to="/contact" className="hover:text-white transition">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
