import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import Data from "../../DataStore/ESTATE.json";


export const CITY_COORDINATES = {
  Palghar: [19.6961, 72.7699],
  Boisar: [19.8037, 72.7559],
  Wada: [19.6525, 73.1482],
  Saphale: [19.5512, 72.8226],
  Umroli: [19.7135, 72.7609],
  Manor: [19.7232, 72.8826],
  Dahanu: [19.9676, 72.7127],
  Kelwa: [19.6195, 72.7362],
};


// ---- Custom Marker Icon ----
const locationIcon = new L.Icon({
  iconUrl: "/palghar_logo.svg",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

// ---- Fly to selected property ----
const FlyToProperty = ({ position }) => {
  const map = useMap();

  if (
    Array.isArray(position) &&
    Number.isFinite(position[0]) &&
    Number.isFinite(position[1])
  ) {
    map.flyTo(position, 13, { duration: 1.2 });
  }
  return null;
};

export default function HomeMap() {
  const [active, setActive] = useState(null);

  const defaultCenter = [19.6961, 72.7699];
  const defaultZoom = 10;

  // ---------------------------------------------------
  // CORE FIX:
  // 1. Use exact lat/lng if available
  // 2. Otherwise fallback to city center
  // ---------------------------------------------------
  const properties = useMemo(() => {
    return (Data?.palghar_properties || [])
      .map((item) => {
        const lat = Number(item.location?.latitude);
        const lng = Number(item.location?.longitude);

        // Exact location available
        if (Number.isFinite(lat) && Number.isFinite(lng)) {
          return { ...item, position: [lat, lng] };
        }

        // Fallback to city center
        const cityPos = CITY_COORDINATES[item.location?.city];
        if (cityPos) {
          return { ...item, position: cityPos };
        }

        // Skip only if nothing available
        return null;
      })
      .filter(Boolean);
  }, []);

  return (
    <div className="relative max-w-7xl z-0 mx-auto  w-full h-screen">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ---- Property Markers ---- */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.position}
            icon={locationIcon}
            eventHandlers={{
              click: () => setActive(property),
            }}
          >
            <Popup className="bg-(--primary-color)">
              <strong>{property.name}</strong>
              <br />
              {property.location.area}, {property.location.city}
              <br />
              <small>{property.location.pincode}</small>
            </Popup>
          </Marker>
        ))}

        {/* ---- Auto focus ---- */}
        {active && <FlyToProperty position={active.position} />}
      </MapContainer>

      {/* ---- Bottom Info Card ---- */}
      {active && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[420px] bg-white p-4 rounded-2xl shadow-2xl z-10">
          <h2 className="text-lg font-semibold">{active.name}</h2>

          <p className="text-sm text-gray-600">
            {active.type} {active.config && `• ${active.config}`}
          </p>

          <p className="text-sm text-gray-500">
            {active.location.area}, {active.location.city} –{" "}
            {active.location.pincode}
          </p>

          {active.price && (
            <p className="mt-1 font-medium">
              ₹ {active.price.toLocaleString("en-IN")}
            </p>
          )}

          <button
            onClick={() => setActive(null)}
            className="mt-2 text-sm text-gray-500 hover:text-black"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
