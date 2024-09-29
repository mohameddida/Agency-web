import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import MapSection from "./components/MapSection";
import Navbar from "./components/NavBar";
import PlanDetails from "./components/PlanDetails";
import PlanSection from "./components/PlanSection";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <header className="w-full">
        <Navbar />
      </header>

      <main className="relative ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="relative w-full h-screen">
                  <div className="bg-custom-image bg-cover bg-center h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-transparent"></div>

                    <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl">
                      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow animate-fadeInUp">
                        Trouvez Vos{" "}
                        <span className="text-yellow-300">Meilleures</span>{" "}
                        Excursions avec{" "}
                        <span className="text-yellow-300">Nous</span>
                      </p>
                    </div>
                  </div>
                </section>

                <section id="about" className="w-full  bg-white">
                  <AboutSection />
                </section>

                <section id="services" className="w-full bg-gray-100">
                  <PlanSection />
                </section>

                <section id="contact" className="w-full  bg-white">
                  <ContactSection />
                </section>

                <MapSection />
              </>
            }
          />
          <Route
            path="/plan/:id"
            element={
              <div className="w-full flex pt-[80px]">
                <PlanDetails />
              </div>
            }
          />
          <Route
            path="**"
            element={
              <>
                <section id="home" className="relative w-full h-screen">
                  <div className="bg-custom-image bg-cover bg-center h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-transparent"></div>

                    <div className="relative text-left px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl">
                      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow animate-fadeInUp">
                        Find Your <span className="text-yellow-300">Best</span>{" "}
                        Tours with <span className="text-yellow-300">Us</span>
                      </p>
                    </div>
                  </div>
                </section>

                <section id="about" className="w-full  bg-white">
                  <AboutSection />
                </section>

                <section id="services" className="w-full  bg-gray-100">
                  <PlanSection />
                </section>

                <section id="contact" className="w-full  bg-white">
                  <ContactSection />
                </section>

                <MapSection />
              </>
            }
          />
        </Routes>
      </main>

      <footer className="relative w-full bg-blue-950 items-end">
        <FooterSection />
      </footer>
    </div>
  );
};

export default App;
