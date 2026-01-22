import { useState, useMemo, useEffect, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ------------------ LOGO ------------------ */
import PalgharLogo from "/Logo.png";

/* ------------------ DATA (STATIC) ------------------ */
const COMPANIES = [
  {
    sr_no: 1,
    company_name: "Palghar Infrastructure LLP",
    logo: PalgharLogo,
    address:
      "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
    email: "palghar.infrastructurellp@gmail.com",
    contact: "+91-88980 12184",
    location: { lat: 19.2813, lng: 72.8684 },
  },
  {
    sr_no: 2,
    company_name: "Palghar Growth Partner LLP",
    logo: PalgharLogo,
    address:
      "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
    email: "palghargrowth.partnerllp@gmail.com",
    contact: "+91-70219 35692",
    location: { lat: 19.2832, lng: 72.8701 },
  },
  // {
  //   sr_no: 3,
  //   company_name: "Palghar Holding Pvt. Ltd",
  //   logo: PalgharLogo,
  //   address:
  //     "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
  //   email: "palgharholdingpvt.limited@gmail.com",
  //   contact: "+91-XXXXXXXXXX",
  //   location: { lat: 19.2821, lng: 72.869 },
  // },
  // {
  //   sr_no: 4,
  //   company_name: "Palghar Advisor LLP",
  //   logo: PalgharLogo,
  //   address:
  //     "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
  //   email: "palgharadvisorllp@gmail.com",
  //   contact: "+91-XXXXXXXXXX",
  //   location: { lat: 19.284, lng: 72.871 },
  // },
];

/* ------------------ ICONS ------------------ */
const activeIcon = new L.Icon({
  iconUrl: PalgharLogo,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const defaultIcon = new L.Icon({
  iconUrl: PalgharLogo,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

/* ------------------ AUTO FLY ------------------ */
const FlyToActive = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position?.length === 2) {
      map.flyTo(position, 15, { duration: 1.2 });
    }
  }, [position, map]);

  return null;
};

/* ------------------ COMPONENT ------------------ */
export default function OtherCompany() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const activePosition = useMemo(() => {
    const loc = COMPANIES[activeIndex]?.location;
    return loc ? [loc.lat, loc.lng] : [19.2813, 72.8684];
  }, [activeIndex]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        Other Companies
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LIST */}
        <div className="flex flex-col gap-5 lg:max-h-[650px] lg:overflow-y-auto pr-1">
          {COMPANIES.map((item, index) => (
            <div
              key={item.sr_no}
              onClick={() => handleSelect(index)}
              className={`flex gap-4 p-4 sm:p-5 rounded-xl cursor-pointer border transition ${
                activeIndex === index
                  ? "bg-[#E6F7FA] border-cyan-500 shadow-lg"
                  : "bg-white border-gray-200 hover:shadow-md"
              }`}
            >
              <div className="min-w-[70px] sm:min-w-[90px] h-20 sm:h-28">
                <img
                  src={item.logo}
                  alt={item.company_name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="flex flex-col gap-1 text-sm sm:text-base">
                <h3 className="font-semibold">
                  {item.company_name}
                </h3>
                <p>📞 {item.contact}</p>
                <p className="break-all">✉️ {item.email}</p>
                <p className="text-xs sm:text-sm">📍 {item.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="w-full h-[300px] sm:h-[450px] lg:h-[650px] -z-10 rounded-xl overflow-hidden shadow-md">
          <MapContainer
            center={activePosition}
            zoom={20}
            scrollWheelZoom={false}
            preferCanvas
            className="w-full h-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {COMPANIES.map((item, index) => (
              <Marker
                key={item.sr_no}
                position={[item.location.lat, item.location.lng]}
                icon={index === activeIndex ? activeIcon : defaultIcon}
              >
                <Popup>
                  <strong>{item.company_name}</strong>
                  <br />
                  {item.address}
                </Popup>
              </Marker>
            ))}

            <FlyToActive position={activePosition} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
