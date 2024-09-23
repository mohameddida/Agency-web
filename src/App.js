import React from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import MapSection from "./components/MapSection";
import Navbar from "./components/NavBar";
import PlanSection from "./components/PlanSection";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header with Navbar */}
      <header className="relative w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Home Section */}
        <section id="home" className="relative w-full h-screen">
          <div className="bg-custom-image bg-cover bg-center h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-transparent"></div>

            {/* Text Content */}
            <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
                Find Your <span className="text-yellow-300">Best</span> Tours
                with <span className="text-yellow-300">Us</span>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full  bg-white">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className="w-full  bg-gray-100">
          <PlanSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full  bg-white">
          <ContactSection />
        </section>

        {/* Map Section */}
        <MapSection />
      </main>

      {/* Footer Section */}
      <footer className="relative w-full bg-blue-950">
        <FooterSection />
      </footer>
    </div>
  );
};

export default App;
