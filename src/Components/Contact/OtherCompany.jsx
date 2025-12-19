import { useState, useMemo, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// -----------------------------
// FIX: Custom marker icon
// (Leaflet doesn't load default icons in Vite)
// -----------------------------
const activeIcon = new L.Icon({
  iconUrl: "/palghar_logo.svg",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const defaultIcon = new L.Icon({
  iconUrl: "/palghar_logo.svg",
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

// -----------------------------
// Auto-fly map to active location
// -----------------------------
const FlyToActive = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (
      position &&
      Number.isFinite(position[0]) &&
      Number.isFinite(position[1])
    ) {
      map.flyTo(position, 15, { duration: 1.2 });
    }
  }, [position, map]);

  return null;
};

export default function OtherCompany() {
 const Data = [
        {
            sr_no: 1,
            company_name: "Palghar Infrastructure LLP",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Gautam R Mukherjee", "Mr. Umesh Ramvilas Paswan"],
            email: "palghar.infrastructurellp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2813, lng: 72.8684 }
        },
        {
            sr_no: 2,
            company_name: "Palghar Growth Partner LLP",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Umesh Ramvilas Paswan", "Mrs. Jyoti Yogesh Bosmiya"],
            email: "palghargrowth.partnerllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2832, lng: 72.8701 }
        },
        {
            sr_no: 3,
            company_name: "Palghar Holding Pvt. Ltd",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mrs. Jyoti Yogesh Bosmiya", "Mr. Pankaj Saraogi"],
            email: "palgharholdingpvt.limited@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2821, lng: 72.8690 }
        },
        {
            sr_no: 4,
            company_name: "Palghar Advisor LLP",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Yogesh Pranjivan Bosmiya", "Mr. Bhavesh Ram Prakash Singh"],
            email: "palgharadvisorllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2840, lng: 72.8710 }
        },
        {
            sr_no: 5,
            company_name: "Palghar Developers LLP",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mrs. Veena Jha", "Mr. Abdul Majid Khan", "Mr. Umesh Ramvilas Paswan"],
            email: "palgharadvisorllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2835, lng: 72.8688 }
        },
        {
            sr_no: 6,
            company_name: "Voice of Victim’s Section 8",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: [
                "Mr. Yogesh Pranjivan Bosmiya",
                "Mr. Ajay Ranchandra Mishra",
                "Mr. Pradeep Kantilal Pangal",
                "Mr. Umesh Ramvilas Paswan",
                "Mr. Gautam R Mukherjee",
                "Mr. Rajeev W. Giri",
                "Mr. Santoshkumar Bhagirathi Pandey"
            ],
            email: "voiceofvictims2@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2829, lng: 72.8705 }
        },
        {
            sr_no: 7,
            company_name: "Mira Bhayandar Re-Development LLP",
            logo: "public/palghar_logo.svg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: [
                "Mr. Ajay Ranchandra Mishra",
                "Mr. Umesh Ramvilas Paswan",
                "Mr. Pradeep Kantilal Pangal",
                "Mr. Gautam R Mukherjee",
                "Mr. Yogesh Pranjivan Bosmiya"
            ],
            email: "mirabhayanderredevelopmentllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2818, lng: 72.8712 }
        }
    ];
  const [activeIndex, setActiveIndex] = useState(0);

  // -----------------------------
  // Derive active position safely
  // -----------------------------
  const activePosition = useMemo(() => {
    const loc = Data[activeIndex]?.location;
    if (!loc) return null;

    return [Number(loc.lat), Number(loc.lng)];
  }, [activeIndex, Data]);

  const defaultCenter = activePosition || [19.2813, 72.8684];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-14">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        Other Companies
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT LIST */}
        <div className="flex flex-col gap-6 max-h-[650px] overflow-y-auto pr-2">
          {Data.map((item, index) => (
            <div
              key={item.sr_no}
              onClick={() => setActiveIndex(index)}
              className={`flex gap-4 p-5 rounded-xl cursor-pointer border transition
                ${
                  activeIndex === index
                    ? "bg-[#E6F7FA] border-cyan-500 shadow-lg"
                    : "bg-white border-gray-200 hover:shadow-md"
                }
              `}
            >
              <div className="min-w-[90px] h-28 overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.company_name}
                  className="w-full h-full object-contain p-2 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">
                  {item.company_name}
                </h3>
                <p className="text-sm">📞 {item.contact}</p>
                <p className="text-sm">✉️ {item.email}</p>
                <p className="text-sm">📍 {item.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[450px] md:h-[650px] rounded-xl overflow-hidden shadow-md">
          <MapContainer
            center={defaultCenter}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* ALL markers */}
            {Data.map((item, index) => (
              <Marker
                key={item.sr_no}
                position={[
                  item.location.lat,
                  item.location.lng,
                ]}
                icon={index === activeIndex ? activeIcon : defaultIcon}
              >
                <Popup>
                  <strong>{item.company_name}</strong>
                  <br />
                  {item.address}
                </Popup>
              </Marker>
            ))}

            {/* Auto-focus */}
            {activePosition && (
              <FlyToActive position={activePosition} />
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
