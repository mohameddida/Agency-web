import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import logo from "../assets/logoabout.png";

const FooterSection = () => {
  return (
    <footer className="bg-blue-950 text-white w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="mx-auto mb-4"
            height="154"
            width="247"
          />
          <p className="mt-4 font-medium text-center">
            Find your best Tours with us
          </p>
        </div>

        {/* Location and Contact Information */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
          <p className="font-medium">
            Location: Rue Farhat, 2200 Tozeur, Tunisia
          </p>
          <p className="font-medium">Email: goldendunesvoyages@gmail.com</p>
          <p className="font-medium">
            Phone: +216 97 346 845 / +216 76 452 513
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl mb-4">Social Links</h3>
          <div className="flex justify-center space-x-6 text-white text-2xl">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <BiLogoGmail />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-sm">
        <p>&copy; 2024 Golden Dunes Voyage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
