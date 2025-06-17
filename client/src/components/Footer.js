import React from "react";

const Footer = () => (
  <footer className="bg-navy text-gold py-8 px-4 mt-12">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      {/* Acknowledgement of Country */}
      <div className="italic text-base mb-6 text-center">
        We acknowledge the Traditional Custodians of the land on which we work and live, the Darug people, and pay our respects to Elders past and present.
      </div>
      {/* Link Row */}
      <div className="flex flex-wrap justify-center gap-6 text-lg mb-4">
        <a
          href="https://www.ndis.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          NDIS Official
        </a>
        <a
          href="https://www.oaic.gov.au/privacy/your-privacy-rights"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          Privacy
        </a>
        <a
          href="https://www.ndiscommission.gov.au/providers/ndis-code-conduct"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          Code of Conduct
        </a>
        <a
          href="/contact"
          className="underline underline-offset-4 hover:text-white transition"
        >
        </a>
      </div>
      {/* Copyright */}
      <div className="mt-4 text-sm text-gold/80 text-center">
        &copy; {new Date().getFullYear()} MettaCare Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
