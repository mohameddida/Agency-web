import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import logo from "../assets/logoabout.png";

const FooterSection = () => {
  return (
    <footer className="bg-blue-100  w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center items-center">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="mx-auto mb-4"
            height="75"
            width="150"
          />
          <p className="mt-4 font-medium text-center text-base md:text-lg">
            Trouvez Vos Meilleures Excursions avec Nous
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl md:text-2xl mb-4">Contactez-nous</h3>
          <p className="font-medium text-base md:text-lg">
            Localisation: Rue Farhat, 2200 Tozeur, Tunisia
          </p>
          <p className="font-medium text-base md:text-lg">
            E-mail: goldendunesvoyages@gmail.com
          </p>
          <p className="font-medium text-base md:text-lg">
            Numéro de téléphone : +216 97 346 845 / +216 76 452 513
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl md:text-2xl mb-4">Liens Sociaux</h3>
          <div className="flex justify-center space-x-6 text-gray-500  text-2xl md:text-3xl">
            <AiFillFacebook className="hover:text-blue-800" />
            <AiFillInstagram className="hover:text-blue-800" />
            <AiFillMail className="hover:text-blue-800" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm md:text-base">
        <p>&copy; 2024 Golden Dunes Voyage. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
