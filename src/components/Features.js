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
        "Amplios espacios verdes y zonas recreativas para toda la familia.",
    },
    {
      icon: faShieldAlt,
      title: "Seguridad 24/7",
      description:
        "Acceso controlado y vigilancia las 24 horas para tu tranquilidad.",
    },
    {
      icon: faWater,
      title: "Servicios Básicos",
      description: "Agua, electricidad y drenaje ya instalados en todos los lotes.",
    },
    {
      icon: faRoad,
      title: "Vías Pavimentadas",
      description: "Calles amplias y bien planificadas con iluminación completa.",
    },
    {
      icon: faLeaf,
      title: "Sostenibilidad",
      description:
        "Proyecto desarrollado con criterios de sostenibilidad y bajo impacto ambiental.",
    },
    {
      icon: faHome,
      title: "Diseño Exclusivo",
      description:
        "Normativa arquitectónica que garantiza armonía visual y valorización.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
          Características del Proyecto
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Fontana está diseñado pensando en la calidad de vida de sus residentes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-orange-500 text-4xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
