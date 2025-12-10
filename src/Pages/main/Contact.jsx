import ContactHero from "../../Components/Contact/ContactHero";
import OtherCompany from "../../Components/Contact/OtherCompany";
import GetInTouch from "../../Components/Form/GetInTouch";
import HomeMap from "../../Components/Maps/HomeMap";

export default function Contact() {
    return (
        <div className="relative w-full">

            {/* HERO */}
            <ContactHero />

            {/* FORM OVERLAPPING HERO */}
            <div
                className="
                    relative 
                    w-full 
                    flex 
                    justify-center
                "
                style={{ marginTop: "-60px" }}   
            >
                <div className="w-[95%]">
                    <GetInTouch />
                </div>
            </div>

            {/* MAP SECTION */}
            <div className="mt-10">
                <HomeMap />
            </div>
            <OtherCompany/>
        </div>
    );
}
