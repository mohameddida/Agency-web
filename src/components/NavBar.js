import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || location.pathname !== "/") {
        setNavBackground("bg-blue-950");
      } else {
        setNavBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ease-in-out ${navBackground}`}
    >
      <div className="container mx-auto p-6 flex items-center justify-between ">
        <div className="flex items-center w-1/2">
          <RouterLink to="/" className="flex items-center gap-2 w-100">
            <img className="w-16 h-10 md:w-20 md:h-16" src={logo} alt="Logo" />
            <h2 className=" lg:font-extrabold xl:text-4xl lg:text-xl md:text-base md:font-bold text-white sm:hidden">
              {" "}
              Golden Dunes Voyages
            </h2>
          </RouterLink>
        </div>

        <div className="hidden md:flex space-x-6 text-lg">
          <RouterLink to="/" className="text-white hover:text-gray-200">
            Accueil
          </RouterLink>
          {location.pathname === "/" ? (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                À Propos
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-200 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <RouterLink
                to="/about"
                className="text-white hover:text-gray-200"
              >
                À Propos
              </RouterLink>
              <RouterLink
                to="/services"
                className="text-white hover:text-gray-200"
              >
                Services
              </RouterLink>
              <RouterLink
                to="/contact"
                className="text-white hover:text-gray-200"
              >
                Contact
              </RouterLink>
            </>
          )}
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

      {open && (
        <div className="md:hidden bg-blue-950 text-white">
          <div className="p-4 space-y-2 text-center">
            <RouterLink
              to="/"
              className="block py-2 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Accueil
            </RouterLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              À Propos
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-gray-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
