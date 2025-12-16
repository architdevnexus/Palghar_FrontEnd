import PalgharHomeCard from "./Cards/PalgharHomeCards";

export default function Parivar() {
    const palgharHomeCards = [
        {
            id: 1,
            name: "PALGHAR GROWTH PARTNER LLP",
            category: "REAL ESTATE",
            email: "palghargrowth.partnerllp@gmail.com",
            //   logo: "/palghar_logo",
            path: "/palghar-growth-partner"
        },
        {
            id: 2,
            name: "PALGHAR HOLDING PVT. LTD.",
            category: "LAND & DEVELOPERS",
            email: "palgharholdingpvt.limited@gmail.com",
            logo: "/palghar_logo",
            path: "/palghar-holding"
        },
        {
            id: 3,
            name: "PALGHAR ADVISOR LLP",
            category: "BUSINESS & FINANCIAL ADVISORY",
            email: "palgharadvisorllp@gmail.com",
            logo: "/palghar_logo",
            path: "/palghar-advisor"
        },
        {
            id: 4,
            name: "VOICE OF VICTIM’S SECTION 8",
            category: "SOCIAL INITIATIVE",
            email: "voiceofvictims2@gmail.com",
            logo: "/palghar_logo",
            path: "/voice-of-victims"
        },
        {
            id: 5,
            name: "PALGHAR DEVELOPERS LLP",
            category: "REAL ESTATE DEVELOPMENT",
            email: "palgharadvisorllp@gmail.com",
            logo: "/palghar_logo",
            path: "/palghar-developers"
        },
        {
            id: 6,
            name: "MIRA BHAYANDAR RE-DEVELOPMENT LLP",
            category: "PROJECT MANAGEMENT CONSULTANCY",
            email: "mirabhayandarredevelopmentllp@gmail.com",
            logo: "/palghar_logo",
            path: "/mira-bhayandar-redevelopment"
        }
    ];

    return (
        <section className="w-full px-6 lg:px-20 py-10">

            {/* TOP LOGO */}
            <div className="flex justify-center">
                <img
                    src="/PALGHAR_PARIVAR.svg"
                    alt="Palghar Parivar"
                    className="h-12 object-contain"
                />
            </div>

            {/* CARDS CONTAINER */}
            <div className=" bg-white rounded-2xl overflow-hidden">

                {/* ROW 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {palgharHomeCards.slice(0, 3).map((item, index) => (
                        <div
                            key={item.id}
                            className={`p-6 ${index !== 2 ? "border-r border-gray-300" : ""
                                }`}
                        >
                            <PalgharHomeCard item={item} />
                        </div>
                    ))}
                </div>

                {/* GREEN DIVIDER */}
                <div className="h-1 bg-green-500 rounded-2xl mx-6" />

                {/* ROW 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {palgharHomeCards.slice(3, 6).map((item, index) => (
                        <div
                            key={item.id}
                            className={`p-6 ${index !== 2 ? "border-r border-gray-300" : ""
                                }`}
                        >
                            <PalgharHomeCard item={item} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
