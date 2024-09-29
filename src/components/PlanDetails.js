import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import excursions1 from "../assets/program/1/image1.jpg";
import excursions2 from "../assets/program/1/image2.jpg";
import excursions3 from "../assets/program/1/image3.jpg";
import cercuit1 from "../assets/program/2/image21.jpg";
import cercuit2 from "../assets/program/2/image22.jpg";
import cercuit3 from "../assets/program/2/image23.jpg";
import trek1 from "../assets/program/3/image31.jpg";
import trek2 from "../assets/program/3/image32.jpg";
import trek3 from "../assets/program/3/image33.jpg";
const PlanDetails = () => {
  const trekkingPlans = [
    {
      id: 3,
      title: "Trekking Canyon de Mides",
      images: [trek1, trek2, trek3],
      description: [
        "Le trek se déroule en partie dans le canyon de Midès.",
        "Une fois en bas, suivez l’eau jusqu’à la grande cascade de Tamerza.",
        "Obligatoirement accompagné par un guide local.",
        "À faire à l’automne et au printemps, par beau temps.",
        "Risque de crue soudaine en période orageuse.",
      ],
    },
    {
      id: 2,
      title: "Circuit 4x4",
      images: [cercuit1, cercuit2, cercuit3],
      description: [
        "Départ de Tozeur vers Douze.",
        "Arrêt 1 : Chott el-Jérid.",
        "Arrêt 2 : Debebcha.",
        "Arrêt 3 : Fatnasa.",
        "Arrêt 4 : Douze (temps libre, déjeuner, extras comme quad et dromadaire).",
        "Direction camp Sabria (dune insolite) ou camp Zmela.",
        "Circuit de 3 jours :",
        "1er Jour :",
        "- Arrêt 1 : Chott el-Jérid.",
        "- Arrêt 2 : Debebcha.",
        "- Arrêt 3 : Fatnasa.",
        "- Arrêt 4 : Douze (temps libre, déjeuner, extras comme quad et dromadaire).",
        "Direction camp Sabria ou camp Zmela. Dîner spectaculaire.",
        "2e Jour : Direction Matmata :",
        "- Arrêt 1 : Chenini.",
        "- Arrêt 2 : 7 Sleep.",
        "Direction vers Douiret (camp Chez Raouf). Dîner spectaculaire.",
        "3e Jour : Retour vers Tozeur :",
        "- Arrêt 1 : Ksar Hdada.",
        "- Arrêt 2 : Ksar Hall.",
      ],
    },
    {
      id: 1,
      title: "Excursion 4x4 - Oasis de Montagne",
      images: [excursions1, excursions2, excursions3],
      description: [
        "Visite de Chebika, Tamerza, et Midès, à 60 kilomètres de Tozeur.",
        "Chebika : Un oued descend le long d'une montagne escarpée, formant des cascades et des ruisseaux.",
        "Tamerza : Un vieux village abandonné, un paysage montagneux spectaculaire, et une oasis luxuriante alimentée par une grande cascade.",
        "Midès : Un canyon vertigineux offrant une vue spectaculaire inoubliable.",
        "Excursion Ong Jmal :",
        "Ong Jmal, 'le cou du chameau', est un magnifique site en plein Sahara.",
        "Sensations fortes garanties avec la conduite dans les dunes.",
        "Visite du village du cinéma Star Wars.",
      ],
    },
  ];

  const { id } = useParams();
  const planId = parseInt(id);
  const selectedPlan = trekkingPlans.find((plan) => plan.id === planId);

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.height = "auto"; // Reset height
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [selectedPlan?.description]);

  if (!selectedPlan) {
    return <p className="text-center text-xl">Plan not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row mt-6 items-center justify-center p-4 md:p-8 lg:p-16 bg-blue-50">
      {/* Image Section */}
      <div className="container h-auto w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center flex-wrap gap-3">
        {selectedPlan.images.map((images) => (
          <img
            src={images}
            alt="plan_image"
            className="w-[250px] h-[200px]  md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {selectedPlan.title}
        </h1>
        <div className="w-full lg:w-100 lg:pl-12">
          <ul className=" pl-5 space-y-2">
            {selectedPlan.description.map((point, index) => (
              <li key={index} className="text-sm text-gray-800 list-item w-100">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
