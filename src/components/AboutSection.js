import React from "react";
import logo from "../assets/logoabout.png";

const AboutSection = () => {
  return (
    <section className="bg-blue-950 min-h-screen text-white w-full relative flex items-center justify-center py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to Golden Dunes Voyage
          </h2>
          <p className="leading-relaxed text-base md:text-lg">
            Golden Dunes Voyage is a travel agency and tour provider in Tozeur.
            We offer various programs in the desert of Tozeur and southern
            Tunisia. Our mission is to provide you with comfort, guidance, and
            fun on our tours. Join us to explore different places with a perfect
            blend of affordability and quality service.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
            src={logo}
            alt="Golden Dunes Voyage logo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
