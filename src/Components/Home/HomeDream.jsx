export default function HomeDream() {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="bg-[#E6F7FA] rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-start gap-10">

        {/* LEFT CONTENT — ALWAYS 50% ON LARGE SCREENS */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            PALGHAR PARIVAR’S DREAM <br /> PROJECT (2026–2035)
          </h1>

          <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
            Dream of The Palghar Parivar’s is to develop a complete township,
            having balanced & rational combination of Exclusive Residential
            Premises, for all income groups, Shopping & Entertainment Arcades –
            for their recreation & day to day requirements and industrial
            Estates or Speciality Zones like SEEPZ & NOIDA, which can provide
            employment to the local residents. The Company believes such
            systematically planned colonies can automatically become small towns
            in their own, giving true sense to the word township. This will also
            help eliminate the problem of migration and dense population
            concentration in Metro Cities.
          </p>
        </div>

        {/* MIDDLE + RIGHT WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-10 w-full lg:w-1/2">

   {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/34341418/pexels-photo-34341418.jpeg"
              alt="Dream Project"
              className="w-full max-w-xs md:max-w-sm h-80 md:h-96 object-cover rounded-3xl shadow-md"
            />
          </div>
          {/* TYPES OF DEVELOPMENT */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="block w-2 h-7 bg-teal-600 rounded-md"></span>
              Types of Development
            </h2>

            <ul className="mt-4 space-y-3">
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
      </div>
    </div>
  );
}
