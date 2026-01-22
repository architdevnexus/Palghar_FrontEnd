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
        }
        // {
        //     id: 3,
        //     name: "PALGHAR ADVISOR LLP",
        //     category: "BUSINESS & FINANCIAL ADVISORY",
        //     email: "palgharadvisorllp@gmail.com",
        //     path: "/palghar-advisor",
        // },
        // {
        //     id: 4,
        //     name: "VOICE OF VICTIM’S SECTION 8",
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
            <div className="flex justify-center mb-8">
                <img
                    src="/PALGHAR_PARIVAR.svg"
                    alt="Palghar Parivar"
                    className="h-12 object-contain"
                />
            </div>

            {/* CARDS CONTAINER */}
            <div className="bg-white rounded-2xl overflow-hidden">
                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {palgharHomeCards.map((item, index) => {
                        const isDivider = index === 3;

                        return (
                            <div key={item.id} className="relative">
                                {/* GREEN DIVIDER AFTER 3rd CARD */}
                                {isDivider && (
                                    <div className="col-span-full h-1 bg-green-500 mx-6 rounded-2xl md:hidden" />
                                )}

                                <div
                                    className={`
                                        p-6
                                        flex
                                        justify-center
                                        ${index % 3 !== 2 ? "md:border-r border-gray-300" : ""}
                                        ${index >= 3 ? "md:border-t border-gray-300" : ""}
                                    `}
                                >
                                    <PalgharHomeCard item={item} />
                                </div>


                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
