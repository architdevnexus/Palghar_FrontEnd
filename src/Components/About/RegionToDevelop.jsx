export default function RegionToDevelop() {
    return (
        <section className="w-full bg-white py-10 md:py-14">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-14">

                {/* ================= FIRST REGION ================= */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* LEFT TEXT BOX */}
                    <div className="lg:w-[42%] w-full flex justify-start">
                       <div className="relative overflow-hidden rounded-2xl p-8 max-w-lg min-h-[200px] border border-white/5 bg-[#1e2530]
                            before:absolute before:inset-y-0 before:left-0 before:w-[5px] before:rounded-l-2xl
                            before:bg-gradient-to-b before:from-[#4ecdc4] before:to-[#2a9d8f]
                            after:absolute after:-top-16 after:-right-16 after:w-48 after:h-48 after:rounded-full
                            after:bg-[radial-gradient(circle,rgba(78,205,196,0.08),transparent)]">
                    <h2 className="text-white text-sm font-semibold uppercase leading-snug tracking-wide mb-5">
                        ACCORDING TO YOU, BY WHEN WILL THIS REGION DEVELOP?
                    </h2>

                    <p className="text-white text-xl font-bold tracking-widest">
                        2030 <span className="text-white/30 font-normal mx-1">—</span>
                        2040 <span className="text-white/30 font-normal mx-1">—</span>
                        2050
                    </p>
                    </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:w-[58%] w-full flex justify-end">
                        <img
                            src="/RegionToDevelop.svg"
                            alt="Region Development Map"
                            className="w-full max-w-[720px] rounded-xl object-contain"
                        />
                    </div>
                </div>

                {/* GRADIENT BAR 1 */}
                <div>
                    <div className="bg-gradient-to-r from-[#23c1eb] via-[#1fb5db] to-[#199fc1] rounded-xl py-4 px-6 text-center shadow-md">
                        <p className="text-white font-semibold text-sm md:text-base tracking-wide">
                            Proposed MIRA – VIRAR – PALGHAR Link Road to MUMBAI
                        </p>
                    </div>
                </div>

                {/* ================= SECOND REGION ================= */}
                <div className="flex flex-col lg:flex-row items-start gap-10">

                    {/* LEFT MAP */}
                    <div className="lg:w-[45%] w-full flex justify-start">
                        <img
                            src="/RegionToDevelop.svg"
                            alt="IMEC Corridor Map"
                            className="w-full max-w-[520px] rounded-xl object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-[55%] w-full text-gray-800 leading-relaxed text-sm md:text-base">
                        <p>
                            <span className="font-bold text-4xl mr-1 float-left leading-none">
                                P
                            </span>
                            alghar is a key location for the India–Middle East–Europe Economic
                            Corridor (IMEC) due to the development of the Vadhavan Port, which
                            will serve as a major gateway for the corridor’s eastern leg.
                            <br /><br />
                            The Vadhavan Port, a new deep-draft port under construction in the
                            Palghar district of Maharashtra, is projected to act as a crucial
                            entry and exit point for trade through the IMEC and the
                            International North–South Transportation Corridor (INSTC).
                        </p>
                    </div>
                </div>

                {/* GRADIENT BAR 2 */}
                <div>
                    <div className="bg-gradient-to-r from-[#23c1eb] via-[#1fb5db] to-[#199fc1] rounded-xl py-4 px-6 text-center shadow-md">
                        <p className="text-white font-semibold text-sm md:text-base tracking-wide">
                            INDIA – MIDDLE EAST – EUROPE CORRIDOR
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
