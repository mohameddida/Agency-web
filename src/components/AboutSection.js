import React from "react";
import logo from "../assets/logoabout.png";

const AboutSection = () => {
  return (
    <section className="bg-blue-200 min-h-screen  w-full flex items-center justify-center py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Welcome to Golden Dunes Voyages
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            Golden Dunes Voyages is a travel agency and tour provider in Tozeur.
            We offer various programs in the desert of Tozeur and southern
            Tunisia. Our mission is to provide you with comfort, guidance, and
            fun on our tours. Join us to explore different places with a perfect
            blend of affordability and quality service.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
            src={logo}
            alt="Golden Dunes Voyage logo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
