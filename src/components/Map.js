import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Configuración del icono predeterminado
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ showLots = false }) => {
  const projectCenter = [4.6097, -74.0817]; // Bogotá, Colombia

  const lotMarkers = [
    { id: 1, number: "15A", position: [4.6100, -74.0820], available: true },
    { id: 2, number: "16B", position: [4.6105, -74.0825], available: true },
    { id: 3, number: "17C", position: [4.6110, -74.0830], available: false },
    { id: 4, number: "18D", position: [4.6095, -74.0815], available: true },
  ];

  return (
    <div className="relative w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer center={projectCenter} zoom={16} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marcador principal */}
        <Marker position={projectCenter}>
          <Popup>
            <strong>Fontana</strong><br />
            Conjunto residencial
          </Popup>
        </Marker>

        {/* Marcadores de lotes */}
        {showLots &&
          lotMarkers.map((lot) => (
            <Marker
              key={lot.id}
              position={lot.position}
              icon={L.divIcon({
                className: `flex items-center justify-center font-bold text-white text-sm rounded-full ${
                  lot.available ? "bg-green-500" : "bg-red-500"
                }`,
                html: `<div class="w-8 h-8 flex items-center justify-center rounded-full">${lot.number}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
              })}
            >
              <Popup>
                <strong>Lote {lot.number}</strong>
                <br />
                Estado: {lot.available ? "Disponible" : "Vendido"}
                <br />
                <a href={`/lots/${lot.id}`} className="text-blue-500 hover:underline">
                  Ver detalles
                </a>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Información superpuesta */}
      <div className="absolute top-5 left-5 bg-white shadow-lg p-4 rounded-lg max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Ubicación Privilegiada</h3>
        <p className="text-gray-600 mt-2">
          Nuestro residencial está estratégicamente ubicado con fácil acceso a:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Centros comerciales a solo 5 minutos</li>
          <li>Escuelas y universidades</li>
          <li>Principales vías de acceso</li>
          <li>Áreas recreativas</li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
