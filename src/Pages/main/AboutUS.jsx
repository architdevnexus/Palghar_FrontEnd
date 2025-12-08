import AboutHeader from "../../Components/About/AboutHero";
import Commitment from "../../Components/About/Commitment";
import CoreSectors from "../../Components/About/CoreSectors";
import ElementsTogether from "../../Components/About/ElementsTogether";
import ModernTransportation from "../../Components/About/ModernTransportation";
import GetInTouch from "../../Components/Form/GetInTouch";
import WhatWeDo from "../../Components/WhatWeDo"
export default function AboutUS(){
    return(
        <div>
            <AboutHeader/>
            <Commitment/>
            <CoreSectors/>
            <ModernTransportation/>
            <ElementsTogether/>
            <WhatWeDo />
            <GetInTouch/>
        </div>
    )
}