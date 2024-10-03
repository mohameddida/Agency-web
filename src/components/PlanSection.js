import React from "react";
import { Link } from "react-router-dom";
import plan1 from "../assets/homeCover.png";
import plan2 from "../assets/plan2.jpg";
import plan3 from "../assets/plan3.jpg";

const PlanSection = () => {
  const plans = [
    {
      id: 1,
      title: "Excursion",
      description: "Chebika, Tamerza, Mides, Ong Jmal",
      image: plan1,
    },
    {
      id: 2,
      title: "Circuits",
      description: "Circuits à la carte",
      image: plan2,
    },
    {
      id: 3,
      title: "Trekking",
      description: "4 heures dans le canyon de Mides",
      image: plan3,
    },
  ];

  return (
    <section className="min-h-screen py-12 px-4 bg-blue-50">
      <div className="text-left mb-12 container mx-auto md:ml-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
          Nos Plans pour Vous
        </h3>
        <p className="text-gray-600 text-base sm:text-lg mt-2">
          Faites le bon choix de destination avec le bon plan
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                className="w-full h-48 object-cover rounded-2xl mb-4"
                src={plan.image}
                alt={plan.title}
              />
              <h3 className="text-xl font-bold text-blue-800">{plan.title}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <Link
                to={`/plan/${plan.id}`}
                className="text-blue-500 hover:underline mt-4"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
