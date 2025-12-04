import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import Data from "../../DataStore/ESTATE.json";
import NewProject from "../Cards/NewProjects";

export default function NewProjectsSlider() {
  const allProjects = Data?.palghar_properties || [];

  return (
    <div className="w-full py-12 relative">

      <h2 className="text-3xl font-bold text-center text-black mb-8 px-6">
        Checkout New Projects in Maharashtra
        <br />
        <span className="text-gray-400 text-center text-xl font-medium">
          Find the top real estate in Maharashtra
        </span>
      </h2>
      <div className="flex gap-3 p-3 items-center">

      {/* Navigation Arrows */}
      <div className=" top-1/2 -translate-y-1/2 left-4 z-20">
        <button className="swiper-button-prev-custom bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition-all duration-200 hover:scale-110">
          <ChevronLeft size={22} />
        </button>
      </div>


      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 4 },
        }}
        className="px-8"
      >
        {allProjects.map((item, index) => (
          <SwiperSlide key={item?.id ?? index}>
            <NewProject
              title={item.name}
              address={item.location.area}
              bgImage={
                item?.images
                  ? item.images[0]
                  : "https://i.pinimg.com/1200x/7b/1f/ad/7b1fad74a49cc3498d892f302fba1a1c.jpg"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className=" top-1/2 -translate-y-1/2 right-4 z-20">
        <button className="swiper-button-next-custom bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition-all duration-200 hover:scale-110">
          <ChevronRight size={22} />
        </button>
      </div>
      </div>

    </div>
  );
}
