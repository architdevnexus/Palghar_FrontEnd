import React, { useMemo } from "react";
import Data from "../../DataStore/ESTATE.json";
import FindDreamHouse from "../Form/FindDreamHouse";
import WhoWeAre from "../WhoWeAre";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HomeHero = () => {
    const realData = Data?.palghar_properties ?? [];

    const { images } = useMemo(() => {
        const imgs = [];
        realData.forEach((item) => {
            if (item.images?.length > 0) imgs.push(...item.images);
        });
        return { images: imgs };
    }, [realData]);

    return (
        <div className="
            relative 
        
            h-[160vh] 
            md:h-[550px] 
            lg:h-[520px] 
            xl:h-[500px]
            rounded-2xl 
            w-full 
            overflow-hidden 
            bg-black
        ">

            {/* SWIPER BACKGROUND INSIDE CLIP-PATH */}
            <div
                className="absolute  inset-0 overflow-hidden"
                style={{
                    clipPath:
                        "polygon(50% 0%, 100% 0, 100% 23%, 100% 50%, 65% 50%, 64% 100%, 0 100%, 0% 70%, 0% 35%, 0 0)"
                }}
            >
                <Swiper
                    direction="vertical"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
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
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* LEFT SIDE FORM */}
            <div className="absolute inset-0 z-30 flex items-start md:items-center justify-center md:justify-start">
                <div className="
                    px-4 
                    md:px-10 
                    lg:px-16 
                    xl:px-20 
                    w-full 
                    flex 
                    justify-center 
                    md:justify-start
                ">
                    <div
                        className="
                            w-full
                            mt-4
                            sm:w-[380px]
                            md:w-[400px]
                            lg:w-[430px]
                        "
                    >
                        <div className="bg-white/90 p-3 rounded-xl shadow-xl backdrop-blur">
                            <FindDreamHouse />
                        </div>
                    </div>
                </div>
            </div>

            {/* WHO WE ARE SECTION — RESPONSIVE POSITIONING */}
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
