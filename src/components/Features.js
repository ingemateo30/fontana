import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faShieldAlt,
  faWater,
  faRoad,
  faLeaf,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    {
      icon: faTree,
      title: "Áreas Verdes",
      description:
        "Amplios espacios naturales y zonas recreativas para el bienestar de toda la familia.",
    },
    {
      icon: faShieldAlt,
      title: "Seguridad 24/7",
      description:
        "Acceso controlado y vigilancia permanente para una vida tranquila.",
    },
    {
      icon: faWater,
      title: "Servicios Básicos",
      description: "Infraestructura completa con agua, electricidad y drenaje.",
    },
    {
      icon: faRoad,
      title: "Vías Pavimentadas",
      description: "Calles amplias, bien iluminadas y con excelente acceso.",
    },
    {
      icon: faLeaf,
      title: "Sostenibilidad",
      description:
        "Diseño amigable con el medio ambiente y respeto por la naturaleza.",
    },
    {
      icon: faHome,
      title: "Diseño Exclusivo",
      description:
        "Normativa arquitectónica que garantiza armonía y valorización.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black-200">
          Características del Proyecto
        </h2>
        <p className="text-[#683D20] mt-3 text-lg">
          Un desarrollo pensado para la comodidad y el estilo de vida de sus residentes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl border-t-4 border-[#A5C663]"
            >
              <div className="text-[#683D20] text-4xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

