import React from "react";
import plan1 from "../assets/homeCover.png";
import plan2 from "../assets/plan2.jpg";
import plan3 from "../assets/plan3.jpg";

const PlanSection = () => {
  return (
    <section className="min-h-screen py-12 px-4 bg-blue-50">
      <div className="text-left mb-12 container mx-auto md:ml-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
          Our Plans for You
        </h3>
        <p className="text-gray-600 text-base sm:text-lg mt-2">
          Make the right destination with the right plan
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Plan 1 */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-36 sm:h-48 object-cover rounded-2xl mb-4"
              src={plan1}
              alt="Montagne"
            />
            <h3 className="text-lg sm:text-xl font-bold text-blue-800">
              Excursion
            </h3>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Oasis de montagne Chebika, Tamerza, Mides, Ong Jmal
            </p>
          </div>

          {/* Plan 2 */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-36 sm:h-48 object-cover rounded-2xl mb-4"
              src={plan2}
              alt="Excursion"
            />
            <h3 className="text-lg sm:text-xl font-bold text-blue-800">
              sercuits
            </h3>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              sercuits Ksar Ghilane
            </p>
          </div>

          {/* Plan 3 */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-36 sm:h-48 object-cover rounded-2xl mb-4"
              src={plan3}
              alt="Trekking/Tours"
            />
            <h3 className="text-lg sm:text-xl font-bold text-blue-800">
              Trekking
            </h3>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              4 Hours in Canyon Mides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
