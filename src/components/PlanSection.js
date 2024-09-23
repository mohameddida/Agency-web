import React from "react";
import plan1 from "../assets/plan1.jpg";
import plan2 from "../assets/plan2.jpg";
import plan3 from "../assets/plan3.jpg";

const PlanSection = () => {
  return (
    <section className="min-h-screen py-12 px-4 bg-blue-50">
      <div className="text-left m-12 container">
        <h3 className="text-3xl font-bold text-blue-800">Our Plans for You</h3>
        <p className="text-gray-600 text-lg mt-2">
          Make the right destination with the right plan
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Plan 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-2xl mb-4"
              src={plan1}
              alt="Montagne"
            />
            <h3 className="text-xl font-bold text-blue-800">Montagne</h3>
            <p className="text-gray-600 mt-2">
              Oasis de montagne Chebika, Tamerza, Mides
            </p>
          </div>

          {/* Plan 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-2xl mb-4"
              src={plan2}
              alt="Excursion"
            />
            <h3 className="text-xl font-bold text-blue-800">Excursion</h3>
            <p className="text-gray-600 mt-2">
              Chott Djerid + Canyon Sidi Bouhlel
            </p>
          </div>

          {/* Plan 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              className="w-full h-48 object-cover rounded-2xl mb-4"
              src={plan3}
              alt="Trekking/Tours"
            />
            <h3 className="text-xl font-bold text-blue-800">Trekking/Tours</h3>
            <p className="text-gray-600 mt-2">4 Hours in Canyon Mides</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
