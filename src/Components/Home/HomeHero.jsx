import React, { useMemo, useEffect } from "react";
import FindDreamHouse from "../Form/FindDreamHouse";
import WhoWeAre from "../WhoWeAre";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useMainStore } from "../../store/GetAllData";

const HomeHero = () => {
    const { loading, error, projectdata, fetchAllData } = useMainStore();

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

    /**
     * 🔥 Extract ALL images from API response
     * - properties[].images[].url
     * - projects[].image.url
     */
    const images = useMemo(() => {
        if (!projectdata?.length) return [];

        const { properties = [], projects = [] } = projectdata[0];

        //  Property images (supports multiple images per property)
        const propertyImages = properties.flatMap(
            (property) => property.images?.map((img) => img.url) || []
        );

        //  Project images (single image per project)
        const projectImages = projects.map(
            (project) => project.image?.url
        ).filter(Boolean);

        return [...propertyImages, ...projectImages];
    }, [projectdata]);


    return (
        <div
            className="
        relative 
        h-[160vh] 
        md:h-[550px] 
        lg:h-[520px] 
        xl:h-[500px]
        rounded-2xl 
        w-full 
        overflow-hidden 
        bg-black
      "
        >
            {/* SWIPER BACKGROUND */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath:
                        "polygon(50% 0%, 100% 0, 100% 23%, 100% 50%, 65% 50%, 64% 100%, 0 100%, 0% 70%, 0% 35%, 0 0)",
                }}
            >
                {images.length > 0 && (
                    <Swiper
                        direction="vertical"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        modules={[Autoplay]}
                        className="h-full w-full"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt={`slide-${i}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* LEFT FORM */}
            <div className="absolute inset-0 z-30 flex items-start md:items-center justify-center md:justify-start">
                <div className="px-4 md:px-10 lg:px-16 xl:px-20 w-full flex justify-center md:justify-start">
                    <div className="w-full mt-4 sm:w-[380px] md:w-[400px] lg:w-[430px]">
                        <div className="bg-white/90 p-3 rounded-xl shadow-xl backdrop-blur">
                            <FindDreamHouse />
                        </div>
                    </div>
                </div>
            </div>

            {/* WHO WE ARE */}
            <div
                className="
          absolute 
          z-30
          right-0 
          bottom-4
          md:bottom-0
          w-full
          sm:w-[80%]
          md:w-[60%]
          lg:w-[45%]
          px-4 
          md:px-0
        "
            >
                <WhoWeAre />
            </div>
        </div>
    );
};

export default HomeHero;
