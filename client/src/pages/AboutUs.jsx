import React from "react";
import StephenImg from "../assets/Stephen.jpg"; // Local image for Stephen
import DivashniImg from "../assets/div.jpg";    // Local image for Divashni

const team = [
  {
    name: "Stephen Caton",
    role: "Client",
    bio: `My name is Stephen Caton, a client of MettaCare Services.
As a Theravada Buddhist monk, I have learned the value of discipline, loving-kindness, and compassion.
Living with Motor Neurone Disease for the past 13 years has given me a unique understanding of the challenges faced by those who need support. I have experienced both excellent and difficult care, and this has shown me the importance of genuine, person-centred support.

At MettaCare, their intention is simple: they offer you the respect, kindness, and understanding I would wish for myself. They are here to support you with compassion at every step as they have done with me.`,
    img: StephenImg,
  },
  {
    name: "Divashni Prakash",
    role: "Support Worker",
    bio: `My name is Divashni Prakash, and I am delighted to serve as a support worker at MettaCare Services.

I am passionate about empowering people with disabilities, and my approach is grounded in person-centred and empathetic care—values that perfectly reflect MettaCare’s philosophy. My experience includes supporting individuals with a range of needs, encouraging independence, assisting with daily living tasks, and always fostering a safe and welcoming environment.

I believe in building trusting relationships with clients, families, and colleagues through open and compassionate communication. I hold qualifications in medication management, first aid, and specialised care skills, ensuring I can provide safe, skilled support tailored to each person.

I am proactive in overcoming challenges and am committed to maintaining the respect and dignity of every individual I assist. Lifelong learning is important to me, and I strive to stay up-to-date with best practices so that we can continuously improve the support we offer.

I am excited to be part of MettaCare’s journey, working together to enrich the lives of our clients and make a positive impact on our community.`,
    img: DivashniImg,
  },
];

export default function AboutUs() {
  return (
    <section className="font-sans text-base text-gray-900 py-12 px-4 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-navy text-center">About MettaCare Services</h2>
      <p className="mb-8 text-xl text-gold font-semibold text-center">Compassion. Inclusion. Excellence.</p>

      {/* Who We Are */}
      <div className="mb-8 bg-white rounded-xl shadow p-6">
        <h3 className="text-2xl font-bold text-navy mb-2 text-center">Who We Are</h3>
        <p className="text-gray-700 mb-2 text-center">
          MettaCare Services is a Western Sydney-based NDIS provider dedicated to empowering people of all abilities to live their best life.
          Our name, “Metta,” comes from a Pali word meaning loving-kindness—reflecting our commitment to compassion, respect, and genuine care for every participant.
        </p>
        <p className="text-gray-700 text-center">
          We are proud to support people from diverse backgrounds, and our team brings together deep local knowledge, industry expertise, and a heartfelt approach to support.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-navy text-gold p-6 rounded-lg shadow border-2 border-gold text-center">
          <h4 className="font-bold text-xl mb-2">Our Mission</h4>
          <p>
            To deliver high quality, person-centred support that empowers participants to achieve independence, inclusion, and well-being.
          </p>
        </div>
        <div className="bg-gold text-navy p-6 rounded-lg shadow border-2 border-navy text-center">
          <h4 className="font-bold text-xl mb-2">Our Vision</h4>
          <p>
            A community where everyone is valued, connected, and has the opportunity to live their fullest life.
          </p>
        </div>
        <div className="bg-white text-navy p-6 rounded-lg shadow border-2 border-navy text-center">
          <h4 className="font-bold text-xl mb-2">Our Values</h4>
          <ul className="list-disc ml-5 text-base text-left">
            <li>Respect</li>
            <li>Empathy</li>
            <li>Integrity</li>
            <li>Empowerment</li>
            <li>Inclusion</li>
          </ul>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-navy mb-4 text-center">Meet Our Team</h3>
        <div className="flex flex-col md:flex-row gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow p-5 flex-1"
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-20 w-20 rounded-full mb-3 border-4 border-gold shadow"
              />
              <div className="text-lg font-semibold text-navy">{member.name}</div>
              <div className="text-gold mb-2">{member.role}</div>
              <p className="text-center text-gray-600 text-sm whitespace-pre-line">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance and Code of Conduct */}
      <div className="bg-navy text-gold p-5 rounded-xl shadow mb-4 text-center">
        <p>
          We uphold the{" "}
          <a
            className="underline text-white font-semibold hover:text-gold transition"
            href="https://www.ndiscommission.gov.au/providers/ndis-code-conduct"
            target="_blank"
            rel="noopener noreferrer"
          >
            NDIS Code of Conduct
          </a>{" "}
          and are committed to the highest standards of care and compliance. For more information about your rights and our services, visit the{" "}
          <a
            className="underline text-white font-semibold hover:text-gold transition"
            href="https://www.ndis.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NDIS Official Website
          </a>
          .
        </p>
      </div>
    </section>
  );
}
