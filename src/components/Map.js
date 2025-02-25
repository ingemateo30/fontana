import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';

// Fix for default marker icons in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ showLots = false }) => {
  // Replace with your project's coordinates
  const projectCenter = [4.6097, -74.0817]; // Example: Bogotá, Colombia
  
  // Sample lots for demonstration - replace with actual lot data
  const lotMarkers = [
    { id: 1, number: '15A', position: [4.6100, -74.0820], available: true },
    { id: 2, number: '16B', position: [4.6105, -74.0825], available: true },
    { id: 3, number: '17C', position: [4.6110, -74.0830], available: false },
    { id: 4, number: '18D', position: [4.6095, -74.0815], available: true },
  ];

  return (
    <div className="map-container">
      <MapContainer center={projectCenter} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Main project marker */}
        <Marker position={projectCenter}>
          <Popup>
            <strong>Residencial Ensueño</strong><br />
            Complejo residencial exclusivo
          </Popup>
        </Marker>
        
        {/* Individual lot markers, if enabled */}
        {showLots && lotMarkers.map(lot => (
          <Marker 
            key={lot.id} 
            position={lot.position}
            icon={L.divIcon({
              className: `lot-marker ${lot.available ? 'available' : 'sold'}`,
              html: `<div>${lot.number}</div>`,
              iconSize: [30, 30],
              iconAnchor: [15, 15]
            })}
          >
            <Popup>
              <strong>Lote {lot.number}</strong><br />
              Estado: {lot.available ? 'Disponible' : 'Vendido'}<br />
              <a href={`/lots/${lot.id}`}>Ver detalles</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="map-overlay">
        <h3>Ubicación Privilegiada</h3>
        <p>Nuestro residencial está estratégicamente ubicado con fácil acceso a:</p>
        <ul>
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