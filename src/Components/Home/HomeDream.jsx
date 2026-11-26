export default function HomeDream() {
  return (
    <section className="w-full px-6 py-10">
      <div className="max-w-7xl mx-auto bg-[#E6F7FA] rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="mt-6">
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
                    <span className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0"></span>
                    <span className="text-gray-800 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full p-4 md:p-5">
            <img
              src="/DreamHome.jpg"
              alt="Palghar Dream Project"
              className="w-full aspect-square object-contain rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}