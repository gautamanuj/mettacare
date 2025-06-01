// src/components/HeroImage.jsx
import React from "react";
import heroBg from "../assets/herobg.jpeg";

export default function HeroImage() {
  return (
    <div
      className="
        w-screen
        h-[75vh] sm:h-[75vh] md:h-[75vh] lg:h-[75vh]
        relative left-1/2 right-1/2 -mx-[50vw]
        flex items-center justify-center
        bg-no-repeat bg-cover bg-center
        m-0 p-0
      "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    />
  );
}
