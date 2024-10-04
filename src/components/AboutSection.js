import React from "react";
import logo from "../assets/logoabout.png";

const AboutSection = () => {
  return (
    <section className="bg-blue-200 min-h-screen  w-full flex items-center justify-center py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Bienvenue chez Golden Dunes Voyages
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify font-medium">
            Golden Dunes Voyages est une agence de voyage et un fournisseur de
            circuits touristiques à Tozeur. <br /> Nous offrons divers
            programmes dans le désert de Tozeur et le sud de la Tunisie.
            <br /> Notre mission est de vous offrir confort, accompagnement et
            plaisir lors de nos excursions. <br />
            Rejoignez-nous pour explorer différents lieux avec un mélange
            parfait d'abordabilité et de service de qualité.
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
