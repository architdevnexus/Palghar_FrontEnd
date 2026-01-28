import AboutHeader from "../../Components/About/AboutHero";
import Commitment from "../../Components/About/Commitment";
import CoreSectors from "../../Components/About/CoreSectors";
import ElementsTogether from "../../Components/About/ElementsTogether";
import ModernTransportation from "../../Components/About/ModernTransportation";
import OurVision from "../../Components/About/OurVision";
import RegionToDevelop from "../../Components/About/RegionToDevelop";
import GetInTouch from "../../Components/Form/GetInTouch";
import WhatWeDo from "../../Components/WhatWeDo"
export default function AboutUS() {
    return (
        <div className="w-full overflow-hidden">
            <AboutHeader />
            <Commitment />
            <CoreSectors />
            <OurVision />

            {/* RESPONSIVE SECTION */}
            <div className="w-full p-7 md:p-7  " >

                <section className=" bg-white font-normal text-(--black-color) relative max-w-7xl mx-auto mt-10 px-4 y-6 sm:px-6 sm:py-8 md:px-10 md:py-10 rounded-2xl leading-relaxed text-sm sm:text-base d:text-lg">
                    {/* Top Icon */}
                    <img
                        src="/blogicon.svg"
                        alt=""
                        className="
          absolute 
          w-8 sm:w-10 md:w-12 
          -top-4 
          left-4 
          sm:-left-6
        "
                    />

                    <p className="text-center md:text-left">
                        We wish has to be a unique chain of self-sufficient high
                        <span className="font-semibold"> “PALGHAR INFRASTRUCTURE LLP” </span>
                        quality residential as well as commercial premises, Offering ideal living
                        environment with latest available facilities and amenities, Providing a
                        range of flats in Township. The Powerful Infrastructure ensures access to
                        all the basic amenities that are complemented by exclusive features.
                        Every convenience provided in these building are strategic value
                        addition.
                    </p>

                    {/* Bottom Icon */}
                    <img
                        src="/blogicon.svg"
                        alt=""
                        className=" absolute rotate-180 w-8 sm:w-10 md:w-12 -bottom-4 right-4 sm:-right-6 "
                    />
                </section>
            </div>

            <ModernTransportation />
            <ElementsTogether />
            <RegionToDevelop />
            <WhatWeDo />
            <GetInTouch />
        </div>
    );

}