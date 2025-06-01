import React from "react";

// SVG icons for each service, using consistent text-gold for style
const services = [
  {
    title: "Personal Care",
    description: "Support with showering, dressing, mobility, and daily personal hygiene for independence and dignity.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Participation",
    description: "Helping you access social, recreational, and community activities that promote inclusion and confidence.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M2 20v-2a4 4 0 014-4h12a4 4 0 014 4v2" />
      </svg>
    ),
  },
  {
    title: "Transport Support",
    description: "Safe, reliable transport to appointments, programs, work, and community activities.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="6" rx="3" />
        <path d="M16 16v2a2 2 0 11-4 0v-2" />
      </svg>
    ),
  },
  {
    title: "Household Tasks",
    description: "Assistance with cleaning, meal preparation, laundry, and household management to maintain a safe and healthy home.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3h18M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
        <rect x="9" y="13" width="6" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Assistive Technology",
    description: "Access to the right tools and technology to increase your independence and support your needs.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Respite Care",
    description: "Short-term care to give families and carers a well-deserved break, ensuring ongoing wellbeing for all.",
    icon: (
      <svg className="h-10 w-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const OurServices = () => (
  <section className="font-sans text-base py-12 px-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
    {/* Heading - consistent with other pages */}
    <h2 className="text-4xl font-bold mb-6 text-navy text-center">Our NDIS Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition flex flex-col items-center"
        >
          {service.icon}
          <h3 className="text-xl font-semibold text-navy mb-2 text-center">{service.title}</h3>
          <p className="text-gray-700 text-center">{service.description}</p>
        </div>
      ))}
    </div>
    {/* Learn more link - styled in navy/gold */}
    <div className="mt-10 text-center">
      <a
        href="https://www.ndis.gov.au/participants/home-and-living"
        target="_blank"
        rel="noopener noreferrer"
        className="text-navy underline font-semibold hover:text-gold transition"
      >
        Learn more about NDIS supports
      </a>
    </div>
  </section>
);

export default OurServices;
