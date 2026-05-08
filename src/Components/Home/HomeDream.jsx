export default function HomeDream() {
  return (
    <section className="w-full px-6 py-10">
      <div className="bg-[#E6F7FA] rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10 lg:p-14">
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-900 leading-snug">
              PALGHAR DREAM PROJECT
              <br />
              <span className="text-[#23c1eb]">(2026–2035)</span>
            </h1>

            {/* TYPES OF DEVELOPMENT */}
            <div className="mt-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#23c1eb] rounded-md"></span>
                Types of Development
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "Colony for Lower Middle Class",
                  "Colony for Middle Class",
                  "Colony for Higher Middle Class",
                  "Colony for Higher Class",
                  "Commercial / Entertainment Area",
                  "Industrial / Speciality Zone",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-500 mt-1"></span>
                    <span className="text-gray-800 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[300px] md:h-[420px] lg:h-full">
            <img
              src="/DreamHome.svg"
              alt="Palghar Dream Project"
              className="absolute inset-0 w-full h-full object-cover"
            />

        
          </div>

        </div>
      </div>
    </section>
  );
}
