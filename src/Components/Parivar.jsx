import PalgharHomeCard from "./Cards/PalgharHomeCards";

export default function Parivar() {
    const palgharHomeCards = [
        {
            id: 1,
            name: "PALGHAR GROWTH PARTNER LLP",
            category: "REAL ESTATE",
            email: "palghargrowth.partnerllp@gmail.com",
            path: "/palghar-growth-partner",
        },
        {
            id: 2,
            name: "PALGHAR Infrastructure LLP",
            category: "LAND & DEVELOPERS",
            email: "palghar.infrastructurellp@gmail.com",
            path: "/palghar-holding",
        },
        // {
        //     id: 3,
        //     name: "PALGHAR ADVISOR LLP",
        //     category: "BUSINESS & FINANCIAL ADVISORY",
        //     email: "palgharadvisorllp@gmail.com",
        //     path: "/palghar-advisor",
        // },
        // {
        //     id: 4,
        //     name: "VOICE OF VICTIM'S SECTION 8",
        //     category: "SOCIAL INITIATIVE",
        //     email: "voiceofvictims2@gmail.com",
        //     path: "/voice-of-victims",
        // },
        // {
        //     id: 5,
        //     name: "PALGHAR DEVELOPERS LLP",
        //     category: "REAL ESTATE DEVELOPMENT",
        //     email: "palgharadvisorllp@gmail.com",
        //     path: "/palghar-developers",
        // },
        // {
        //     id: 6,
        //     name: "MIRA BHAYANDAR RE-DEVELOPMENT LLP",
        //     category: "PROJECT MANAGEMENT CONSULTANCY",
        //     email: "mirabhayandarredevelopmentllp@gmail.com",
        //     path: "/mira-bhayandar-redevelopment",
        // },
    ];

    return (
        <section className="w-full px-6 lg:px-20 py-10">

            {/* TOP LOGO */}
            <div className="flex justify-center mb-10">
                <img
                    src="/PALGHAR_PARIVAR.svg"
                    alt="Palghar Parivar"
                    className="h-14 object-contain"
                />
            </div>

            {/* CARDS CONTAINER — no internal border lines */}
            <div className="
                bg-white rounded-2xl overflow-hidden
                border border-gray-100
                shadow-[0_2px_24px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_32px_rgba(0,0,0,0.09)]
                transition-shadow duration-500
            ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {palgharHomeCards.map((item, index) => (
                        <div
                            key={item.id}
                            className="
                                group p-8 flex justify-center
                                hover:bg-[#f7faf2]
                                transition-colors duration-300
                            "
                            
                        >
                            <PalgharHomeCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}