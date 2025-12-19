export default function AboutHero() {
const AboutHeader = () => {
  return (
    <div className="absolute text-center z-10 w-1/2 ">
      
      {/* OUTER WRAPPER — ACTS AS WHITE BORDER */}
      <div
        className="p-2 rounded-xl bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0%, 60% 100%, 0 100%)",
        }}
      >
        {/* INNER LAYER — ACTUAL COLORED SHAPE */}
        <div
          className="h-32 md:h-68 flex justify-around  items-center px-8 
          text-white text-2xl md:text-5xl font-semibold 
          bg-(--primary-color) mr-2 rounded-2xl"
          style={{
            clipPath: "polygon(0 0, 100% 0%, 60% 100%, 0 100%)",
          }}
        >
          About Us <span></span>
        </div>
      </div>
    </div>
  );
};


  const image =
    "https://images.pexels.com/photos/20851618/pexels-photo-20851618.jpeg";

  return (
    <div className="relative w-full  bg-[#f8f1eb] flex flex-col md:flex-row justify-between items-center">

      {/* Left clipped header */}
      <AboutHeader />

      {/* Right image */}
      <img
        src={image}
        alt="About"
        className="w-full md:w-[80%] mr-2 h-120 ml-auto rounded-2xl shadow-xl object-cover"
      />
    </div>
  );
}
