import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Import your logo

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const [open, setOpen] = useState(false);

  // Function to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("bg-blue-950");
      } else {
        setNavBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ease-in-out ${navBackground}`}
    >
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg flex">
          <img className="block w-20 h-20" src={logo} alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-950 text-white p-4">
          <a href="#home" className="block py-2 hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="block py-2 hover:text-gray-200">
            About
          </a>
          <a href="#services" className="block py-2 hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="block py-2 hover:text-gray-200">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
