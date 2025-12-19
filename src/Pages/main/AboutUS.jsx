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
        <div>
            <AboutHeader />
            <Commitment />
            <CoreSectors />
            <OurVision />
            <section className="bg-white font-semibold text-(--black-color) relative max-w-7xl p-7 rounded-2xl mx-auto mt-12">
                <img src="/blogicon.svg" alt="" className=" left-0 w-12 md:-left-10  -top-5 absolute" />
                We wish  has to be a unique chain of self-sufficient high “PALGHAR INFRASTRUCTURE LLP” quality residential as well as
                commercial premises, Offering ideal living environment with  latest available facilities and
                amenities, Providing a range of flats in Township. The Powerful Infrastructure ensures access to all the basic
                amenities that are complemented  by exclusive features. Every convenience provided in these
                building are strategic value addition
            </section>
            <ModernTransportation />
            <ElementsTogether />
            <RegionToDevelop/>
            <WhatWeDo />
            <GetInTouch />
        </div>
    )
}