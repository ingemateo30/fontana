import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const center = { lat: 4.6097, lng: -74.0817 }; // Bogotá, Colombia

const lotMarkers = [
  { id: 1, number: "15A", position: { lat: 4.6100, lng: -74.0820 }, available: true },
  { id: 2, number: "16B", position: { lat: 4.6105, lng: -74.0825 }, available: true },
  { id: 3, number: "17C", position: { lat: 4.6110, lng: -74.0830 }, available: false },
  { id: 4, number: "18D", position: { lat: 4.6095, lng: -74.0815 }, available: true },
];

const Map = ({ showLots = false }) => {
  const [selectedLot, setSelectedLot] = React.useState(null);

  return (
    <div className="relative w-full h-[500px]">
      <LoadScript googleMapsApiKey="TU_API_KEY">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={16}>
          {/* Marcador principal */}
          <Marker position={center} label="F" />

          {/* Marcadores de lotes */}
          {showLots &&
            lotMarkers.map((lot) => (
              <Marker
                key={lot.id}
                position={lot.position}
                label={{
                  text: lot.number,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
                icon={{
                  url: lot.available
                    ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                    : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
                onClick={() => setSelectedLot(lot)}
              />
            ))}

          {/* Ventana de información para lotes */}
          {selectedLot && (
            <InfoWindow
              position={selectedLot.position}
              onCloseClick={() => setSelectedLot(null)}
            >
              <div className="text-gray-800">
                <h3 className="font-semibold">Lote {selectedLot.number}</h3>
                <p>Estado: {selectedLot.available ? "Disponible" : "Vendido"}</p>
                <a href={`/lots/${selectedLot.id}`} className="text-blue-500 hover:underline">
                  Ver detalles
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Información superpuesta */}
      <div className="absolute top-5 left-5 bg-white shadow-lg p-4 rounded-lg max-w-sm z-10">
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

