import React from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSeaction";
import MapSection from "./components/MapSection";
import Navbar from "./components/NavBar";
import PlanSection from "./components/PlanSection";

const App = () => {
  return (
    <div className="font-sans text-gray-900 ">
      <header className="relative ">
        <Navbar />
      </header>

      <main className="relative ">
        <section id="home" className="relative">
          <div className="bg-custom-image bg-cover bg-center h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-transparent"></div>
            <div className="container absolute w-96  text-left mx-20">
              <p className="text-4xl md:text-5xl lg:text-6xl mx-12 font-bold text-white text-shadow">
                Find Your <span className="text-yellow-300">Best</span> Tours
                with <span className="text-yellow-300">Us</span>
              </p>
            </div>
          </div>
        </section>

        <section id="about">
          {/* About Section */}
          <AboutSection />
        </section>

        <section id="services">
          {/* Services Section */}
          <PlanSection />
        </section>

        <section id="contact">
          {/* Contact Section */}
          <ContactSection />
        </section>

        <MapSection />
      </main>

      <footer className="relative ">
        <FooterSection />
      </footer>
    </div>
  );
};

export default App;
