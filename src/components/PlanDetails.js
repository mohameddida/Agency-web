import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import excursions1 from "../assets/program/1/image1.jpg";
import excursions2 from "../assets/program/1/image2.jpg";
import excursions3 from "../assets/program/1/image3.jpg";
import excursions4 from "../assets/program/1/image5.jpg";
import cercuit1 from "../assets/program/2/image21.jpg";
import cercuit2 from "../assets/program/2/image22.jpg";
import cercuit3 from "../assets/program/2/image23.jpg";
import trek1 from "../assets/program/3/image31.jpg";
import trek2 from "../assets/program/3/image32.jpg";
import trek3 from "../assets/program/3/image33.jpg";
import trek4 from "../assets/program/3/image34.jpg";
const PlanDetails = () => {
  const trekkingPlans = [
    {
      id: 3,
      title: "Trekking Canyon de Mides",
      images: [trek1, trek2, trek3, trek4],
      description: [
        {
          title: "Trekking canyon de Mides",
          plan: [
            "Ce trek se déroule donc en partie dans le cayon qui entoure Midès, le plus sauvage et le plus déroutant des oasis de montagne. ",
            "La randonnée se déroule en partie dans le canyon de Midès. Il faudra donc y descendre,",
            "Une fois en bas il suffit de suivre l’eau jusqu’à la grande cascade de Tamerza ",
            "NB : obligatoirement ce trek est accompagné par un guide local",
            "Cette randonnée est à faire à l’automne et au printemps (lorsqu’il ne fait pas trop chaud), et par beau temps (en période orageuse, le risque de crue soudaine est très élevé dans le canyon )",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Circuit 4x4",
      images: [cercuit1, cercuit2, cercuit3],
      description: [
        {
          title: "circuit 2 jours ",
          plan: [
            "Depart de Tozeur vers Douze :",
            "Arret 1 : Chot djerid ",
            "Arret 2 : debebcha ",
            "Arret 3 : Fatnasa",
            "Arret 4 : Douze : tempt libre + dejunere + (quad + dromadaire en extrat)",
            "Direction camp Sabria (dune insolite) ou camp zmela Retour vers Tozeur",
          ],
        },
        {
          title: "circuit 3 jours",
          plan: [
            "1 jr :Depart de Tozeur vers Douze :",
            "Arret 1 : Chot djerid",
            " Arret 2 : debebcha",
            "Arret 3 : Fatnasa",
            " Arret 4 : Douze : tempt libre + dejunere + (quad + dromadaire en extrat) Direction camp Sabria (dune insolite) ou camp zmela ",
            "Diner spectaculeuse",
            "2 jrs :Direction Matmata",
            "Arret 1 : Chnenni",
            "Arret 2 : 7 sleep",
            "Direction vers  Douiret (chez raouf camp)",
            "Diner spectaculeuse",
            "3 jrs : Direction vers  tozeur",
            "Arret 1 : ksar hdada",
            "Arret 2 : ksar hallouf",
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Excursion 4x4 - Oasis de Montagne",
      images: [excursions1, excursions2, excursions3, excursions4],
      description: [
        {
          title: "Oasis de montagne : Chebika -Tamerza – Mides",
          plan: [
            "Chebika, Tamerza et Midès, à 60  kilomètres de Tozeur  ils sont des oasis de montagnes les plus émouvants du sud de la Tunisie.",
            "Chaque oasis est différente. À Chebika, un oued descend le long d'une montagne escarpée, formant des cascades et des ruisseaux.",
            "Le vieux village de Tamerza, abandonné comme un village fantôme, donne sur un paysage montagneux spectaculaire; son oasis luxuriante est alimentée par une cascade imposante.",
            "Enfin, Midès, niché dans un canyon vertigineux, offre une vue spectaculaire inoubliable.",
          ],
        },
        {
          title: "Ong Jmal",
          plan: [
            `Ong Jmal  « le cou du chameau » est un magnifique site,en plein Sahara. à Ong Jemel vous attendent des sensations fortes de conduite dans les dunes, offrant des moments exaltants sur le terrain sablonneux puis  en visitant le village du cinéma Star Wars, où la saga des films emblématiques a pris vie dans le décor époustouflant du désert. Plongez dans l'univers cinématographique de cette destination unique.`,
          ],
        },
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
      <div className="container h-auto w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-stretch flex-wrap gap-4">
        {selectedPlan.images.map((images) => (
          <img
            src={images}
            alt="plan_image"
            className="w-[250px] h-[200px]  md:h-96 lg:h-full w-full object-cover rounded-lg shadow-lg"
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
                <h1 className="font-bold text-xl">{point.title}</h1>
                {point.plan.map((plan, index) => (
                  <li
                    key={index}
                    className="p-5 text-justify font-medium text-base"
                  >
                    {plan}
                  </li>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
