import AboutHeader from "../../Components/About/AboutHero";
import Commitment from "../../Components/About/Commitment";
import CoreSectors from "../../Components/About/CoreSectors";
import WhatWeDo from "../../Components/WhatWeDo"
export default function AboutUS(){
    return(
        <div>
            <AboutHeader/>
            <Commitment/>
            <CoreSectors/>
            <WhatWeDo />
        </div>
    )
}