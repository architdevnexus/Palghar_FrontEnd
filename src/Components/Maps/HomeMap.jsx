import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Data from "../../DataStore/ESTATE.json";

const Marker = ({ onClick, logo }) => (
  <div className="cursor-pointer" onClick={onClick}>
    <img src={logo} alt="location-logo" className="w-8 h-8" />
  </div>
);

export default function HomeMap() {
  const [active, setActive] = useState(null);

  const defaultCenter = {
    lat: 19.204, // fallback Palghar
    lng: 72.833,
  };

  const defaultZoom = 10;

  const locations = Data?.palghar_properties || [];

  return (
    <div className="w-full h-screen relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            lat={loc.latitude}
            lng={loc.longitude}
            logo="/palghar_logo.svg"
            onClick={() => setActive(loc)}
          />
        ))}
      </GoogleMapReact>

      {active && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white p-4 rounded-xl shadow-xl">
          <div className="flex gap-3 items-start">
            <img src="/palghar_logo.svg" className="w-10 h-10" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{active.title}</h2>
              <p className="text-sm text-gray-600">
                {active.description || "Explore premium real estate options at this location."}
              </p>
              <button
                className="mt-2 px-4 py-2 bg-black text-white rounded-lg"
                onClick={() => window.location.href = active.link || "#"}
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}