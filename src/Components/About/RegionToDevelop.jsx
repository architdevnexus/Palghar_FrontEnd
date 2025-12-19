export default function RegionToDevelop() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-14">

        {/* ================= FIRST REGION ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT TEXT BOX */}
          <div className="lg:w-[42%] w-full flex justify-start">
            <div
              className="text-white rounded-2xl p-6 md:p-8 w-full max-w-[420px]"
              style={{
                backgroundImage: 'url("/greenBlack.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-lg md:text-xl font-semibold leading-snug">
                ACCORDING TO YOU, BY WHEN WILL THIS REGION DEVELOP?
              </h2>

              <p className="mt-5 text-xl md:text-2xl font-bold tracking-wide">
                2030 &nbsp;–&nbsp; 2040 &nbsp;–&nbsp; 2050
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
          <div className="bg-gradient-to-r from-[#005A70] via-[#0083A3] to-[#00ACD6] rounded-xl py-4 px-6 text-center shadow-md">
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
          <div className="bg-gradient-to-r from-[#005A70] via-[#0083A3] to-[#00ACD6] rounded-xl py-4 px-6 text-center shadow-md">
            <p className="text-white font-semibold text-sm md:text-base tracking-wide">
              INDIA – MIDDLE EAST – EUROPE CORRIDOR
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
