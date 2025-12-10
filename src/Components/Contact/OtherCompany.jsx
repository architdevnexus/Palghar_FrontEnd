import { useState, useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function OtherCompany() {
    const Data = [
        {
            sr_no: 1,
            company_name: "Palghar Infrastructure LLP",
            logo: "https://images.pexels.com/photos/15920486/pexels-photo-15920486.jpeg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Gautam R Mukherjee", "Mr. Umesh Ramvilas Paswan"],
            email: "palghar.infrastructurellp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2813, lng: 72.8684 }
        },
        {
            sr_no: 2,
            company_name: "Palghar Growth Partner LLP",
            logo: "https://images.pexels.com/photos/15920486/pexels-photo-15920486.jpeg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Umesh Ramvilas Paswan", "Mrs. Jyoti Yogesh Bosmiya"],
            email: "palghargrowth.partnerllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2832, lng: 72.8701 }
        },
        {
            sr_no: 3,
            company_name: "Palghar Holding Pvt. Ltd",
            logo: "https://images.pexels.com/photos/15920486/pexels-photo-15920486.jpeg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mrs. Jyoti Yogesh Bosmiya", "Mr. Pankaj Saraogi"],
            email: "palgharholdingpvt.limited@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2821, lng: 72.8690 }
        },
        {
            sr_no: 4,
            company_name: "Palghar Advisor LLP",
            logo: "https://images.pexels.com/photos/15920486/pexels-photo-15920486.jpeg",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mr. Yogesh Pranjivan Bosmiya", "Mr. Bhavesh Ram Prakash Singh"],
            email: "palgharadvisorllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2840, lng: 72.8710 }
        },
        {
            sr_no: 5,
            company_name: "Palghar Developers LLP",
            logo: "/images/logos/palghar-developers.png",
            address: "Shop No. B34, Shanti Shopping Center, Mira Road East, Thane - 401107",
            partners: ["Mrs. Veena Jha", "Mr. Abdul Majid Khan", "Mr. Umesh Ramvilas Paswan"],
            email: "palgharadvisorllp@gmail.com",
            contact: "+91-XXXXXXXXXX",
            location: { lat: 19.2835, lng: 72.8688 }
        },
        {
            sr_no: 6,
            company_name: "Voice of Victim’s Section 8",
            logo: "/images/logos/voice-of-victims.png",
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
            logo: "/images/logos/mira-bhayandar-redevelopment.png",
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

    const [selected, setSelected] = useState(0);

    // Google Maps Loader
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "YOUR_GOOGLE_MAP_API_KEY"
    });

    const mapCenter = useMemo(() => Data[selected].location, [selected]);

    return (
        <section className="w-full px-4 md:px-10 lg:px-20 py-14">
            <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
                Other Companies
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT SIDE CARDS */}
                <div className="flex flex-col gap-6 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
                    {Data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`
                flex justify-start gap-4 p-5 rounded-xl cursor-pointer border transition-all
                ${selected === index
                                    ? "bg-[#E6F7FA] border-cyan-500  shadow-lg"
                                    : "bg-white hover:shadow-md  border-gray-200"
                                }
              `}
                        >
                            <div className="min-w-[90px] h-28  overflow-hidden">
                                <img
                                    src={item.logo}
                                    alt={item.company_name}
                                    className="w-full rounded-lg h-full object-contain p-2"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold">{item.company_name}</h3>
                                <p className="text-gray-700 text-sm">📞 {item.contact}</p>
                                <p className="text-gray-700 text-sm">✉️ {item.email}</p>
                                <p className="text-gray-700 text-sm">📍 {item.address}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE GOOGLE MAP */}
                <div className="w-full h-[450px] md:h-[650px] rounded-xl overflow-hidden shadow-md">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={mapCenter}
                            zoom={15}
                            options={{
                                disableDefaultUI: true,
                                zoomControl: true
                            }}
                        >
                            <Marker position={mapCenter} />
                        </GoogleMap>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Loading map...
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
